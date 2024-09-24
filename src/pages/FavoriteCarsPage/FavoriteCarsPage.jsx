import { useSelector } from "react-redux";
import { selectFavoriteCars } from "../../redux/favorite/selectors";
import { selectIsLoading } from "../../redux/cars/selectors";

import FavoriteCarsList from "../../components/FavoriteCarsList/FavoriteCarsList";
import ModalForDetails from "../../components/ModalForDetails/ModalForDetails";
import Loader from "../../components/Loader/Loader";

import s from "./FavoriteCarsPage.module.css";
import { Link } from "react-router-dom";

const FavoriteCarsPage = () => {
  const favoriteCars = useSelector(selectFavoriteCars);

  const isLoading = useSelector(selectIsLoading);

  return (
    <div className={s.wrapper}>
      {isLoading && <Loader />}
      {favoriteCars.length ? (
        <FavoriteCarsList />
      ) : (
        <div className={s.textWrapper}>
          <p className={s.visitText}>
            Please return to the catalog and add any car to your favorites! To
            do this, click on the heart.
          </p>
          <Link to="/catalog" className={s.backToCatalog}>
            Back to the catalog!
          </Link>
          <span className={s.backImage}></span>
        </div>
      )}
      {isLoading && <Loader />}
      <ModalForDetails />
    </div>
  );
};

export default FavoriteCarsPage;
