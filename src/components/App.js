import React, { useState } from "react";
import ShoppingList from "./ShoppingList";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleDarkModeToggle() {
    setIsDarkMode((prevMode) => !prevMode);
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  return (
    <div className={`App ${isDarkMode ? "dark" : "light"}`}>
      <DarkModeToggle isDarkMode={isDarkMode} onDarkModeToggle={handleDarkModeToggle} />
      <ShoppingList items={items.filter((item) => selectedCategory === "All" || item.category === selectedCategory)} onCategoryChange={handleCategoryChange} />
    </div>
  );
}

export default App;
