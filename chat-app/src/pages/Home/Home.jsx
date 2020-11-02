import React from "react";

/* Styles */
import "./Home.scss";

/* Components */
import Sidebar from "components/Sidebar";
import MessagesPanel from "components/MessagesPanel/MessagesPanel";
import User from "components/User/User";

const Home = () => {
  return (
    <div className="Home" data-testid="home-page">
      <User />
      <Sidebar />
      <MessagesPanel />
    </div>
  );
};

export default Home;
