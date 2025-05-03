import styles from "../styles/AuthPage.module.css";
import React, { useState } from "react";

interface GeneralAuthInputProps {
  title: string;
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
}

const GeneralAuthInput: React.FC<GeneralAuthInputProps> = ({
  title,
  placeholder,
  value,
  setValue,
}) => {
  return (
    <div className={styles.input_container}>
      <label>{title}</label>
      <div className={styles.input_wrapper}>
        <input
          type="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          aria-label={title}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default GeneralAuthInput;
