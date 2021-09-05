import { useEffect } from 'react';
import './Carousel.sass';

export default function Carousel() {

    const preload = image => {
        const img = document.createElement('img');
        img.style.display = 'none';
        img.src = image;
        document.body.appendChild(img);
    };

    const images = Array.from(Array(10).keys())
        .map(index => `../images/image${index + 1}.jpg`);

    useEffect(() => {
        images.forEach(preload);
    });

    let currentImage = 0;

    setInterval(() => {
        if (currentImage === images.length) {
            currentImage = 0;
        }
        document.getElementById("carousel").style.backgroundImage = `url(${images[currentImage++]})`;
    }
    , 7000);

    return (
        <div id="carousel">
            <h2>Tu paquete, nuestra misión</h2>
        </div>
    )
}