import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../images/logo.png'
import './Header.sass';
import Newsletter from './Newsletter';

export default function Header () {
  return (
    <header>
      <div id='header'>
        <a href='/'>
          <img role='button' id='logo' src={logo} alt='' />
        </a>
      </div>
      <nav className='navbar'>
        <ul>
          <li className='nav-item'>
            <a className='nav-link' href='/shipments'>
              Envíos <FontAwesomeIcon icon={faChevronDown} />
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='/parcel-tracking'>
              Seguimiento <FontAwesomeIcon icon={faChevronDown} />
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='/lockers'>
              Consignas <FontAwesomeIcon icon={faChevronDown} />
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='/privacy'>
              Para&nbsp;empresas <FontAwesomeIcon icon={faChevronDown} />
            </a>
          </li>
        </ul>
      </nav>
      <Newsletter />
    </header>
  )
}
