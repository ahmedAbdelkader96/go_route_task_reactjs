import React from "react";
import ScrollRevealBottom from "../../../global/components/ScrollReveal";
import styles from "../styles/ProductsGrid.module.css";
import ProductModel from "../models/ProductModel";
import animationStyles from "../../../global/styles/animations.module.css";

interface ProductsGridItemProps {
  product: ProductModel; // Explicitly type the product prop
}

const ProductsGridItem: React.FC<ProductsGridItemProps> = ({ product }) => {
  return (
    <ScrollRevealBottom >
      <div key={product.id} className={styles.products_grid_item}>
        <div className={styles.products_grid_item_image_container}>
          <img src={product.image} alt={product.title} />
        </div>

        <div className={styles.products_grid_item_texts}>
          <h1>{product.title}</h1>
          <h2>{product.description}</h2>

          <h3>{product.price} $</h3>
        </div>
      </div>
    </ScrollRevealBottom>
  );
};

export default ProductsGridItem;
