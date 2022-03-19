import React, { useState } from "react";

export const AddCategory = () => {
  const [inputValue, setInputValue] = useState("Hola Mundo");

  const handleInputeChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSumbit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSumbit}>
      <input type="text" value={inputValue} onChange={handleInputeChange} />
    </form>
  );
};
