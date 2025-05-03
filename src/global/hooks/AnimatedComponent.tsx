import useOnScreen from "./UseOnScreen.jsx";
import React, { useRef } from "react";
import styles from "./AnimatedComponent.module.css";
// import { useTranslation } from "react-i18next";

export function AnimatedComponentFromBottom({ children }) {
  const ref = useRef(null);
  const isVisible = useOnScreen(ref);

  return (
    <div
      ref={ref}
      className={`${styles.animated_component_from_bottom} ${
        isVisible ? styles.visible : ""
      }`}
    >
      {children}
    </div>
  );
}


