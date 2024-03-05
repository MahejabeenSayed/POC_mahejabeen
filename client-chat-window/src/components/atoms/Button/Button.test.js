import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";
import { BrowserRouter } from "react-router-dom";

describe("Button", () => {
  it("Button rendering", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Button label="shop now" variant="primary" />
      </BrowserRouter>
    );
    expect(getByTestId("button")).toBeInTheDocument();
    screen.logTestingPlaygroundURL();
  });
});
