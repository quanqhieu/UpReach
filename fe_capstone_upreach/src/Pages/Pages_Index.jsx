import React from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Login from "./LoginPage/Login";
import JoinAsBrand from "./JoinAsBrandPage/JoinAsBrand";
import SignUp from "./SignUpPage/SignUp";
import Introduce from "./IntroducePage/Introduce";
import HomePage from "./HomePage/HomePage";

function Pages_Index() {
  const navigate = useNavigate();

  //click button will go to login
  const navigateLogin = () => {
    navigate("/login");
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Introduce navigateLogin={navigateLogin} />
          </>
        }
      />
      <Route
        path="/login"
        element={
          <>
            <Login />
          </>
        }
      />
      <Route
        path="/join-as-brand"
        element={
          <>
            <JoinAsBrand />
          </>
        }
      />
      <Route
        path="/sign-up"
        element={
          <>
            <SignUp />
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
