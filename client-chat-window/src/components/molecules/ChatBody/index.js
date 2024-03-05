import React, { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";
import Button from "../../atoms/Button/Button";

const ChatBody = ({ messages, typingStatus, lastMessageRef }) => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("-----", typingStatus);
  });

  const handleLeaveChat = () => {
    localStorage.removeItem("userName");
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <header className="chat__mainHeader body-large-600">
        <p>
          <FormattedMessage id="hangout" />
        </p>
        <Button variant="secondary" onClick={handleLeaveChat}>
          <FormattedMessage id="leave_chat" />
        </Button>
      </header>

      <div className="message__container">
        {messages.map((message) =>
          message.name === localStorage.getItem("userName") ? (
            <div className="message__chats" key={message.id}>
              <p className="sender__name">
                <FormattedMessage id="you" />
              </p>
              <div className="message__sender">
                <p>{message.text}</p>
              </div>
            </div>
          ) : (
            <div className="message__chats" key={message.id}>
              <p>{message.name}</p>
              <div className="message__recipient">
                <p>{message.text}</p>
              </div>
            </div>
          )
        )}

        <div className="message__status">
          <p>{typingStatus}</p>
        </div>
        <div ref={lastMessageRef} />
      </div>
    </>
  );
};

export default ChatBody;
