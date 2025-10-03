import React, { useState } from "react";
import "../css/ProductsFilter.css";
const ProductsFilter = ({ onFilterChange, selectedPriceRange, setSelectedPriceRange, selectedPopularity, setSelectedPopularity }) => {

    const priceRanges = [
        { label: "Tüm Fiyatlar", value: "" },
        { label: "0 - 500 USD", value: "0-500" },
        { label: "500 - 1000 USD", value: "500-1000" },
        { label: "1000 - 2000 USD", value: "1000-2000" },
        { label: "2000+ USD", value: "2000-999999" },
    ];

    const popularityOptions = [
        { label: "Tüm Popülerlik", value: "" },
        { label: "Çok İyi", value: "0.8-1", stars: 5 },
        { label: "İyi", value: "0.6-0.8", stars: 4 },
        { label: "Ne İyi / Ne Kötü", value: "0.4-0.6", stars: 3 },
        { label: "Kötü", value: "0.2-0.4", stars: 2 },
        { label: "Çok Kötü", value: "0-0.2", stars: 1 },
    ];

    const handlePriceChange = (e) => {
        const val = e.target.value;
        setSelectedPriceRange(val);
        setSelectedPopularity("");
        let [minPrice, maxPrice] = val ? val.split("-") : ["", ""];
        onFilterChange({ minPrice, maxPrice });
    };

    const handlePopularityChange = (e) => {
        const val = e.target.value;
        setSelectedPopularity(val);
        setSelectedPriceRange("");
        let [minPopularity, maxPopularity] = val ? val.split("-") : ["", ""];
        onFilterChange({ minPopularity, maxPopularity });
    };

    return (
        <div className="filters">
            <select onChange={handlePriceChange} value={selectedPriceRange}>
                {priceRanges.map((range, idx) => (
                    <option key={idx} value={range.value}>
                        {range.label}
                    </option>
                ))}
            </select>

            <select onChange={handlePopularityChange} value={selectedPopularity}>
                {popularityOptions.map((opt, idx) => (
                    <option key={idx} value={opt.value}>
                        {opt.stars ? `${opt.label} / ${"⭐"} ${opt.stars-1} - ${opt.stars}` : opt.label} 
                    </option>
                ))}
            </select>
        </div>
    );
};

export default ProductsFilter;
