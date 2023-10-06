import { render } from "@testing-library/react";
import SettingsPresenter from "./SettingsPresenter";
describe("SettingsPresenter component", () => {
  it("Should choice selected component to render when u click", () => {
    render(<SettingsPresenter />);
  });
});
