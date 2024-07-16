require("dotenv").config();
import express, { json, urlencoded } from "express";
import cors from "cors";
import corsOptions from "./config/corsOptions";
import { logger } from "./middleware/logEvents";
import errorHandler from "./middleware/errorHandler";
import cookieParser from "cookie-parser";
import { connection } from "mongoose";
import connectDB from "./config/dbConn";

const PORT = process.env.PORT;
const app = express();

connectDB();
app.use(logger);
app.use(cors(corsOptions));
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.json({ website: "ctm" });
});

app.use("/signup", require("./routes/signup"));
app.use("/login", require("./routes/login"));
app.use("/refresh", require("./routes/refresh"));
app.use("/logout", require("./routes/logout"));

app.all("*", (req, res) => {
  res.status(404).json({ error: "404 Not Found" });
});

app.use(errorHandler);

connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
