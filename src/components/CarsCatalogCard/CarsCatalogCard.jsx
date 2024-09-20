import { useDispatch } from "react-redux";
import s from "./CarsCatalogCard.module.css";
import { openModal } from "../../redux/modal/slice";

const CarsCatalogCard = ({ car }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(openModal(car));
  };

  return (
    <div className={s.cardWrapper}>
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
