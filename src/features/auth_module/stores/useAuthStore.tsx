import { create } from "zustand";
import AuthController  from "../controllers/AuthController.tsx";
import UserModel from "../models/UserModel.tsx";

interface AuthStore {
  user: UserModel | null;
  accessToken: string | null;
  refreshToken: string | null;
  loading: boolean;
  error: string | null;
  signin: (email: string, password: string) => Promise<boolean>;
  signup: (userData: object) => Promise<boolean>; // Return boolean
  logout: () => Promise<boolean>;
  setLoading: (loading: boolean) => void;
  setUser: (user: UserModel | null) => void;
  setAccessToken: (accessToken: string | null) => void;
  setRefreshToken: (refreshToken: string | null) => void;
  setError: (error: string | null) => void;
}
 

export const useAuthStore = create<AuthStore>((set) => {
  const authController = new AuthController();

  return {
    user: null,
    accessToken: null,
    refreshToken: null,
    loading: false,
    error: null,
    setLoading: (loading: boolean) => set({ loading }),
    setUser: (user: UserModel | null) => set({ user }),
    setAccessToken: (accessToken: string | null) => set({ accessToken }),
    setRefreshToken: (refreshToken: string | null) => set({ refreshToken }),
    setError: (error: string | null) => set({ error }),
    signin: (email: string, password: string) => authController.signin(email, password),
    signup: async (userData: object) => {
      return await authController.signup(userData); // Return boolean from controller
    },
    logout: () => authController.logout(),
  };
});

export default useAuthStore;