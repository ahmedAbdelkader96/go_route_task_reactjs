import React, { useState } from "react";
import { useAuthStore } from "../stores/useAuthStore.tsx";
import useAppNavigation from "../../../global/routes/useAppNavigation.ts";
import UserModel from "../models/UserModel.tsx";
import styles from "../styles/AuthPage.module.css";
import { emailRegex, passwordRegex } from "../../../global/constants/regex.ts";
import { SignIn } from "./SignIn.tsx";
import { SignUp } from "./SignUp.tsx";

interface AuthFormProps {
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthForm: React.FC<AuthFormProps> = ({ isLogin, setIsLogin }) => {
  return (
    <div className={styles.auth_form_container}>
      {isLogin ? <SignIn /> : <SignUp />}

      <div className={styles.switch_container}>
        {isLogin ? "Don't have an account?" : "Already have an account?"}
        <button onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Sign Up" : "Log In"}
        </button>
      </div>
    </div>
  );
};
