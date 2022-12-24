import '../../../../styles/achievements/timeline/timeline.scss';
import diagonal from '../../../../images/diagonal.png';
import { Link } from 'react-router-dom';
const Timeline = () => {
    return <><div className='first-section'>
        <img className='diagonals' src={diagonal} alt='Une ligne diagonale.' /><div className='youth'><span className='year'>1992-2010</span><div className='description'><span>Jeunesse</span></div></div><img className='diagonals' src={diagonal} alt='Une ligne diagonale.' />
    </div>

        <Link className='third-section-link' ><div className='third-section-container'><div className='content'><span className='year'>2011-2014</span><div className='description'><span>Université</span></div><div className='degree'><span>1<sup>er</sup> diplôme</span></div></div></div>
        </Link>

        <Link className='fourth-section-link' ><div className='fourth-section-container'><div className='content'><span className='year'>2014-2016</span><div className='description'><span>Université</span></div><div className='degree'><span>2<sup>ème</sup> diplôme</span></div></div></div>
        </Link>

        <div className='fifth-section'><img className='diagonals' src={diagonal} alt='Une ligne diagonale.' /></div>

        <Link className='sixth-section-link' ><div className='sixth-section-container'><div className='content'><span className='year'>vers 2022</span><div className='description'><span>OpenClassrooms</span></div><div className='degree'><span>Devenir développeur web !</span></div></div></div>
        </Link>
    </>
};
export default Timeline;