import 'antd/dist/reset.css';
import './App.css';
import Layout, { Content, Footer, Header } from 'antd/es/layout/layout';
import Buttons from './Components/UI/Buttons';
import HeaderHomepage from './Components/Layouts/Header/HeaderHomepage';
import Index_Homepage from './Pages/Homepage/Index_Homepage'
import FooterHome from './Components/Layouts/Footer/FooterHome';
import { Slider } from 'antd';
import './CSS/Theme.css'
import './bootstrap-5.3.0-dist/css/bootstrap.css'


function App() {
  return (
    <div>
      <HeaderHomepage />
      {/* <Index_Homepage /> */}
      Bỏ cái bạn viết vô đây
      VD: <abc />
      <FooterHome />
    </div>
  );
}

export default App;
