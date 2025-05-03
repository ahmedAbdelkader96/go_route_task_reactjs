// import React, { useState, useEffect, useRef } from "react";
// import { useAuthStore } from "../../auth_module/stores/authStore.jsx";
// import useAppNavigation from "../../../global/hooks/useAppNavigation.jsx";

// export default function UserProfileButton() {
//   const { navigateToAuthPage } = useAppNavigation();
//   const { user, logout } = useAuthStore();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const menuRef = useRef(null); // Ref to track the menu container

//   const toggleMenu = () => {
//     setMenuOpen((prev) => !prev); // Toggle menu visibility
//   };

//   const handleLogout = async () => {
//     const success = await logout();
//     if (success) {
//       navigateToAuthPage();
//     }
//   };

//   // Close the menu if the user clicks outside of the menu container
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setMenuOpen(false); // Close the menu
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <div style={{ position: "relative", display: "inline-block" }} ref={menuRef}>
//       {/* User Profile Button */}
//       <button
//         onClick={toggleMenu}
//         style={{
//           padding: "0.5rem 1rem",
//           borderRadius: "5px",
//           backgroundColor: "#007bff",
//           color: "#fff",
//           border: "none",
//           cursor: "pointer",
//         }}
//       >
//         {user?.name || "Profile"}
//       </button>

//       {/* Dropdown Menu */}
//       {menuOpen && (
//         <div
//           style={{
//             position: "absolute",
//             top: "120%",
//             left: -80,
//             backgroundColor: "#fff",
//             boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//             borderRadius: "5px",
//             zIndex: 1000,
//             width: "150px",
//           }}
//         >
//           <button
//             onClick={() => console.log("View Profile")}
//             style={{
//               display: "block",
//               width: "100%",
//               padding: "0.5rem",
//               textAlign: "left",
//               backgroundColor: "transparent",
//               border: "none",
//               cursor: "pointer",
//             }}
//           >
//             View Profile
//           </button>
//           <button
//             onClick={() => console.log("Settings")}
//             style={{
//               display: "block",
//               width: "100%",
//               padding: "0.5rem",
//               textAlign: "left",
//               backgroundColor: "transparent",
//               border: "none",
//               cursor: "pointer",
//             }}
//           >
//             Settings
//           </button>
//           <button
//             onClick={handleLogout}
//             style={{
//               display: "block",
//               width: "100%",
//               padding: "0.5rem",
//               textAlign: "left",
//               backgroundColor: "transparent",
//               border: "none",
//               cursor: "pointer",
//             }}
//           >
//             Logout
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }