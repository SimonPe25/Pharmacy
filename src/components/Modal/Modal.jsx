import React from 'react';
import Button from "../Button/Index";
import "./modalStyle.scss";


const Modal = (props) => {

  const { name, text, toggleAdded, onClick, vendorcode } = props
  return (
    <div className="modalOverlay" onClick={onClick}>
      <div className="modalwindow">
        <div className="modalwindow__header">
          <div id="name" className="modalwindow__title modal-close">{name}</div>
          <span className="modal-close__cross">&#xD7;</span>
        </div>
        <div id="text" className="modalwindow__body">
          {text}
        </div>
        <div className="modalwindow__footer">
          <Button  id="vendorcode" onClick={() => toggleAdded(vendorcode)} text="Accept" className="btn btn-success" />
          <Button text="Cancel" className="btn btn-danger" />
        </div>
      </div>
    </div>
  )
}

export default Modal

