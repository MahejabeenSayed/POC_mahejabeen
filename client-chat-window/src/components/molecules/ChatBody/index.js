import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";
import Button from "../../atoms/Button/Button";
import Modal from "../../atoms/Modal/Modal";

const ChatBody = ({ messages, typingStatus, lastMessageRef }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log("-----", typingStatus);
  });

  const confirmLeave = () => {
    setIsOpen(true);
  };

  const handleLeaveChat = () => {
    localStorage.removeItem("userName");
    navigate("/");
    window.location.reload();
    setIsOpen(false);
  };

  return (
    <>
      <header className="chat__mainHeader body-large-600">
        <p>
          <FormattedMessage id="hangout" />
        </p>
        <Button
          label={<FormattedMessage id="leave_chat" />}
          variant="secondary"
          onClick={confirmLeave}
        />
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

        <Modal
          isOpen={isOpen}
          hasCloseBtn={true}
          onClose={() => setIsOpen(false)}
          onConfirm={() => handleLeaveChat()}
        >
          Are you sure you want to leave the chat ?
        </Modal>
      </div>
    </>
  );
};

export default ChatBody;
