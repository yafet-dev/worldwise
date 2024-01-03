import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Home from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<PageNotFound />}></Route>
          <Route path="product" element={<Product />}></Route>
          <Route path="pricing" element={<Pricing />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/app" element={<AppLayout />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
