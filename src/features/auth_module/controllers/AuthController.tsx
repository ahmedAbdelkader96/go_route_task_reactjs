import UserModel from "../models/UserModel";
import AuthRepo from "../repo/AuthRepo";
import { useAuthStore } from "../stores/useAuthStore";

class AuthController {
  private authRepo: AuthRepo;

  constructor() {
    this.authRepo = new AuthRepo();
    this.signin = this.signin.bind(this);
    this.signup = this.signup.bind(this);
    this.logout = this.logout.bind(this);
  }

  async signin(email: string, password: string): Promise<boolean> {
    const authStore = useAuthStore.getState(); // Access Zustand store methods
    authStore.setLoading(true);
    try {
      const { user, accessToken, refreshToken } = await this.authRepo.signin(email, password); // Call the repository
      authStore.setUser(user);
      authStore.setAccessToken(accessToken);
      authStore.setRefreshToken(refreshToken);
      return true;
    } catch (error: any) {
      console.error("Failed to login:", error);
      authStore.setError(error.message || "An unknown error occurred during login");
      return false;
    } finally {
      authStore.setLoading(false);
    }
  }

  async signup(userData: object): Promise<boolean> {
    const authStore = useAuthStore.getState(); // Access Zustand store methods
    authStore.setLoading(true);
    try {
      const { user, accessToken, refreshToken } = await this.authRepo.signup(userData); // Call the repository
      authStore.setUser(user);
      authStore.setAccessToken(accessToken);
      authStore.setRefreshToken(refreshToken);
      return true; // Return the object
    } catch (error: any) {
      console.error("Failed to signup:", error);
      authStore.setError(error.message || "An unknown error occurred during signup");
      throw error; // Re-throw the error for the caller to handle
    } finally {
      authStore.setLoading(false);
    }
  }

  async logout(): Promise<boolean> {
    const authStore = useAuthStore.getState(); // Access Zustand store methods
    authStore.setLoading(true);
    try {
      const success = await this.authRepo.logout(); // Call the repository
      if (success) {
        authStore.setUser(null);
        authStore.setAccessToken(null);
        authStore.setRefreshToken(null);
        return true;
      }
      return false;
    } catch (error: any) {
      console.error("Failed to logout:", error);
      authStore.setError(error.message || "An unknown error occurred during logout");
      return false;
    } finally {
      authStore.setLoading(false);
    }
  }
}

export default AuthController;