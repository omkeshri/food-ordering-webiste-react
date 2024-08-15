import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Cases", () => {
  // test or it
  test("Should load contact us page", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("Should load button inside contact us page", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("Should load input name inside contact us page", () => {
    render(<Contact />);
    const inputName = screen.getByPlaceholderText("name");
    expect(inputName).toBeInTheDocument();
  });

  test("Should load 2 input box inside contact us page", () => {
    render(<Contact />);
    const inputBox = screen.getAllByRole("textbox");
    expect(inputBox.length).toBe(2);
  });
});
