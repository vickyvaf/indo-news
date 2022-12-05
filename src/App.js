import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import NavbarLayout from "./components/layouts/NavbarLayout";
import Homepage from "./pages/homepage/Homepage";
import SearchPage from "./pages/search/SearchPage";
import MostViewed from "./pages/mostviewed/MostViewed";
import NotFoundPage from "./pages/notfound";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH" });
  }, []);

  return (
    <BrowserRouter>
      <NavbarLayout>
        <Routes>
          {/* Accessible */}
          <Route path="/" element={<Homepage />} />
          <Route path="/search/:searchInputValue" element={<SearchPage />} />
          <Route path="/category/most-viewed" element={<MostViewed />} />

          {/* Not Found */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </NavbarLayout>
    </BrowserRouter>
  );
};

export default App;
