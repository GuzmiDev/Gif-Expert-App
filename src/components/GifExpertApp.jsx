import React, { useState } from "react";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "One Punch",
    "Samurai X",
    "Dragon Ball",
  ]);

  const handleAdd = () => {
    // setCategories([...categories, "HunterXHunter"]);
    setCategories((categories) => [...categories, "HunterXHunter"]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <hr />

      <button onClick={handleAdd}>Agregar</button>

      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
