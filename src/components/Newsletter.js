import React, { useState } from 'react'
import { Modal } from 'react-modal-overlay'
 
export default function Newsletter() {

  const [isOpen, setIsOpen] = useState(false);

  const [email, setEmail] = useState("");

  const showConfirmationMessage = () =>  document.getElementById("confirmation-message").classList.remove("invisible");
 
  const hideConfirmationMessage = () =>  document.getElementById("confirmation-message").classList.add("invisible");

  const handleSubmit = e => {
      e.preventDefault();
      e.target.reset();
      showConfirmationMessage();
  }

  return (
    <>
      <button className="overlay-button" onClick={() => setIsOpen(true)}>Suscríbete a nuestra Newsletter</button>
      <Modal className="overlay" show={isOpen} closeModal={() => {
          setIsOpen(false);
          hideConfirmationMessage(); // ocultamos el mensaje de confirmación
          setEmail(""); // vaciamos el email
    }}>
        <form onSubmit={handleSubmit}>
            <h3>Ponte al día de las últimas novedades</h3>
            <div className="control-group">
                <input type="text" className="form-control" id="email" placeholder="Introduce tu e-mail" maxlenght="200" required
                onInput={e => {
                  setEmail(e.target.value);
                  hideConfirmationMessage();
                }}></input>
            </div>
            <div className="control-group checkbox">
                <input type="checkbox" id="privacy-policy-checkbox" required></input>
                <label htmlFor="privacy-policy-checkbox">
                    He leído y entiendo la política de privacidad y cookies, y acepto 
                    recibir comunicaciones comerciales de Planet Express a través de e-mail
                </label>
            </div>
            <div className="control-group">
                <button type="submit" className="button">Suscribir</button>
            </div>
        </form>
        <p id="confirmation-message" className="modal-message invisible">¡Gracias por suscribirte, {email}!</p>
      </Modal>
    </>
  )
}