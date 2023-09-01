import React from "react";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  return { title: "Products | dZENcode " };
}

const Products: React.FC = () => {
  return <div>Products</div>;
};

export default Products;
