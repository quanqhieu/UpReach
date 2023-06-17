import FooterHome from "../../Components/Layouts/Footer/FooterHome";
import HeaderHomepage from "../../Components/Layouts/Header/HeaderHomepage";
import Index_Homepage from "./Index_Homepage";
const HomePage = () => {
  return (
    <div className="coverMain">
      <HeaderHomepage />
      <Index_Homepage />
      <FooterHome />
    </div>
  );
};
export default HomePage;
