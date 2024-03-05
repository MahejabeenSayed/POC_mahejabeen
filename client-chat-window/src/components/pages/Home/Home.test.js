import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home";
import { IntlProviderWrapper } from "../../../util/context/Internationalization";

describe("Home", () => {
  it("Home page rendering", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <IntlProviderWrapper>
          <Home />
        </IntlProviderWrapper>
      </BrowserRouter>
    );
    expect(getByTestId("home")).toBeInTheDocument();
  });

  test("renders 'Sign in to Open Chat' heading", () => {
    render(
      <BrowserRouter>
        <IntlProviderWrapper>
          <Home />
        </IntlProviderWrapper>
      </BrowserRouter>
    );
    const headingEle = screen.getByText(/Join in to Open Chat/i);
    expect(headingEle).toBeInTheDocument();
  });
});
