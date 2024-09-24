import { useDispatch, useSelector } from "react-redux";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { openModal } from "../../redux/modal/slice";
import { selectFavoriteCars } from "../../redux/favorite/selectors";
import { addToFavorite, deleteFavorite } from "../../redux/favorite/slice";

import s from "./CarsCatalogCard.module.css";

const CarsCatalogCard = ({ car }) => {
  const dispatch = useDispatch();

  const isFavorite = useSelector(selectFavoriteCars).find(
    (item) => item.id === car.id
  );

  const handleChooseFavorite = () => {
    if (isFavorite) {
      dispatch(deleteFavorite(car));
    } else {
      dispatch(addToFavorite(car));
    }
  };

  const handleClick = () => {
    dispatch(openModal(car));
  };

  return (
    <div className={s.cardWrapper}>
      <div className={s.heartColor}>
        {isFavorite ? (
          <button className={s.btnHeart}>
            <FaHeart color="#3470FF" onClick={handleChooseFavorite} />
          </button>
        ) : (
          <button className={s.btnHeart}>
            <FaRegHeart
              className={s.whiteHeart}
              onClick={handleChooseFavorite}
            />
          </button>
        )}
      </div>
      <img className={s.img} src={car.img} alt={car.make} />
      <div className={s.mainDesc}>
        <div className={s.model}>
          <p className={s.carName}>{car.make}</p>
          <p className={s.carModel}>
            {car.model}
            {", "}
          </p>
          <p className={s.carYear}>{car.year}</p>
        </div>
        <p className={s.carPrice}>{car.rentalPrice}</p>
      </div>
      <p className={s.params}>
        {car.address.split(", ")[1]} | {car.address.split(", ")[2]} |{" "}
        {car.rentalCompany} | {car.type} | {car.model} | {car.id} |{" "}
        {car.functionalities[0]}
      </p>
      <button className={s.btnLearnMore} type="button" onClick={handleClick}>
        Learn more
      </button>
    </div>
  );
};

export default CarsCatalogCard;
