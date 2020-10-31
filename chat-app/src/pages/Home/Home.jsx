import React from "react";

/* Styles */
import "./Home.scss";

/* Components */
import Sidebar from "components/Sidebar";
import MessagesPanel from "components/MessagesPanel/MessagesPanel";

const Home = () => {
  return (
    <div className="Home" data-testid="home-page">
      <Sidebar />
      <MessagesPanel />
    </div>
  );
};

export default Home;
