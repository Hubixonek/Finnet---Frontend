import { render, cleanup, screen } from "@testing-library/react";
import Button from "./Button";

describe("Component Button", () => {
  it("Should render string Zapisz", () => {
    render(<Button />);
    const buttonElement = screen.getByText("Zapisz");
    expect(buttonElement).toBeInTheDocument();
  });
  it("Should have name of class .formButton", () => {
    render(<Button />);
    const buttonElement = screen.getByText("Zapisz");
    expect(buttonElement).toHaveClass("formButton");
  });
  it("Should to get the postData prop", () => {
    const postDataMock = jest.fn();
    const { container } = render(<Button postData={postDataMock} />);
    expect(container.querySelector("button")).toBeInTheDocument();
    expect(postDataMock).toHaveBeenCalledTimes(0);
  });

  afterAll(cleanup);
});
