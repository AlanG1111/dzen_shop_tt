import React from "react";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  return { title: "Orders | dZENcode" };
}

const Orders: React.FC = () => {
  return <div>ORDERS</div>;
};

export default Orders;
