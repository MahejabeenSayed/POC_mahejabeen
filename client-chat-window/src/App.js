import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import ChatPage from "./components/pages/Chat/ChatPage";
import socketIO from "socket.io-client";

const socket = socketIO.connect("http://localhost:4000");
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home socket={socket} />}></Route>
        <Route path="/chat" element={<ChatPage socket={socket} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
