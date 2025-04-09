// Toggletheme.jsx
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Toggletheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ ...theme, height: "50vh", padding: "20px" }}>
      <h2>Theme Toggle App</h2>
      <button
        onClick={toggleTheme}
        style={{
          padding: "10px 20px",
          cursor: "pointer",
          marginTop: "20px",
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
}
