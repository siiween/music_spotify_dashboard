import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "next-themes";
import BarChart from "@/components/molecules/BarChart";

jest.mock("react-chartjs-2", () => ({
  Bar: jest.fn(() => <div>Bar Chart</div>),
}));
global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };
  };

describe("BarChart", () => {
  const renderWithTheme = (ui: JSX.Element) => {
    return render(<ThemeProvider attribute="class">{ui}</ThemeProvider>);
  };

  it("should render the BarChart component with correct data", () => {
    const data = [10, 20, 30, 40];
    const labels = ["Jan", "Feb", "Mar", "Apr"];

    renderWithTheme(
      <BarChart label="Monthly Sales" data={data} labels={labels} />
    );
    expect(screen.getByText("Bar Chart")).toBeInTheDocument();
  });

  it("should use horizontal layout when horizontal prop is true", () => {
    const data = [10, 20, 30, 40];
    const labels = ["Jan", "Feb", "Mar", "Apr"];

    renderWithTheme(
      <BarChart horizontal label="Monthly Sales" data={data} labels={labels} />
    );
  });

  it("should use vertical layout when horizontal prop is false", () => {
    const data = [10, 20, 30, 40];
    const labels = ["Jan", "Feb", "Mar", "Apr"];

    renderWithTheme(
      <BarChart label="Monthly Sales" data={data} labels={labels} />
    );
  });
});
