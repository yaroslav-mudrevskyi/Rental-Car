import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCars } from "../../redux/cars/selectors";
import { fetchCars } from "../../redux/cars/operations";

import CarsCatalogCard from "../CarsCatalogCard/CarsCatalogCard";

import s from "./CarsCatalogList.module.css";

const CarsCatalogList = () => {
  const cars = useSelector(selectCars);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <ul className={s.cardWrapper}>
      {cars.map((car) => {
        return (
          <li key={car.id}>
            <CarsCatalogCard car={car} />
          </li>
        );
      })}
    </ul>
  );
};

export default CarsCatalogList;
