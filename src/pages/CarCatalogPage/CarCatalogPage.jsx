import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadMoreCars } from "../../redux/cars/operations";
import { selectIsLastPage, selectIsLoading } from "../../redux/cars/selectors";
import CarsCatalogList from "../../components/CarsCatalogList/CarsCatalogList";
import Loader from "../../components/Loader/Loader";
import ModalForDetails from "../../components/ModalForDetails/ModalForDetails";
import s from "./CarCatalogPage.module.css";

const CarCatalogPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isLastPage = useSelector(selectIsLastPage);
  const [page, setPage] = useState(2);

  const handleLoadNextPage = () => {
    setPage((prev) => prev + 1);
    dispatch(loadMoreCars(page));
  };

  return (
    <div className={s.wrapper}>
      {isLoading && <Loader />}
      <CarsCatalogList />
      {!isLastPage && (
        <button
          className={s.btnLoadMore}
          type="button"
          onClick={handleLoadNextPage}
        >
          Load More
        </button>
      )}
      {isLoading && <Loader />}
      <ModalForDetails />
    </div>
  );
};

export default CarCatalogPage;
