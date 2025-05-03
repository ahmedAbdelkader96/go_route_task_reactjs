import React, { useEffect, useState } from "react";
import { useAuthStore } from "../stores/useAuthStore.tsx";
import useAppNavigation from "../../../global/routes/useAppNavigation.ts";
import styles from "../styles/AuthPage.module.css";
import { emailRegex, passwordRegex } from "../../../global/constants/regex.ts";
import GeneralAuthInput from "./GeneralAuthInput.tsx";
import PasswordAuthInput from "./PasswordAuthInput.tsx";

export const SignUp: React.FC = ({}) => {
  const { navigateToHomePage } = useAppNavigation();
  const { loading, error, signup, setError } = useAuthStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [jobTitle, setJobTitle] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;
    setError(null);

    if (name.length < 3) {
      setError("Name must be at least 3 characters long.");
      return;
    }
    if (jobTitle.length < 3) {
      setError("Job title must be at least 3 characters long.");
      return;
    }
    if (!email.match(emailRegex)) {
      //alert("Please enter a valid email address.");
      setError("Please enter a valid email address.");
      return;
    }
    if (!password.match(passwordRegex)) {
      setError(
        "Password requirements are as follows: Minimum length of 8 characters, at least one letter, one number, and one special character."
      );

      return;
    }

    const userData = {
      name: name,
      jobTitle: jobTitle,
      email: email,
      password: password,
    };
    const success = await signup(userData);
    if (success) {
      navigateToHomePage();
    }
  };

  useEffect(() => {
    setError(null);
  }, []);

  return (
    <form className={styles.form_container_details} onSubmit={handleSubmit}>
      <GeneralAuthInput
        title="Name"
        placeholder="Enter Name Here ..."
        value={name}
        setValue={setName}
      />

      <GeneralAuthInput
        title="Job Title"
        placeholder="Enter Job Title Here ..."
        value={jobTitle}
        setValue={setJobTitle}
      />

      <GeneralAuthInput
        title="Email"
        placeholder="Enter Email Here ..."
        value={email}
        setValue={setEmail}
      />

      <PasswordAuthInput value={password} setValue={setPassword} />

      {loading ? (
        <button className={`${styles.loading_button}`} disabled={loading}>
          <span className={styles.spinner}></span>
        </button>
      ) : (
        <button className={`${styles.submit_button}`} type="submit">
          Sign Up
        </button>
      )}
      {error && <p className={styles.error_message}>{error}</p>}
    </form>
  );
};
