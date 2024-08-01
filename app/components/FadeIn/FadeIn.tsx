"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

const FadeIn = ({ children }: { children: ReactNode }) => {
  return <motion.div
  initial={{opacity : 0 , y : 20}}
  whileInView={{opacity : 1 , y : 0}}
  viewport={{margin : "100% 0px -300px 0px"}}
  >{children}</motion.div>;
};

export default FadeIn;
