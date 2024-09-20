import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { selectIsOpenModal } from "../../redux/modal/selectors";
import { closeModal } from "../../redux/modal/slice";
import s from "./ModalForDetails.module.css";

Modal.setAppElement("#root");

const ModalForDetails = () => {
  const dispatch = useDispatch();
  const isOpenModal = useSelector(selectIsOpenModal);

  return (
    <Modal
      isOpen={isOpenModal}
      onRequestClose={() => dispatch(closeModal())}
      className={s.modalWindow}
      overlayClassName={s.overlay}
    >
      <p>I`m a modal window</p>
    </Modal>
  );
};

export default ModalForDetails;
