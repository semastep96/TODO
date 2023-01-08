import React from "react";
import "./Input.css";
import { useState } from "react";

interface InputProps {
  placeholder: string;
  addTask: (text: string) => void;
}

const Input = ({ placeholder, addTask }: InputProps) => {
  const [text, setText] = useState("");
  const onInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value);
  };

  const onSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
    if (!text) {
      return;
    }
    addTask(text);
    setText("");
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder={placeholder}
        className="input"
        value={text}
        onChange={onInput}
      />
      <button type="submit" className="button">
        +
      </button>
    </form>
  );
};

export { Input };
