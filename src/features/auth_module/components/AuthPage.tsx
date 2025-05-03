import React, { useState } from "react";
import { AuthForm } from "./AuthForm";
import Lottie from "lottie-react";
import AuthLottieAnimation from "../../../assets/lottie_files/authentication.json";
import styles from "../styles/AuthPage.module.css";

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className={styles.auth_page}>
      <h1>{isLogin ? "Log In" : "Sign Up"}</h1>

      <div className={styles.auth_container}>
        <Lottie
          className={styles.lottie_animation}
          animationData={AuthLottieAnimation}
          loop={true}
        />

        <AuthForm isLogin={isLogin} setIsLogin={setIsLogin} />
      </div>
    </div>
  );
};

export default AuthPage;
