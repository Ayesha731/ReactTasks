import React from "react";
import { sleep } from "./utils";
function Product({ product, darkMode, style, chooseProduct }) {
  sleep(1);
  const styles = {
    backgroundColor: darkMode ? "#2b283a" : "whitesmoke",
    color: darkMode ? "white" : "#2b283a",
  };
  if (!product) {
    return <p>No product data available.</p>; // Or just return null
  }

  return (
    <div
      className="product-card"
      style={style}
      onClick={() => {
        chooseProduct(product.id);
      }}
    >
      <p className="truncate">{product.name}</p>
    </div>
  );
}

export default React.memo(Product);
