import { BrowserRouter, Routes, Route } from "react-router-dom";
import "antd/dist/reset.css";
import "./App.css";
import "./CSS/Theme.css";
import "./bootstrap-5.3.0-dist/css/bootstrap.css";
import Pages_Index from "./Pages/Pages_Index";
import CreatInfluencerProfilePage from "./Pages/CreateInfluencer/CreatInfluencerProfilePage";
import VerifyInfluencerRegister from "./Pages/SignUpInfluencer/VerifyInfluencerRegister";
function App() {
	return (
		<>
			<BrowserRouter>
				<Pages_Index />
			</BrowserRouter>
			{/* <CreatInfluencerProfilePage/> */}
			{/* <VerifyInfluencerRegister/> */}
		</>
	);
}

export default App;
