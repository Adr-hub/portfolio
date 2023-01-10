import '../../../../styles/achievements/header/achievementsHeader.scss';
const AchievementsHeader = () => {
    return <><header>

        <div className='achievements-header-container'>
            <h1>Adrien Rival</h1>

            <div className='achievements-paragraph-container'><p className="achievements-header-paragraph">Profession : développeur web !</p></div></div>
        <div className='achievements-header-buttons'><button className="homepage-button"><i className="fas fa-caret-left"></i>Page d'accueil</button><button className='projects-button'>Mes Projets<i className="fas fa-caret-right"></i></button></div>
    </header></>
};

export default AchievementsHeader;