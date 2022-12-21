import { Link } from 'react-router-dom';
import '../../styles/components/footer/footer.scss';
const Footer = () => {
    return <footer><p>Année de production : 2022</p>
        <div className="external-links"><div className="first-external-link"><a href="https://www.linkedin.com/in/adrien-rival-1b6a74256/" rel="noreferrer" target="_blank"><i className="fab fa-linkedin"></i></a></div>
            <div className="second-external-link"><a href="https://github.com/Adr-hub" rel="noreferrer" target="_blank"><i className="fab fa-github"></i></a></div>
        </div><div className='languages'><Link className='fr'>Français /</Link><Link className='en'>English</Link></div></footer>
};
export default Footer;