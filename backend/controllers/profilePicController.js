const {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
  ListObjectsV2Command,
  DeleteObjectsCommand,
  HeadObjectCommand,
} = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const multer = require("multer");
const multerS3 = require("multer-s3");
const path = require("path");

// Configure AWS S3 client
const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

// Configure multer
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_BUCKET_NAME,
    acl: "private",
    key: function (req, file, cb) {
      const fileExtension = path.extname(file.originalname).toLowerCase();
      const id = req.id;
      cb(null, `profile-pic/${id}${fileExtension}`);
    },
  }),
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB
  },
  fileFilter: function (req, file, cb) {
    const allowedTypes = /jpeg|jpg|png|gif/i;
    const extname = allowedTypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimetype = allowedTypes.test(file.mimetype);
    if (extname && mimetype) {
      return cb(null, true);
    } else {
      return cb(
        new Error(
          "Invalid file type. Only JPEG, JPG, PNG, and GIF files are allowed."
        )
      );
    }
  },
});

const checkAndDeleteExistingFile = async (id) => {
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Prefix: `profile-pic/${id}`,
  };

  try {
    const data = await s3.send(new ListObjectsV2Command(params));
    if (data.Contents && data.Contents.length > 0) {
      const deleteParams = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Delete: {
          Objects: data.Contents.map((obj) => ({ Key: obj.Key })),
        },
      };
      await s3.send(new DeleteObjectsCommand(deleteParams));
    }
  } catch (err) {
    throw new Error(
      "Error checking or deleting existing files: " + err.message
    );
  }
};

const setProfilePic = (req, res) => {
  const id = req.id;

  checkAndDeleteExistingFile(id)
    .then(() => {
      upload.single("file")(req, res, (err) => {
        if (err) {
          return res.status(400).json({ message: err.message });
        }
        res.status(200).json({
          message: "Profile Pic uploaded successfully",
        });
      });
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
};
const getProfilePic = async (id) => {
  const possibleExtensions = ["jpeg", "jpg", "png", "gif"]; // Add more extensions if needed
  const defaultPicKey = `profile-pic/default.jpg`;

  try {
    let found = false;
    let profilePicKey = "";

    // Check for each extension if the file exists
    for (const ext of possibleExtensions) {
      profilePicKey = `profile-pic/${id}.${ext}`;

      const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: profilePicKey,
      };

      try {
        await s3.send(new HeadObjectCommand(params));
        found = true;
        break; // Exit loop once the file is found
      } catch (err) {
        if (err.name === "NotFound") {
          continue; // Continue to next extension
        } else {
          throw new Error("Error accessing S3");
        }
      }
    }

    // Use default picture if no file was found
    if (!found) {
      profilePicKey = defaultPicKey;
    }

    const urlParams = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: profilePicKey,
      Expires: 10 * 60, // 10 minutes
    };

    const url = await getSignedUrl(s3, new GetObjectCommand(urlParams), {
      expiresIn: 10 * 60,
    });

    return url;
  } catch (err) {
    throw new Error(`Error generating pre-signed URL: ${err.message}`);
  }
};

module.exports = { setProfilePic, getProfilePic };
