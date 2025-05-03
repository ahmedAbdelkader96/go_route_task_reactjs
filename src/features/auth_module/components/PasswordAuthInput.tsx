import styles from "../styles/AuthPage.module.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

interface GeneralAuthInputProps {
  value: string;
  setValue: (value: string) => void;
}

const PasswordAuthInput: React.FC<GeneralAuthInputProps> = ({
  value,
  setValue,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.input_container}>
      <label>Password</label>
      <div className={styles.input_wrapper}>
        <input
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          aria-label="Password"
          placeholder="Enter Password here..."
        />
        <button type="button" onClick={() => setShowPassword(!showPassword)}>
          <FontAwesomeIcon
            icon={showPassword ? faEye : faEyeSlash}
            color={showPassword ? "#007bff" : "gray"}
          />
        </button>
      </div>
    </div>
  );
};

export default PasswordAuthInput;
