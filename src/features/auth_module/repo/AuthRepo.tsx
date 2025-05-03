import { encryptAndSaveTokens } from "../../../global/helpers/storageTokens";
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

      const newUser = UserModel.fromJSON(user);
      localStorage.setItem("userName", newUser.name);
      encryptAndSaveTokens(accessToken, refreshToken); 
      return { user: newUser, accessToken, refreshToken };
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || "SignIn failed";
      throw new Error(errorMessage);
    }
  }

  async signup(
    userData: object
  ): Promise<{ user: UserModel; accessToken: string; refreshToken: string }> {
    try {
      const response = await apiClient.post("/auth/signup", userData);
      const { user, accessToken, refreshToken } = response.data;
      const newUser = UserModel.fromJSON(user);
      localStorage.setItem("userName", newUser.name);
      encryptAndSaveTokens(accessToken, refreshToken); 
      return { user: newUser, accessToken, refreshToken };
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || "SignUp failed";
      throw new Error(errorMessage);
    }
  }

  async logout(): Promise<boolean> {
    try {
      localStorage.removeItem("userName");
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
