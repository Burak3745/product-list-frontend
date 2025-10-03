import { useRef } from "react";

const ProductCarousel = ({ products }) => {
  const ref = useRef(null);

  const scroll = (dir) => {
    if (ref.current) {
      ref.current.scrollBy({ left: dir === "left" ? -300 : 300, behavior: "smooth" });
    }
  };

  return (
    <div className="carousel-container">
      <button onClick={() => scroll("left")}>◀</button>
      <div className="carousel" ref={ref}>
        {products.map((p) => (
          <div key={p.id} className="carousel-item">
            <img src={p.images.yellow} alt={p.name} />
            <h4>{p.name}</h4>
          </div>
        ))}
      </div>
      <button onClick={() => scroll("right")}>▶</button>
    </div>
  );
};

export default ProductCarousel;
