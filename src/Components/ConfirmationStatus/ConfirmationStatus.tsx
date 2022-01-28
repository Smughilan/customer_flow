import React, { useState } from "react";
import success from "../../Assets/Images/success.svg";
import details from "../../Assets/Images/details.svg";
import instruction from "../../Assets/Images/instruction.svg";
import mark from "../../Assets/Images/mark.svg";
import calendar from "../../Assets/Images/calendar.svg";
import cancel from "../../Assets/Images/cancel.svg";
import Modal from "react-modal";
import "./ConfirmationStatus.scss";

interface confirmprops {}

const ConfirmationStatus: React.FC<confirmprops> = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [cancelModal, setCancelModal] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const closeModalCancel = () => {
    setCancelModal(false);
  };
  const openModalcancel = () => {
    setCancelModal(true);
  };

  return (
    <div className="body-container-status">
      <div className="appoinment-wrapper">
        <div className="confirm-container">
          <div className="success-wrapper">
            <img src={success} alt="success" />
          </div>
          <h4>Appointment Successfully Booked!</h4>
          <p>
            We have successfully scheduled your appointment. Below are the
            appointment details
          </p>
        </div>
        <div className="appoinment-container">
          <div className="details-container">
            <div className="heading-container">
              <div className="img-details">
                <img src={details} alt="details" />
              </div>
              <h3>Appointment Details</h3>
            </div>
            <div className="details-wrapper">
              <div className="content-details">
                <p>Full Name</p>
                <span>James Taylor</span>
              </div>
              <div className="content-details">
                <p>Email</p>
                <span>James.adams18@gmail.com</span>
              </div>
              <div className="content-details">
                <p>Mobile Number</p>
                <span>+1 123-456-7890</span>
              </div>
            </div>
            <div className="details-wrapper">
              <div className="content-details">
                <p>Staff Name</p>
                <span>Dennis Rodhman</span>
              </div>
              <div className="content-details">
                <p>Date-Time</p>
                <span>Nov 7th, 2021 at 10:45 AM</span>
              </div>
              <div className="content-details">
                <p>Confirmation Code</p>
                <span>ABF1421</span>
              </div>
            </div>
            <p className="direction">Walk-in Directions</p>
            <p className="link">
              https://www.google.com/maps/@13.0457115,80.1747937,13z
            </p>
          </div>
          <div className="instruction-container">
            <div className="heading-container">
              <div className="img">
                <img src={instruction} alt="instruction" />
              </div>
              <h3>Instructions</h3>
            </div>
            <div className="instructions">
              <img src={mark} alt="mark" />
              <p>
                We have successfully sent the details of your appointment to
                your registered mobile number and email Id. Live location of our
                office is also sent to your mobile number. Please collect 2
                copies of your verification proof at the time of our
                appointment.
              </p>
            </div>
            <div className="instructions">
              <img src={mark} alt="mark" />
              <p>
                Please bring 2 copies of your PAN Card without fail while
                attending our appointment.
              </p>
            </div>
            <div className="instructions">
              <img src={mark} alt="mark" />
              <p>
                Please bring 2 copies of your PAN Card without fail while
                attending our appointment.
              </p>
            </div>
          </div>
          <div className="calendar-container">
            <div className="heading-container">
              <div className="img">
                <img src={calendar} alt="calendar" />
              </div>
              <h3>Sync Your Calendar</h3>
            </div>
            <p>Sync your appointment with your google calendar.</p>
            <div className="button-container">
              <button className="blue-button">
                <span>Sync Calendar</span>
              </button>
            </div>
          </div>
          <div className="change-container">
            <div className="heading-container">
              <div className="img">
                <img src={cancel} alt="cancel" />
              </div>
              <h3>Changes to your Appointment</h3>
            </div>
            <div className="changes">
              <img src={mark} alt="mark" />
              <h4>Reschedule Appointment</h4>
            </div>
            <p>You can reschedule an appointment using the below CTA.</p>
            <div className="button-container">
              <button className="white-button">
                <span>Reschedule</span>
              </button>
            </div>
            <div className="changes">
              <img src={mark} alt="mark" />
              <h4>Cancel Appointment</h4>
            </div>
            <p>You can cancel an appointment using the below CTA.</p>
            <div className="button-container">
              <button className="white-button" onClick={openModal}>
                <span>Cancel</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal
        portalClassName="cancel-appoinment"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <div className="img" onClick={closeModal}>
          <img src={cancel} alt="cancel" />
        </div>
        <h5>Cancel Appointment</h5>
        <p>
          Cancelling your appointment that is scheduled on Thursday October 28,
          2021 at 10:15 AM cannot be undone.
        </p>
        <div className="button-container">
          <button className="white-button" onClick={openModalcancel}>
            <span>Cancel</span>
          </button>
        </div>
      </Modal>
      <Modal
        portalClassName="cancel-appoinment"
        isOpen={cancelModal}
        onRequestClose={closeModalCancel}
      >
        <div className="img" onClick={closeModalCancel}>
          <img src={cancel} alt="cancel" />
        </div>
        <h4>Appointment Cancelled Successfully</h4>
        <div className="buttons">
          <div className="button-container-cancel">
            <button className="white-button">
              <span>Cancel</span>
            </button>
          </div>
          <div className="button-container-book">
            <button className="blue-button">
              <span>Book Another Appointment</span>
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default ConfirmationStatus;
