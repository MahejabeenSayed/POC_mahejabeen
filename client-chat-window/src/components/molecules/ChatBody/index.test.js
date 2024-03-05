import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { IntlProviderWrapper } from "../../../util/context/Internationalization";
import socketIO from "socket.io-client";
import Sidebar from ".";
import ChatBody from ".";

const socket = socketIO.connect("http://localhost:4000");

const messages = [
  {
    id: "1",
    name: "john",
    text: "Hi john",
  },
  {
    id: "2",
    name: "john",
    text: "Hi john , how are you",
  },
];

let scrollIntoViewMock = jest.fn();
window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;

describe("Chat Body", () => {
  it("Chat body rendering", () => {
    render(
      <BrowserRouter>
        <IntlProviderWrapper>
          <ChatBody
            messages={messages}
            typingStatus={false}
            lastMessageRef={null}
          />
        </IntlProviderWrapper>
      </BrowserRouter>
    );
    const headingEle = screen.getByText(/Hangout with Colleagues/i);
    expect(headingEle).toBeInTheDocument();
  });

  //   test("renders new user heading", () => {
  //     render(
  //       <BrowserRouter>
  //         <IntlProviderWrapper>
  //           <Sidebar socket={socket} />
  //         </IntlProviderWrapper>
  //       </BrowserRouter>
  //     );
  //     const userEle = screen.getByText(/johndeo/i);
  //     expect(userEle).toBeInTheDocument();
  //   });
});
