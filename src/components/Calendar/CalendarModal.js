import React,{useState} from 'react'
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';


import './CalendarStyle.css'
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
Modal.setAppElement('#root');

const CalendarModal = () => {

    const [close, setClose] = useState(true)
    const closeModal = () =>{
        setClose(false)
    }
    return (
        
             <Modal
        isOpen={true}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        className="modal"
        overlayClassName="modal-fondo"
        closeTimeoutMS={200}
>

            This a modal Little bitch

    
            <form 
                className="container"
             
            >

                <div className="form-group">
                    <label>Fecha y hora inicio</label>
                    <input></input>
                </div>

                <div className="form-group">
                    <label>Fecha y hora fin</label>
               
                </div>

                <hr />
                <div className="form-group">
                    <label>Titulo y notas</label>
                    <input 
                        type="text" 
                        className={ `form-control'is-invalid' } `}
                        placeholder="Título del evento"
                        name="title"
                   
                    />
                    <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                </div>

                <div className="form-group">
                    <textarea 
                        type="text" 
                        className="form-control"
                        placeholder="Notas"
                     
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>

            </form>
        </Modal>
    )
}

export default CalendarModal
