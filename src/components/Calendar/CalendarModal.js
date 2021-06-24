import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import DateTimePicker from "react-datetime-picker";
import moment from "moment";
import Swal from "sweetalert2";

import "./CalendarStyle.css";
import { uiCloseModal } from "../actions/ui";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

const now = moment().minutes(0).seconds(0);
const finish = moment().minutes(0).seconds(0).add(1, "hours");

const CalendarModal = () => {
  const [dateStart, setDateStart] = useState(now.toDate());
  const [dateFinish, setDateFinish] = useState(finish.toDate());
  const [isValid, setisValid] = useState(true);
  const [formValues, setFormValues] = useState({
    title: "here litle bitch",
    notes: " ",
    start: now.toDate(),
    end: finish.toDate(),
  });

  const { title, notes, start, end } = formValues;
  const { modalOpen } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const closeModal = () => {
    console.log("ac");
    dispatch(uiCloseModal());
  };

  const handleStartDate = (e) => {
    setDateStart(e);
    setFormValues({
      ...formValues,

      start: e,
    });
  };

  const handleFinishDate = (e) => {
    setDateFinish(e);
    setFormValues({
      ...formValues,
      end: e,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const momentStart = moment(start);
    const momentEnd = moment(end);

    if (momentStart.isSameOrAfter(momentEnd)) {
      Swal.fire("Error", "la fecha fin debe ser menor a la de inicio", "error");
      return;
    }
    if (end === null || start === null) {
      Swal.fire("Error", "Debes elegir una fecha", "error");
      return;
    }
    if (title.trim().length < 2) {
      setisValid(false);
      return;
    }
    console.log(end);
    //TODO: GRABAR EN BASE DE DATOS Y CERRAR MODAL
    setisValid(true);
  };
  return (
    <Modal
      isOpen={modalOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      className="modal"
      overlayClassName="modal-fondo"
      closeTimeoutMS={200}
    >
      This a modal Little bitch
      <form className="container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Fecha y hora inicio</label>
          <DateTimePicker
            onChange={handleStartDate}
            value={dateStart}
            className="form-control "
          />
        </div>

        <div className="form-group">
          <label>Fecha y hora fin</label>
          <DateTimePicker
            onChange={handleFinishDate}
            value={dateFinish}
            className="form-control"
            minDate={dateStart}
          />
        </div>

        <hr />
        <div className="form-group">
          <label>Titulo y notas</label>
          <input
            type="text"
            className={`form-control ${!isValid && "is-invalid"}`}
            placeholder="Título del evento"
            name="title"
            value={title}
            onChange={handleInputChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            Una descripción corta
          </small>
        </div>

        <div className="form-group">
          <textarea
            type="text"
            className="form-control"
            placeholder="Notas"
            name="notes"
            value={notes}
            onChange={handleInputChange}
          ></textarea>
          <small id="emailHelp" className="form-text text-muted">
            Información adicional
          </small>
        </div>

        <button type="submit" className="btn btn-outline-primary btn-block">
          <i className="far fa-save"></i>
          <span> Guardar</span>
        </button>
      </form>
    </Modal>
  );
};

export default CalendarModal;
