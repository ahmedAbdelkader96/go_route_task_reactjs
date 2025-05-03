import React from "react";
import { useEffect } from "react";
import styles from "../styles/PaginationComponent.module.css";
import useProductsStore from "../stores/useProductsStore";

interface PaginationComponentProps {
  searchQuery: string;
}

const PaginationComponent: React.FC<PaginationComponentProps> = ({
  searchQuery,
}) => {
  const { page, setPage, fetchProducts } = useProductsStore();

  const handleNextPage = () => {
    setPage(page + 1);
    fetchProducts(searchQuery);
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
      fetchProducts(searchQuery);
    }
  };

  return (
    <div className={styles.pagination}>
      <button
        onClick={handlePreviousPage}
        disabled={page === 1}
        className={page === 1 ? styles.disabledButton : ""}
      >
        Previous
      </button>
      <span>Page {page}</span>
      <button onClick={handleNextPage}>Next</button>
    </div>
  );
};

export default PaginationComponent;
