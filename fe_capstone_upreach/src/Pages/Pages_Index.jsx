import React from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Login from "./LoginPage/Login";
import JoinAsBrand from "./JoinAsBrandPage/JoinAsBrand";
import SignUp from "./SignUpPage/SignUp";
import Introduce from "./IntroducePage/Introduce";
import HomePage from "./Homepage/HomePage.jsx";

function Pages_Index() {
  const navigate = useNavigate();

  //click button will go to login
  const navigateLogin = () => {
    navigate("/login");
  };
  //click button will go to home page not logged in yet
  const navigateIntroduce = () => {
    navigate("/");
  };

  //click button will go to home page have token
  const navigateHomeMain = () => {
    navigate("/homepage");
  };
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Introduce
              navigateHome={navigateHomeMain}
              navigateLogin={navigateLogin}
            />
          </>
        }
      />
      <Route
        path="/login"
        element={
          <>
            <Login navigateHome={navigateIntroduce} />
          </>
        }
      />
      <Route
        path="/join-as-brand"
        element={
          <>
            <JoinAsBrand navigateHome={navigateIntroduce} />
          </>
        }
      />
      <Route
        path="/sign-up"
        element={
          <>
            <SignUp navigateHome={navigateIntroduce} />
          </>
        }
      />
      <Route
        path="/homepage"
        element={
          <>
            <HomePage />
          </>
        }
      />
    </Routes>
  );
}

export default Pages_Index;
