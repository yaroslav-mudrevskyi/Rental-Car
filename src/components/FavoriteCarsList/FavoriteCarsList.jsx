import { useSelector } from "react-redux";
import { selectFavoriteCars } from "../../redux/favorite/selectors";

import CarsCatalogCard from "../CarsCatalogCard/CarsCatalogCard";

import s from "./FavoriteCarsList.module.css";

const FavoriteCarsList = () => {
  const favoriteCars = useSelector(selectFavoriteCars);

  return (
    <ul className={s.cardWrapper}>
      {favoriteCars.map((car) => {
        return (
          <li key={car.id}>
            <CarsCatalogCard car={car} />
          </li>
        );
      })}
    </ul>
  );
};

export default FavoriteCarsList;
