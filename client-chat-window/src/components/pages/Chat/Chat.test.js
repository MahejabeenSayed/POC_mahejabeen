import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { IntlProviderWrapper } from "../../../util/context/Internationalization";
import ChatPage from "./ChatPage";
import socketIO from "socket.io-client";

const socket = socketIO.connect("http://localhost:4000");

let scrollIntoViewMock = jest.fn();
window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;

describe("Home", () => {
  it("Chat page rendering", () => {
    render(
      <BrowserRouter>
        <IntlProviderWrapper>
          <ChatPage socket={socket} />
        </IntlProviderWrapper>
      </BrowserRouter>
    );
    expect(screen.getByTestId("chat-page")).toBeInTheDocument();
    screen.logTestingPlaygroundURL();
  });

  test("renders 'Sign in to Open Chat' heading", () => {
    render(
      <BrowserRouter>
        <IntlProviderWrapper>
          <ChatPage socket={socket} />
        </IntlProviderWrapper>
      </BrowserRouter>
    );
    const headingEle = screen.getByText(/open chat/i);
    expect(headingEle).toBeInTheDocument();
  });
});
