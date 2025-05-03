import { FaSearch } from "react-icons/fa";
import React from "react";
import styles from "../styles/HeaderAndSearchBar.module.css";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <div className={styles.search_bar}>
      <div className={styles.input_wrapper}>
        <FaSearch className={styles.search_icon} />
        <input
          type="text"
          placeholder="Search for a doctor"
          className={styles.search_input}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
