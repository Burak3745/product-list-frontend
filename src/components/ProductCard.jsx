import { useState } from "react";
import ColorPicker from "./ColorPicker";
import StarRating from "./StarRating";
import "../css/ProductCard.css";

const ProductCard = ({ product }) => {
    const [selectedColor, setSelectedColor] = useState("yellow");

    const colorNames = {
        yellow: "Yellow Gold",
        rose: "Rose Gold",
        white: "White Gold",
    };

    const displayColorName = colorNames[selectedColor] || selectedColor;

    return (
        <div className="product-card">
            <img
                src={product.images[selectedColor]}
                alt={product.name}
                className="product-image"
            />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">${product.priceUSD.toLocaleString()} USD</p>
            <ColorPicker
                selectedColor={selectedColor}
                onChange={setSelectedColor}
                availableColors={product.images}
            />
            <p className="product-color">{displayColorName}</p>
            <div className="product-rating">
                <StarRating rating={product.ratingOutOf5} /> {product.ratingOutOf5}/5
            </div>
        </div>
    );
};

export default ProductCard;
