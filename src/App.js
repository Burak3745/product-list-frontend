import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import ProductsPage from "./pages/ProductsPage";

const App = () => {
  return (
    <div>
      <Router>
        <main>
          <Routes>
            <Route path="/" element={<ProductsPage />}></Route>
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
