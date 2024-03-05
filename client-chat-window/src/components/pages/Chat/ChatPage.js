import React, { useEffect, useState, useRef } from "react";
import "./chat.scss";
import Sidebar from "../../molecules/sidebar";
import Footer from "../../molecules/footer";
import ChatBody from "../../molecules/ChatBody";

const ChatPage = ({ socket }) => {
  const [messages, setMessages] = useState([]);
  const [typingStatus, setTypingStatus] = useState("");
  const lastMessageRef = useRef(null);

  useEffect(() => {
    socket.on("messageResponse", (data) => setMessages([...messages, data]));
  }, [socket, messages]);

  useEffect(() => {
    socket.on("typingResponse", (data) => setTypingStatus(data));
  }, [socket]);

  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    lastMessageRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chat" data-testid="chat-page">
      <Sidebar socket={socket} />
      <div className="chat__main">
        <ChatBody
          messages={messages}
          typingStatus={typingStatus}
          lastMessageRef={lastMessageRef}
        />
        <Footer socket={socket} />
      </div>
    </div>
  );
};

export default ChatPage;
