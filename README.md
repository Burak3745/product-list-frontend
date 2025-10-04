# Product Listing Frontend

This is the **frontend application** for the Product Listing App.  
It displays a list of products fetched from the backend API and provides features like dynamic pricing, image color switching, popularity scores, and product filtering.

---

## 🚀 Features

- **Product List**: Displays products with name, price, weight, popularity, and images.  
- **Dynamic Prices**: Prices are calculated by the backend based on real-time gold prices.  
- **Color Picker**: Switch between product images (yellow, rose, white) using a circular color selector.  
- **Popularity Score**: Popularity is displayed on a 1–5 scale with one decimal precision.  
- **Carousel**: Browse products with arrow buttons and swipe gestures (desktop & mobile).  
- **Filtering**:  
  - Price range (select options)  
  - Popularity level (options like "Very Good ⭐ 5", "Good ⭐ 4", etc.)  
- **Responsive Design**: Works smoothly on both desktop and mobile devices.

---

## 🛠️ Tech Stack

- **React** (v18)  
- **React Router DOM** – for routing  
- **Redux** – for state management  
- **Axios** – for API requests  
- **CSS** – plain stylesheets  
- **Google Fonts / Local Fonts** – custom typography  

---

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Burak3745/product-list-frontend.git 
   cd product-list-frontend

2. Install dependencies:
   ```bash
   npm install

3. Configure environment variables (optional):
- Create a .env file in the project root if you want to set a custom backend API:
  ```env
  REACT_APP_API_URL=your_api_url_here

4. Run the development server:
   ```bash
   npm start

---

## 📜 Available Scripts

- **npm start** – Runs the app in development mode.
- **npm run build** – Builds the app for production.

---

## 📂 Project Structure

  ```bash
  src/
   ├── api/              # Axios-based services for managing HTTP requests (fetching data, posting, etc.)
   ├── components/       # UI components (ProductCard, ColorPicker, Filters, etc.)
   ├── css/              # Plain CSS files for modular styling of components (excluding App.css)
   ├── pages/            # Page-level components (ProductsPage)
   ├── redux/            # Redux store and slices
   ├── App.js            # Main app with router
   ├── index.js          # Entry point
   └── App.css           # Global styles
  ```

---

## 🖥️ Usage

- Navigate to **/products** to view the product list.
- Use the **color picker** under each product to switch images.
- Popularity is shown as a score out of 5.
- Use the **filters** at the top:
  - Select a **price range**.
  - Select a **popularity level** (e.g., “Very Good ⭐ 5”).
- The product list updates dynamically based on your selection.

---

## 🚀 Future Improvements

- Sorting by price / popularity
- Search functionality
- User authentication
- Favorites / Wishlist feature
- Better styled dropdowns for filters
