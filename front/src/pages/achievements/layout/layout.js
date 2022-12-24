import AchievementsHeader from "../components/header/achievementsHeader";
import Details from "../components/details/details";
import Message from "../components/error-message/message"
import Timeline from "../components/timeline/timeline";
import '../../../styles/achievements/layout/layout.scss';
import Footer from "../../../components/footer/footer";

const Achievements = () => {

    return <div className="achievements-page-container"><AchievementsHeader /><p className='timeline-title'><strong>Chronologie</strong><br />Et si vous découvriez un peu mon parcours avant d'aller plus loin ?
        <br /> Pour cela il est possible de cliquer sur les cases suivantes !</p>
        <main className="timeline-container"><Timeline /></main>
        <Message /><section className="details"><Details /></section>
        <Footer />
    </div>
}
export default Achievements;