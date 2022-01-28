import React from "react";
import Modal from "react-modal";

const ModalComp = () => {
  return (
    <div>
      <Modal
        portalClassName="cancel-appoinment"
        isOpen={true}
        // onAfterOpen={afterOpenModal}
        // onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        {/* <button onClick={closeModal}>close</button> */}
        {/* <div>I am a modal</div> */}
      </Modal>
    </div>
  );
};
