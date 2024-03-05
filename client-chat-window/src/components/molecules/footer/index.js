import React, { useState } from "react";
import { useIntl } from "react-intl";

const Footer = ({ socket }) => {
  const intl = useIntl();
  const [message, setMessage] = useState("");
  const handleTyping = () =>
    socket.emit(
      "typing",
      `${localStorage.getItem("userName")} ${intl.formatMessage({
        id: "is_typing",
      })}`
    );

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() && localStorage.getItem("userName")) {
      socket.emit("message", {
        text: message,
        name: localStorage.getItem("userName"),
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
      });
    }
    setMessage("");
  };
  return (
    <div className="chat__footer">
      <form className="form" onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder={intl.formatMessage({ id: "write_message" })}
          className="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleTyping}
          data-testid="send_msg_textbox"
        />
      </form>
    </div>
  );
};

export default Footer;
