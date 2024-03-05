import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { IntlProviderWrapper } from "../../../util/context/Internationalization";
import socketIO from "socket.io-client";
import Sidebar from ".";

const socket = socketIO.connect("http://localhost:4000");
socket.emit("newUser", { userName: "Johndeo", socketID: socket.id });
socket.emit("newUser", { userName: "rosey", socketID: socket.id });

let scrollIntoViewMock = jest.fn();
window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;

describe("Sidebar", () => {
  it("Chat sidebar rendering", () => {
    render(
      <BrowserRouter>
        <IntlProviderWrapper>
          <Sidebar socket={socket} />
        </IntlProviderWrapper>
      </BrowserRouter>
    );
    const headingEle = screen.getByText(/open chat/i);
    expect(headingEle).toBeInTheDocument();
  });

  test("renders new user heading", () => {
    render(
      <BrowserRouter>
        <IntlProviderWrapper>
          <Sidebar socket={socket} />
        </IntlProviderWrapper>
      </BrowserRouter>
    );
    const userEle = screen.getByText(/johndeo/i);
    expect(userEle).toBeInTheDocument();
  });
});
