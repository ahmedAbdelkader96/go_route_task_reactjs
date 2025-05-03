import React, { useState } from "react";
import { useAuthStore } from "../stores/useAuthStore.tsx";
import useAppNavigation from "../../../global/routes/useAppNavigation.tsx";
import UserModel from "../models/UserModel.tsx";

const AuthPage = () => {
  const { navigateToHomePage } = useAppNavigation();
  const { user, accessToken, refreshToken, loading, error, signin, signup } =
    useAuthStore();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [jobTitle, setJobTitle] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }
    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    if (isLogin) {
      const success = await signin(email, password);
      if (success) {
        navigateToHomePage();
      }
    } else {
      const userData = new UserModel({
        name,
        jobTitle,
        email,
        password,
      });
      const success = await signup(userData);
      if (success) {
        navigateToHomePage();
      }
    }
  };

  return (
    <div>
      <h1>{isLogin ? "Log In" : "Sign Up"}</h1>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <>
            <div>
              <label>Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                aria-label="Name"
              />
            </div>
            <div>
              <label>Job Title:</label>
              <input
                type="text"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                aria-label="Job Title"
              />
            </div>
          </>
        )}
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-label="Email"
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            aria-label="Password"
          />
        </div>
        {loading && <p>Loading...</p>}
        <button type="submit" disabled={loading}>
          {isLogin ? "Log In" : "Sign Up"}
        </button>
      </form>
      {error && <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>}
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Switch to Sign Up" : "Switch to Log In"}
      </button>
    </div>
  );
};

export default AuthPage;