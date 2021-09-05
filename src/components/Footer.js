import { faFacebook, faTwitter, faPaypal, faCcVisa, faCcMastercard, faCcAmex} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.sass';

export default function Footer() {
    return (
        <>
            <footer>
                <nav className="navbar">
                    <ul>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">ACERCA&nbsp;DE</a>
                        </li>&nbsp;|&nbsp;
                        <li className="nav-item">
                            <a className="nav-link" href="/jobs">EMPLEO</a>
                        </li>&nbsp;|&nbsp;
                        <li className="nav-item">
                            <a className="nav-link" href="/term-and-conditions">CONDICIONES&nbsp;DE&nbsp;USO</a>
                        </li>&nbsp;|&nbsp;
                        <li className="nav-item">
                            <a className="nav-link" href="/privacy">DECLARACIÓN&nbsp;DE&nbsp;PRIVACIDAD</a>
                        </li>&nbsp;|&nbsp;
                        <li className="nav-item">
                            <a className="nav-link" href="/cookies">ACEPTACIÓN&nbsp;COOKIES</a>
                        </li>
                    </ul>
                    <p id="copyright" className="copyright">Copyright&nbsp;{new Date().getFullYear()}&nbsp;&copy;&nbsp;Planet&nbsp;Express</p>
                    <div id="socialNetworks">
                        <p>Síguenos en:&nbsp;
                            <FontAwesomeIcon icon={faFacebook} />&nbsp;
                            <FontAwesomeIcon icon={faTwitter} /> 
                        </p>
                    </div>
                    <div id="payments">
                        <p>Pagos admitidos:&nbsp;
                            <FontAwesomeIcon icon={faPaypal} />&nbsp;
                            <FontAwesomeIcon icon={faCcVisa} />&nbsp;
                            <FontAwesomeIcon icon={faCcMastercard} />&nbsp;
                            <FontAwesomeIcon icon={faCcAmex} />
                        </p>
                    </div>
                </nav>
            </footer>
        </>
    )
}