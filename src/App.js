import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import NavbarLayout from "./components/layouts/NavbarLayout";
import Homepage from "./pages/homepage/Homepage";
import SearchPage from "./pages/search/SearchPage";
import MostViewed from "./pages/mostviewed/MostViewed";
import NotFoundPage from "./pages/notfound";
import ErrorSearch from "./pages/errorsearch";
import DetailPost from "./pages/detailpost";

const App = () => {
  return (
    <BrowserRouter>
      <NavbarLayout>
        <Routes>
          {/* Accessible */}
          <Route path="/" element={<Homepage />} />
          <Route path="/search/:searchInputValue" element={<SearchPage />} />
          <Route path="/category/most-viewed" element={<MostViewed />} />
          <Route path="/detailpost/:detailPost/:detailPost/:detailPost/:detailPost/:detailPost" element={<DetailPost />} />

          {/* Not Found */}
          <Route path="*" element={<NotFoundPage />} />
          <Route
            path="/search-error/:searchInputValue"
            element={<ErrorSearch />}
          />
        </Routes>
      </NavbarLayout>
    </BrowserRouter>
  );
};

export default App;
