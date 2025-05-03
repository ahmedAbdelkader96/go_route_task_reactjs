import React from "react";
import styles from "../styles/HeaderAndSearchBar.module.css";
import useAuthStore from "../../auth_module/stores/useAuthStore";
import useAppNavigation from "../../../global/routes/useAppNavigation";

const Header: React.FC = () => {
  const userName = localStorage.getItem("userName");

  const { logout } = useAuthStore();
  const { navigateToAuthPage } = useAppNavigation();

  const handleLogout = async () => {
    const isConfirmed = window.confirm("Are you sure you want to logout?");
    if (isConfirmed) {
      const succuss = await logout();
      if (succuss) {
        console.log("Logout successful");
        navigateToAuthPage();
      }
    }
  };

  return (
    <div className={styles.header_container}>
      <h1>Welcome {userName},</h1>
      <div className={styles.header_sub_container}>
        <h2>Products List </h2>

        <button onClick={handleLogout}>logout</button>
      </div>
    </div>
  );
};

export default Header;
