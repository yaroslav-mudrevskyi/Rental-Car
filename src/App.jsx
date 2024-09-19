import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Loader from "./components/Loader/Loader";

const Layout = lazy(() => import("./components/Layout/Layout"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const CarCatalogPage = lazy(() =>
  import("./pages/CarCatalogPage/CarCatalogPage")
);
const FavoriteCarsPage = lazy(() =>
  import("./pages/FavoriteCarsPage/FavoriteCarsPage")
);

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="catalog" element={<CarCatalogPage />} />
            <Route path="favorites" element={<FavoriteCarsPage />} />
          </Route>
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
