import React, { useState } from "react";

/* Styles */
import "./SendBar.scss";

const SendBar = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");
  console.log("new message", message);
  const onInputChange = (e) => {
    setMessage(e.target.value);
  };
  const onSubmitMessage = (e) => {
    e.preventDefault();
    onSendMessage(message);
    setMessage("");
  };
  return (
    <div className="SendBar">
      <form onSubmit={onSubmitMessage}>
        <input
          className="SendBar__input"
          value={message}
          onChange={onInputChange}
          type="text"
          placeholder="Type a message"
        />
        <input
          className="SendBar__submit"
          type="submit"
          value="SEND"
          disabled={!message}
        />
      </form>
    </div>
  );
};

export default SendBar;
