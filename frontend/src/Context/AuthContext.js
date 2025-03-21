import { createContext, useState, useEffect, useContext } from "react";
import { jwtDecode } from "jwt-decode";
import { axiosPrivate } from "../Api/axios";

const AuthContext = createContext({});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    id: null,
    role: "Guest",
    accessToken: null,
  });

  const manageAuth = (accessToken) => {
    try {
      const decodedToken = jwtDecode(accessToken);
      const id = decodedToken.UserInfo.id;
      const role = decodedToken.UserInfo.role;

      setAuth({
        id,
        role,
        accessToken,
      });
    } catch (error) {
      console.error("Failed to decode token", error);
      setAuth({
        id: null,
        role: "Guest",
        accessToken: null,
      });
    }
  };

  const logout = async () => {
    try {
      await axiosPrivate.get("/logout");
      setAuth({
        id: null,
        role: "Guest",
        accessToken: null,
      });
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  const refresh = async () => {
    try {
      const response = await axiosPrivate.get("/refresh");
      const accessToken = response?.data?.accessToken;
      manageAuth(accessToken);
      return accessToken;
    } catch (error) {
      console.error("Refresh failed", error);
      throw error;
    }
  };

  useEffect(() => {
    // Request interceptor to add authorization header if missing
    const requestInterceptor = axiosPrivate.interceptors.request.use(
      async (config) => {
        if (!config.headers["Authorization"]) {
          const accessToken = auth.accessToken;
          if (accessToken) {
            config.headers["Authorization"] = `Bearer ${accessToken}`;
          }
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Response interceptor to handle 403 errors
    const responseInterceptor = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 403 && !originalRequest._retry) {
          originalRequest._retry = true;
          try {
            const newAccessToken = await refresh();
            originalRequest.headers[
              "Authorization"
            ] = `Bearer ${newAccessToken}`;
            return axiosPrivate(originalRequest);
          } catch (err) {
            return Promise.reject(err);
          }
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosPrivate.interceptors.request.eject(requestInterceptor);
      axiosPrivate.interceptors.response.eject(responseInterceptor);
    };
  }, [auth, refresh]);

  return (
    <AuthContext.Provider
      value={{ auth, setAuth, manageAuth, logout, refresh }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;