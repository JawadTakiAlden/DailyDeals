"use client";
import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import { color } from "framer-motion";

const TextEditor = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  return (
    <JoditEditor
      ref={editor}
      value={content}
      config={{
        readonly: false,
        theme: "dark",
        
      }}
      onBlur={(newContent) => {
        console.log(newContent);
      }}
      //   onChange={}
    />
  );
};

export default TextEditor;
