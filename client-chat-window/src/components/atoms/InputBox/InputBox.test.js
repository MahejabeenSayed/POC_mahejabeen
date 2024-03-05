import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import InputBox from "./InputBox";

describe("InputBox", () => {
  it("Rendering InputBox Correctly", () => {
    const { getByTestId } = render(
      <InputBox
        type="text"
        id="search"
        label="Search"
        placeholder="Enter search term"
        onChange={() => {}}
      />
    );

    expect(getByTestId("inputbox")).toBeInTheDocument();
    screen.logTestingPlaygroundURL(getByTestId("inputbox"));
  });
});
