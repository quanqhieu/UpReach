import 'antd/dist/reset.css';
import './App.css';
import Layout, { Content, Footer, Header } from 'antd/es/layout/layout';
import Buttons from './Components/UI/Buttons';
import HeaderHomepage from './Components/Layouts/Header/HeaderHomepage';
import FooterHome from './Components/Layouts/Footer/FooterHome';
import { Slider } from 'antd';


function App() {
  return (
    <div>
      <HeaderHomepage />
      <div className='Content'>

      </div>
      <FooterHome/>
    </div>
  );
}

export default App;
