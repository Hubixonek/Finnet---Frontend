import { render, fireEvent } from "@testing-library/react";
import LoginLink from "./LoginLink";
import { AuthContextProvider } from "../../../contexts/AuthContext";
import { BrowserRouter } from "react-router-dom";

describe("LoginLink component", () => {
  const mockGuest = {
    user: null,
  };
  const mockUser = {
    user: {},
  };

  it("If the user is not logged in, render the button with the text 'Zaloguj się'", () => {
    const handleClick = jest.fn();

    const getElement = render(
      <AuthContextProvider value={mockGuest}>
        <BrowserRouter>
          <LoginLink handleClick={handleClick} />
        </BrowserRouter>
      </AuthContextProvider>
    );

    const btn = getElement.getByText("Zaloguj się");
    expect(btn).toBeInTheDocument();
    fireEvent.click(btn);
    expect(handleClick).toHaveBeenCalled();
  });
});
