import { render } from "@testing-library/react";
import AccountSettingsPresenter from "./AccountSettingsPresenter";
import AuthContext from "../../contexts/AuthContext";
const mockData = {
  user: {
    email: "hubiszen@wp.pl",
  },
};
const mockGuest = {
  user: null,
};
describe("AccountSettingsPresenter", () => {
  it("Should render user email if is logged in", () => {
    const renderResult = render(
      <AuthContext.Provider value={mockData}>
        <AccountSettingsPresenter />
      </AuthContext.Provider>
    );

    const userEmailElement = renderResult.getByText("Twój adres e-mail to");
    expect(userEmailElement).toBeInTheDocument;
    expect(userEmailElement).toHaveTextContent("hubiszen@wp.pl");
  });
  it("renders 'Jesteś zalogowany jako gość' when user is not logged in", () => {
    const renderResult = render(
      <AuthContext.Provider value={mockGuest}>
        <AccountSettingsPresenter />
      </AuthContext.Provider>
    );
    const guestElement = renderResult.getByText("Jesteś zalogowany jako gość");
    expect(guestElement).toBeInTheDocument;
  });
});
