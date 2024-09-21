import Modal from "react-modal";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { selectedCar, selectIsOpenModal } from "../../redux/modal/selectors";
import { closeModal } from "../../redux/modal/slice";

import s from "./ModalForDetails.module.css";

Modal.setAppElement("#root");

const ModalForDetails = () => {
  const dispatch = useDispatch();
  const isOpenModal = useSelector(selectIsOpenModal);
  const openCar = useSelector(selectedCar);

  const rentalConditions = openCar.rentalConditions?.split("\n") || [];

  return (
    <Modal
      isOpen={isOpenModal}
      onRequestClose={() => dispatch(closeModal())}
      className={s.modalWindow}
      overlayClassName={s.overlay}
      bodyOpenClassName={s.blockScroll}
    >
      <div className={s.modalWrapper}>
        <IoClose
          className={s.closeBtn}
          onClick={() => dispatch(closeModal())}
        />
        <img className={s.img} src={openCar.img} alt={openCar.make} />
        <div className={s.wrapper}>
          <div>
            <div className={s.mainDesc}>
              <p className={s.carName}>{openCar.make}</p>
              <p className={s.carModel}>
                {openCar.model}
                {", "}
              </p>
              <p className={s.carYear}>{openCar.year}</p>
            </div>
            <p className={s.params}>
              {openCar.address?.split(", ")[1]} |{" "}
              {openCar.address?.split(", ")[2]} | Id: {openCar?.id} | Year:{" "}
              {openCar?.year} | Type: {openCar?.type} FuelConsumption:{" "}
              {openCar?.fuelConsumption} | EngineSize:
              {openCar?.engineSize}
            </p>
            <p className={s.description}>{openCar?.description}</p>
          </div>
          <div>
            <p className={s.subtitle}>Accessories and functionalities:</p>
            <p className={s.accessoriesAndFunc}>
              {Array.isArray(openCar.accessories)
                ? openCar.accessories.join(" | ")
                : "No accessories available"}
              {" | "}
              {Array.isArray(openCar.functionalities)
                ? openCar.functionalities.join(" | ")
                : "No functionalities available"}
            </p>
          </div>
          <div>
            <p className={s.rentalConditionTitle}>Rental Conditions:</p>
            <ul className={s.rentalConditionsList}>
              <li className={s.rentalConditionsItem}>
                Minimum age:{" "}
                <span className={s.blueColor}>
                  {rentalConditions[0]?.split(":")[1].trim()}
                </span>
              </li>
              <li className={s.rentalConditionsItem}>{rentalConditions[1]}</li>
              <li className={s.rentalConditionsItem}>{rentalConditions[2]}</li>
              <li className={s.rentalConditionsItem}>
                Mileage:{" "}
                <span className={s.blueColor}>
                  {openCar.mileage?.toLocaleString()}
                </span>
              </li>
              <li className={s.rentalConditionsItem}>
                Price:{" "}
                <span className={s.blueColor}>{openCar.rentalPrice}</span>
              </li>
            </ul>
          </div>
          <a className={s.btnRentalCar} href="tel:+380730000000">
            Rental Car
          </a>
        </div>
      </div>
    </Modal>
  );
};

export default ModalForDetails;
