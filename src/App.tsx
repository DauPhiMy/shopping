import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import ProductSinglePage from "./pages/ProductSinglePage";
import CartPage from "./pages/CartPage";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />}  />
        <Route path="/product/:id" element={<ProductSinglePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/search/:query" element={<SearchPage />} />


      </Route>
      <Route path="*" element={<div> Error</div>} />
    </Routes>
  );
}

export default App;
