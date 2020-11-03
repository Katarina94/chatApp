import React from "react";

/* Styles */
import "./Home.scss";

/* Components */
import Sidebar from "components/Sidebar";
import ChatWindow from "components/ChatWindow";
import User from "components/User";

const Home = () => {
  return (
    <div className="Home">
      <User />
      <Sidebar />
      <ChatWindow />
    </div>
  );
};

export default Home;
