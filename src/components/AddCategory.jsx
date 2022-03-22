import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputeChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSumbit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories((e) => [inputValue, ...e]);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSumbit}>
      <input type="text" value={inputValue} onChange={handleInputeChange} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
