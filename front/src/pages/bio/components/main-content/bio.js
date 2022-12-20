import bioImage from '../../../../images/20221108_150148.jpg';
import '../../../../styles/bio/components/main-content/bio.scss';
const MainContent = () => {
    return <><main><div className="image-container"><img src={bioImage} alt="Il s'agit de Adrien Rival." /></div>
        <p>Bonjour à toutes et à tous !
            <br />
            <br />
            Je me présente : Adrien Rival, 30 ans.
            <br />
            <br />
            Je voudrais vous présenter mon parcours et quelques projets. Rassurez-vous : je serais très bref.
            <br />
            <br />
            Soyez les bienvenus !
        </p>

    </main>
        <p className="mobile-device-paragraph">Bonjour à toutes et à tous !
            <br />
            Je me présente : Adrien Rival, 30 ans.
            <br />
            Je voudrais vous présenter mon parcours et quelques projets. Rassurez-vous : je serais très bref.
            <br />
            Soyez les bienvenus !
        </p></>
};
export default MainContent