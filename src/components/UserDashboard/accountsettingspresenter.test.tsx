import { render } from "@testing-library/react";
import AccountSettingsPresenter from "./AccountSettingsPresenter";
import AuthContext from "../../contexts/AuthContext";
const mockData = {
  user: {
    email: "hubiszen@wp.pl",
  },
};
const mockWithOutUser = {
  user: null,
};
describe("AccountSettingsPresenter", () => {
  it("Should render user email if is logged in", () => {
    const { getByText } = render(
      <AuthContext.Provider value={mockData}>
        <AccountSettingsPresenter />
      </AuthContext.Provider>
    );

    const userEmailElement = getByText("Twój adres e-mail to");
    expect(userEmailElement).toBeInTheDocument;
    expect(userEmailElement).toHaveTextContent("hubiszen@wp.pl");
  });
  it("renders 'Jesteś zalogowany jako gość' when user is not logged in", () => {
    const { getByText } = render(
      <AuthContext.Provider value={mockWithOutUser}>
        <AccountSettingsPresenter />
      </AuthContext.Provider>
    );
    const guestElement = getByText("Jesteś zalogowany jako gość");
    expect(guestElement).toBeInTheDocument;
  });
});
