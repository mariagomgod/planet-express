import './OfferBanner.sass';
import ShippingCostCalculator from './ShippingCostCalculator';

export default function OfferBanner() {

    let countDown = 7200; // cuenta atrás en segundos (2 horas).
   
    setInterval(() => {
        countDown--;
        document.getElementById("countdown").innerText = formatDate(countDown);
    }, 1000);

    const formatDate = timeInSeconds => {
        const hours = Math.floor(timeInSeconds / 3600);
        const minutes = Math.floor((timeInSeconds % 3600) / 60);
        const seconds = timeInSeconds % 60;
        return `${padWithZeros(hours)}:${padWithZeros(minutes)}:${padWithZeros(seconds)}`;
    };

    // padWithZeros para añadir un cero delante cuando las horas, minutos y segundos sean menor de 10.
    const padWithZeros = number => number < 10 ? "0" + number : number;

    return (
        <div id="offer" role="banner">
            <div id="offer-description">
                <p>¡Oferta flash! Tus envíos de menos de 2Kg al 50%</p>
                <p>Finaliza en: <span id="countdown"></span></p>
            </div>
            <div id="calculator-widget">
                <ShippingCostCalculator />
            </div>
        </div>
    )
}