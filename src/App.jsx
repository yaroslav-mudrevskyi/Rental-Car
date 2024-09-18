import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Loader from "./components/Loader/Loader";

const Layout = lazy(() => import("./components/Layout/Layout"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const CarCatalog = lazy(() => import("./pages/CarCatalog/CarCatalog"));
const FavoriteCars = lazy(() => import("./pages/FavoriteCars/FavoriteCars"));
const Navigation = lazy(() => import("./components/Navigation/Navigation"));

function App() {
  return (
    <>
      {/* <Navigation /> */}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="catalog" element={<CarCatalog />} />
            <Route path="favorites" element={<FavoriteCars />} />
          </Route>
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
