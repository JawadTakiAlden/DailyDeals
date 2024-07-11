"use client";
import { faqs } from "@/app/dumy/dumyData";
import { Box } from "@mui/material";
import React, { useState } from "react";
import FaqRow from "./FaqRow";

const FaqList = () => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <Box>
      {faqs.map((faq) => {
        return (
          <FaqRow
            key={faq.id}
            faq={faq}
            open={open}
            setOpen={setOpen}
          />
        );
      })}
    </Box>
  );
};

export default FaqList;
