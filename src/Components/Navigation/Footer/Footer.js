import './Footer.css';
import {Link,useLocation} from 'react-router-dom'

const Footer = () => {
  return (
    <div className="Footer">
        <p className='text'>©Copyright by <span className='bold'>DentaHealth</span> 2022</p>
        <nav>
            <ul className='nav-bar'>
                <div className='nav-link-container'><li className='nav-links'>
                  <Link to="/">Home</Link>
                  {/*location.pathname=="/"?<div className='nav-link-line'></div>:<></>*/}</li></div>
                <div className='nav-link-container'><li className='nav-links'>
                  <Link to="/Services">Services</Link>
                  {/*location.pathname=="/Services"?<div className='nav-link-line'></div>:<></>*/}</li></div>
                <div className='nav-link-container'><li className='nav-links'>
                  <Link to="/Team">Team</Link>
                  {/*location.pathname=="/Team"?<div className='nav-link-line'></div>:<></>*/}</li></div>
                <div className='nav-link-container'><li className='nav-links'>
                  <Link to="/Contact">Contact</Link>
                  {/*location.pathname=="/Contact"?<div className='nav-link-line'></div>:<></>*/}</li></div>
            </ul>
        </nav>
    </div>
  );
}

export default Footer;
