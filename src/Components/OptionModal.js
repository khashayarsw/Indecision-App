import React from 'react';
import Modal from 'react-modal';


const OptionModal=(props)=>(
     <Modal
       ariaHideApp={false}
       isOpen={props.show}
       onRequestClose={props.handleClose}
       contentLabel='Selected Option'
       closeTimeoutMS={200}
       className="modal"
     >
       <h3 className="modal__title">Selected Option</h3>  
       <p className="modal__body">{props.value()}</p>
       <button className="button" onClick={props.handleClose}>Okay</button>
     </Modal>
    );

export default OptionModal;