import React, { useEffect, useState } from "react";
import useProductsStore from "../stores/useProductsStore";
import SearchBar from "./SearchBar";
import ProductsGrid from "./ProductsGrid";
import Header from "./Header";
import PaginationComponent from "./PaginationComponent";

export default function ProductsPage() {
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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div style={{ color: "red" }}>{error}</div>;
  }

  return (
    <div>
      <Header />

      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <ProductsGrid products={products} />
      <PaginationComponent searchQuery={searchQuery} />
    </div>
  );
}
