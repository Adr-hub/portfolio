import '../../../../styles/achievements/header/achievementsHeader.scss';
const AchievementsHeader = () => {
    return <><header>
        <div className='achievements-header-container'>
            <h1>Adrien Rival</h1>

            <div className='achievements-paragraph-container'><p>Profession : développeur web !</p></div></div>
        <div className='achievements-header-buttons'><button><i className="fas fa-caret-left"></i>Page d'accueil</button><button>Mes Projets<i className="fas fa-caret-right"></i></button></div>
    </header></>
};

export default AchievementsHeader;