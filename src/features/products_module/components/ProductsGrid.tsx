import React from "react";
import styles from "../styles/ProductsGrid.module.css";
import ProductsGridItem from "../components/ProductsGridItem";
import ProductModel from "../models/ProductModel";

interface ProductsGridProps {
  products: ProductModel[]; // Explicitly type the products prop
}
const ProductsGrid: React.FC<ProductsGridProps> = ({ products }) => {
  return (
    <div className={styles.products_grid}>
      {products.map((product: ProductModel) => (
        <ProductsGridItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsGrid;
