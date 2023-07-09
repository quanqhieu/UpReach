import React from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Login from "./LoginPage/Login";
import JoinAsBrand from "./JoinAsBrandPage/JoinAsBrand";
import SignUp from "./SignUpPage/SignUp";
import Introduce from "./IntroducePage/Introduce";
import HomePage from "./HomePage/HomePage";
import Upgrade from "./UpgradePage/Upgrade";
import ForgotPasswordPage from "./ForgotPassword/ForgotPasswordPage";
import VerifyRegisterPage from "./VerifyRegister/VerifyRegisterPage";
import ClientProfilePage from "./ClientProfilePage/ClientProfilePage";

function Pages_Index() {
  const navigate = useNavigate();

  //click button will go to login
  const navigateLogin = () => {
    navigate("/login");
  };

  //click button will go to upgrade page
  const navigateUpgrade = () => {
    navigate("/upgrade");
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
      <Route
        path="/forgot-password"
        element={
          <>
            <ForgotPasswordPage />
          </>
        }
      />
      <Route
        path="/verify-register"
        element={
          <>
            <VerifyRegisterPage />
          </>
        }
      />
      <Route
        path="/client-profile"
        element={
          <>
            <ClientProfilePage />
          </>
        }
      />
      <Route
        path="/upgrade"
        element={
          <>
            <Upgrade />
          </>
        }
      />
    </Routes>
  );
}

export default Pages_Index;
