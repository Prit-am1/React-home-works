import { useState } from "react";

export default function TemperatureConverter() {
  const [celsius, setCelsius] = useState("");

  const handleChange = (e) => {
    setCelsius(e.target.value);
  };

  const convertToFahrenheit = (c) => {
    if (c === "" || isNaN(c)) return "";
    return ((parseFloat(c) * 9) / 5 + 32);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Temperature Converter</h2>
      <input
        type="number"
        placeholder="Enter Celsius"
        value={celsius}
        onChange={handleChange}
      />
      <p>Fahrenheit: {convertToFahrenheit(celsius)}°F</p>
    </div>
  );
}
