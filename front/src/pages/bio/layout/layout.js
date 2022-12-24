import '../../../styles/bio/components/layout/layout.scss';
import MainContent from "../components/main-content/bio";
import Navigation from "../components/navigation/navigation";
import Footer from "../../../components/footer/footer";
import BioHeader from "../../../pages/bio/components/header/bioHeader";

const Bio = () => {
    return <><div className="bio-page-container"><BioHeader /><section className="bio-container"><MainContent /><Navigation /></section><Footer /></div></>;
}
export default Bio;