import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { IntlProviderWrapper } from "../../../util/context/Internationalization";
import socketIO from "socket.io-client";
import Sidebar from ".";
import Footer from ".";

const socket = socketIO.connect("http://localhost:4000");
socket.emit("newUser", { userName: "Johndeo", socketID: socket.id });
socket.emit("newUser", { userName: "rosey", socketID: socket.id });

let scrollIntoViewMock = jest.fn();
window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;

describe("Footer", () => {
  it("Chat Footer rendering", () => {
    render(
      <BrowserRouter>
        <IntlProviderWrapper>
          <Footer socket={socket} />
        </IntlProviderWrapper>
      </BrowserRouter>
    );

    expect(screen.getByTestId("send_msg_textbox")).toBeInTheDocument();
  });
});
