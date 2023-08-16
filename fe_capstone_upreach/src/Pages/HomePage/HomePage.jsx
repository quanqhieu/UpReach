import React from "react";
import FooterHome from "../../Components/Layouts/Footer/FooterHome";
import HeaderHomepage from "../../Components/Layouts/Header/HeaderHomepage";
import Index_HomePage from "./Index_HomePage";
import { useUserStore } from "../../Stores/user";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [user] = useUserStore((state) => [state.user]);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (user.roleId == 1) {
      navigate("/admin/dashboard");
    } else if (user.roleId == 2) {
      navigate("/homepage");
    } else if (user.roleId == 3) {
      navigate("/influencer/my-report");
    } else {
      navigate("/");
    }
  }, []);

  return (
    <>
      {user?.roleId == 2 ? (
        <div className="coverMain">
          <HeaderHomepage />
          <Index_HomePage />
          <FooterHome />
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export default HomePage;
