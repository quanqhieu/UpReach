import 'antd/dist/reset.css';
import './App.css';
import Layout, { Content, Footer, Header } from 'antd/es/layout/layout';
import Buttons from './Components/UI/Buttons';
import HeaderHomepage from './Components/Layouts/Header/HeaderHomepage';
import FooterHome from './Components/Layouts/Footer/FooterHome';
import { Slider } from 'antd';
import './CSS/Theme.css'
import './bootstrap/css/bootstrap.css'
import Card_hot_list from './Pages/Homepage/Card_hot_list';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div>
      {/* <HeaderHomepage />
      <div className='Content'>
        <Card_hot_list/>
      </div>
      <FooterHome/> */}
      <Login/>
    </div>
  );
}

export default App;
