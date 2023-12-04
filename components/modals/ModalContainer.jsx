import Backdrop from "./Backdrop";

const ModalContainer = ({ content }) => {
  return (
    <Backdrop>{content}</Backdrop>
  );
}

export default ModalContainer;
