import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductsFilter from "../components/ProductsFilter";
import { fetchProducts } from "../redux/productsSlice";
import ProductCard from "../components/ProductCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import "../css/ProductsPage.css";
import ProductLoading from "../components/ProductLoading";

const ProductsPage = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.products);

  const [count, setCount] = useState(1);
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [selectedPopularity, setSelectedPopularity] = useState("");

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleFilterChange = (filters) => {
    dispatch(fetchProducts(filters));
  };

  const handleRetry = (filters) => {
    dispatch(fetchProducts(filters));
  };

  useEffect(() => {
    const updateCount = () => {
      const width = window.innerWidth;

      if (width >= 1280) {
        setCount(4);
      } else if (width >= 1024) {
        setCount(3);
      } else if (width >= 768) {
        setCount(2);
      } else {
        setCount(1);
      }
    };

    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  return (
    <div className="products-page-container">
      <h1 className="product-list-text">Product List</h1>

      {status === "loading" && (
        <div className="skeleton-product-grid">
          {Array.from({ length: count }).map((_, i) => (
            <ProductLoading key={i} />
          ))}
        </div>
      )}

      {status === "failed" && (
        <div className="failed-message">
          <p>Oops! Failed to load products 😢</p>
          <p>Please check your internet connection or try again.</p>
          <button onClick={handleRetry} className="retry-button">
            Retry
          </button>
        </div>
      )}

      {status === "succeeded" && (
        <div>
          <ProductsFilter onFilterChange={handleFilterChange} selectedPriceRange={selectedPriceRange}
            setSelectedPriceRange={setSelectedPriceRange} selectedPopularity={selectedPopularity} setSelectedPopularity={setSelectedPopularity} />
          {items.length > 0 ? (
            <Swiper
              spaceBetween={137}
              centeredSlides={false}
              navigation={true}
              scrollbar={{ draggable: true, el: '.swiper-scrollbar' }}
              modules={[Pagination, Navigation, Scrollbar]}
              className="mySwiper"
              style={{ padding: '30px 0', position: 'relative' }}
              slidesOffsetBefore={52}
              slidesOffsetAfter={70}
              breakpoints={{
                480: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
            >
              {items.map((p) => (
                <SwiperSlide key={p.id} style={{ width: 'auto' }}>
                  <ProductCard product={p} />
                </SwiperSlide>
              ))}

              <div
                className="swiper-scrollbar"
                style={{
                  width: '92.5%',
                  bottom: '4px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  position: 'absolute',
                }}
              ></div>
            </Swiper>
          ) : (
            <div className="no-items-message">
              <p>😕 No products found.</p>
              <p>Try adjusting your filters or check back later.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
