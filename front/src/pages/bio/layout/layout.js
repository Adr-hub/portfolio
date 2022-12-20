import BioHeader from "../components/header/bioHeader"
import '../../../styles/bio/components/layout/layout.scss';
import MainContent from "../components/main-content/bio";
import Navigation from "../components/navigation/navigation";
import Footer from "../../../components/footer/footer";

const Bio = () => {
    return <><BioHeader /><section className="bio-container"><MainContent /><Navigation /></section><Footer /></>;
}
export default Bio;