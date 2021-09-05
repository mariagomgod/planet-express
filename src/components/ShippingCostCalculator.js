import React, { useState } from 'react';
import { Modal } from 'react-modal-overlay';

export default function ShippingCostCalculator() {

  const [isOpen, setIsOpen] = useState(false);

  const [numberOfPackages, setNumberOfPackages] = useState(0);
  const [packageWeight, setPackageWeight] = useState(0);

  const showComputationResult = () =>  document.getElementById("computation-result").classList.remove("invisible");
 
  const hideComputationResult = () =>  document.getElementById("computation-result").classList.add("invisible");

  const handleSubmit = e => {
      e.preventDefault();
      showComputationResult();
  }

  return (
    <>
      <button className="overlay-button" onClick={() => setIsOpen(true)}>Calcula el importe de tu envío</button>
      <Modal className="overlay" show={isOpen} closeModal={() => {
          setIsOpen(false);
          hideComputationResult(); // ocultamos el mensaje de éxito
          setPackageWeight(0); // vaciamos el peso de los paquetes
          setNumberOfPackages(0); // vaciamos el número de paquetes
    }}>
        <form onSubmit={handleSubmit}>
            <h3>Calcula el importe de tu envío</h3>
            <div className="control-group">
                <input type="number" className="form-control" id="numberOfPackages" placeholder="Introduce el número de paquetes" min="1" required
                onInput={e => {
                  setNumberOfPackages(e.target.value);
                  hideComputationResult();
                }}></input>
            </div>
            <div className="control-group">
                <input type="number" className="form-control" id="packageWeight" placeholder="Introduce el peso máximo" min="0.5" step="0.05" required
                onInput={e => {
                  setPackageWeight(e.target.value);
                  hideComputationResult();
                }}></input>
            </div>
            <div className="control-group">
                <button type="submit" className="button">Calcula tu importe</button>
            </div>
        </form>
        <div id="computation-result" className="invisible">
            <p className="modal-message">El coste de su envío asciende a {(numberOfPackages * packageWeight * (packageWeight < 2 ? 3 : 6)).toFixed(2)}€</p>
            <p className="modal-message" style={{marginTop: 0}}>{packageWeight > 0 && packageWeight < 2 ? "Oferta flash aplicada automáticamente" : "Descuentos no aplicables"}</p>
        </div>
      </Modal>
    </>
  )
}