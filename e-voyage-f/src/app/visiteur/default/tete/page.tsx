"use client";
import React, { useState, useEffect } from "react";
import InputEmoji from "react-input-emoji";

export default function EmojiInput() {
  const [text, setText] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("white");

  useEffect(() => {
    const updateBackgroundColor = () => {
      if (document.body.classList.contains("dark")) {
        setBackgroundColor("#807d79");
      } else {
        setBackgroundColor("white");
      }
    };
    updateBackgroundColor();
    const observer = new MutationObserver(updateBackgroundColor);
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <InputEmoji
        value={text}
        onChange={setText}
        cleanOnEnter
        placeholder="Type a message"
        shouldReturn={false}
        shouldConvertEmojiToImage={false}
        background={backgroundColor}
        color={backgroundColor === "black" ? "white" : "black"}
      />
    </div>
  );
}