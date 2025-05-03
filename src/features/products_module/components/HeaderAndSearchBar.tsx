import React from "react";
import styles from "../styles/HeaderAndSearchBar.module.css";

import Header from "./Header";
import SearchBar from "./SearchBar";

interface HeaderAndSearchBarProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const HeaderAndSearchBar: React.FC<HeaderAndSearchBarProps> = ({
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <div className={styles.header_and_search_bar}>
      <Header />

      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    </div>
  );
};

export default HeaderAndSearchBar;
