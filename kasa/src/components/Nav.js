import logo from '../assets/LOGO.png';
import '../styles/Nav.css';

function Nav() {
    return(
        <div className="kasa-nav">
            <img src={logo} alt="Kasa" className='kasa-logo' />
            <div className='kasa-nav-liens'>
                <a href="#">Accueil</a>
                <a href="#">A Propos</a>
            </div>
        </div>
    )
}
export default Nav;