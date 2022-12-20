import { Link } from 'react-router-dom';
import '../../../../styles/bio/components/navigation/navigation.scss';
const Navigation = () => {
    return <div className='navigation-container'><div className='first-link-container'><Link className='first-link'>Parcours</Link></div>
        <div className='second-link-container'><Link className='second-link'>Projets</Link></div>
        <div className='about-me-container'><span className='about-me'>Profil</span></div>
    </div>
};
export default Navigation;