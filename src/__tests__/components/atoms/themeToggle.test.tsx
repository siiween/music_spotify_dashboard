import { render, screen, fireEvent } from "@testing-library/react";
import { useTheme } from "next-themes";
import ThemeToggle from "@/components/atoms/ThemeToggle";


jest.mock("@heroicons/react/16/solid", () => ({
    MoonIcon: jest.fn(() => <div data-testid="moon-icon" />),
    SunIcon: jest.fn(() => <div data-testid="sun-icon" />),
}));

jest.mock("next-themes", () => ({
    useTheme: jest.fn(),
}));

describe("ThemeToggle", () => {

    it("should render sun and moon icons correctly", () => {
        (useTheme as jest.Mock).mockReturnValue({ theme: "light", setTheme: jest.fn() });
        render(<ThemeToggle />);
        const moonIcon = screen.getByTestId("moon-icon");
        const sunIcon = screen.getByTestId("sun-icon");
        expect(moonIcon).toBeInTheDocument();
        expect(sunIcon).toBeInTheDocument();
    });

    it("must switch to dark theme when clicking the moon icon", () => {
        const setThemeMock = jest.fn();
        (useTheme as jest.Mock).mockReturnValue({ theme: "light", setTheme: setThemeMock });
        render(<ThemeToggle />);
        const moonIcon = screen.getByTestId("moon-icon");
        fireEvent.click(moonIcon);
        expect(setThemeMock).toHaveBeenCalledWith("dark");
    });

    it("must switch to light theme when clicking the sun icon", () => {
        const setThemeMock = jest.fn();
        (useTheme as jest.Mock).mockReturnValue({ theme: "dark", setTheme: setThemeMock });
        render(<ThemeToggle />);
        const sunIcon = screen.getByTestId("sun-icon");
        fireEvent.click(sunIcon);
        expect(setThemeMock).toHaveBeenCalledWith("light");
    });

    it("should apply the correct class to the sun and moon button based on the current theme", () => {
        (useTheme as jest.Mock).mockReturnValue({ theme: "light", setTheme: jest.fn() });
        const { rerender } = render(<ThemeToggle />);
        const moonButton = screen.getByTestId("moon-icon").closest("button");
        const sunButton = screen.getByTestId("sun-icon").closest("button");
        expect(moonButton).toHaveClass("hover:bg-neutral-300");
        expect(sunButton).toHaveClass("bg-neutral-200");
        (useTheme as jest.Mock).mockReturnValue({ theme: "dark", setTheme: jest.fn() });
        rerender(<ThemeToggle />);
        expect(moonButton?.getAttribute("class")).toContain("bg-black");
        expect(sunButton?.getAttribute("class")).toContain("hover:bg-black");
    });

});
