import React, { useEffect, useState } from "react";
import useProductsStore from "../stores/useProductsStore";
import ProductsGrid from "./ProductsGrid";
import PaginationComponent from "./PaginationComponent";
import HeaderAndSearchBar from "./HeaderAndSearchBar";
import styles from "../styles/Messages.module.css";

const ProductsPage: React.FC = () => {
  const { products, loading, error, fetchProducts, page, setPage } =
    useProductsStore();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [debouncedQuery, setDebouncedQuery] = useState<string>("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 800);

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);

  useEffect(() => {
    setPage(1);
    fetchProducts(debouncedQuery);
  }, [debouncedQuery]);

  if (loading) {
    return <div className={styles.loading_message_container}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.error_message_container}>{error}</div>;
  }

  return (
    <div>
      <HeaderAndSearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <ProductsGrid products={products} />
      <PaginationComponent searchQuery={searchQuery} />
    </div>
  );
};

export default ProductsPage;
