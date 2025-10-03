import React from "react";
import "../css/ColorPicker.css";

const ColorPicker = ({ selectedColor, onChange, availableColors }) => {
  const colors = Object.keys(availableColors || {});

  return (
    <div className="color-picker">
      {colors.map((color) => (
        <button
          key={color}
          type="button"
          className={`color-wrapper ${selectedColor === color ? "selected" : ""}`}
          onClick={() => onChange(color)}
          aria-label={color}
        >
          <span className={`color-circle ${color}`} />
        </button>
      ))}
    </div>
  );
};

export default ColorPicker;
