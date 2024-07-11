import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Not Found",
  description: "Requested Page Not Found",
};

const NotFoundPage = () => {
  return <div>NotFoundPage</div>;
};

export default NotFoundPage;
