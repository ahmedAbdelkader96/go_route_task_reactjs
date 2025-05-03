import React from 'react';
import styles from '../styles/Header.module.css'; 
import useAuthStore from '../../auth_module/stores/useAuthStore';
import useAppNavigation from '../../../global/routes/useAppNavigation';


export default function Header() {

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
    <div className={styles.header}>
      <h1>Products List</h1>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
}
