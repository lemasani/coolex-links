import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ProductCategoryPage from "@/pages/ProductCategoryPage";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Index from "./pages/Index";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route
              path="/products/:categoryId"
              element={<ProductCategoryPage />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
