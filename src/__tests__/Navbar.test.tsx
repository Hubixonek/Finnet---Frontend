import SettingsPresenter from "../components/UserDashboard/SettingsPresenter";
import { render, screen } from "@testing-library/react";
describe("Navigationbar Component", () => {
  it("Should render ", () => {
    render(<SettingsPresenter />);
    screen.debug();
  });
});
