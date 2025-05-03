import { apiClient } from "../../../global/services/apiClient";
import UserModel from "../models/UserModel";

class AuthRepo {
  async signin(
    email: string,
    password: string
  ): Promise<{ user: UserModel; accessToken: string; refreshToken: string }> {
    try {
      const response = await apiClient.post("/auth/signin", {
        email,
        password,
      });
      const { user, accessToken, refreshToken } = response.data;
      // Save tokens to localStorage
      localStorage.setItem("accessToken", accessToken); // Save token
      localStorage.setItem("refreshToken", refreshToken); // Save refresh token
      return { user: UserModel.fromJSON(user), accessToken, refreshToken }; // Return the data
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || "SignIn failed";
      throw new Error(errorMessage); // Throw error for the controller to handle
    }
  }

  async signup(
    userData: object
  ): Promise<{ user: UserModel; accessToken: string; refreshToken: string }> {
    try {
      const response = await apiClient.post("/auth/signup", userData);
      const { user, accessToken, refreshToken } = response.data;
      // Save tokens to localStorage
      localStorage.setItem("accessToken", accessToken); // Save token
      localStorage.setItem("refreshToken", refreshToken); // Save refresh token

      return { user: UserModel.fromJSON(user), accessToken, refreshToken }; // Return the data
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || "SignUp failed";
      throw new Error(errorMessage); // Throw error for the controller to handle
    }
  }

  async logout(): Promise<boolean> {
    try {
      localStorage.removeItem("accessToken"); 
      localStorage.removeItem("refreshToken"); 
      return true;
    } catch (error) {
      const errorMessage = error.message || "Logout failed";
      throw new Error(errorMessage);
    }
  }
}

export default AuthRepo;
