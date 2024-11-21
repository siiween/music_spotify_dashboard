// src/__tests__/pages/home.test.tsx

import { render, screen, fireEvent, within } from "@testing-library/react";
import Home from "@/app/home/page";
import SideBarMenu from "@/components/organisms/SideBarMenu";
import { usePathname } from "next/navigation";

jest.mock("@heroicons/react/16/solid", () => ({
    MoonIcon: jest.fn(() => <div data-testid="moon-icon" />),
    SunIcon: jest.fn(() => <div data-testid="sun-icon" />),
}));
jest.mock("next/navigation", () => ({
    usePathname: jest.fn(),
}));

describe("Página Principal (Home)", () => {
    it("should render the main page correctly", () => {
        render(<Home />);
        expect(screen.getByText(/Top Artists/i)).toBeInTheDocument();
        expect(screen.getByText(/Top Songs/i)).toBeInTheDocument();
    });
    it("must render artist cards correctly", () => {
        render(<Home />);
        const topArtistSection = screen.getByText(/Top Artists/i).closest("section");
        if (topArtistSection != null) {
            const artistCards = within(topArtistSection).getAllByRole("link");
            expect(artistCards).toHaveLength(2);
            const firstArtistCard = artistCards[0];
            expect(firstArtistCard).toHaveAttribute("href", "/home");
            expect(firstArtistCard).toHaveTextContent("Jhayco");
            const secondArtistCard = artistCards[1];
            expect(secondArtistCard).toHaveAttribute("href", "/home");
            expect(secondArtistCard).toHaveTextContent("Mora");

        }
    });

    /*it("should render the sidebar correctly", () => {
        (usePathname as jest.Mock).mockReturnValue("/home");
        render(<SideBarMenu />);
        const sidebar = screen.getByRole("navigation");
        expect(sidebar).toBeInTheDocument();
        expect(screen.getByText("Home")).toBeInTheDocument();
        expect(screen.getByText("Favorites")).toBeInTheDocument();
        const homeLink = screen.getByText("Home").closest("a");
        expect(homeLink).toHaveAttribute("href", "/home");
        const favoritesLink = screen.getByText("Favorites").closest("a");
        expect(favoritesLink).toHaveAttribute("href", "/favorites");
        expect(screen.getByText("Music")).toBeInTheDocument();
        const moonIcon = screen.getByTestId("moon-icon");
        const sunIcon = screen.getByTestId("sun-icon");
        expect(moonIcon).toBeInTheDocument();
        expect(sunIcon).toBeInTheDocument();
    });

    it("you should change the theme to dark when clicking the moon button", () => {
        render(<Home />);
        const moonIcon = screen.getByTestId("moon-icon");
        fireEvent.click(moonIcon);
        expect(document.body.classList).toContain("dark");
    });

    it("you should change the theme to light when clicking the sun button", () => {
        render(<Home />);
        const sunIcon = screen.getByTestId("sun-icon");
        fireEvent.click(sunIcon);
        expect(document.body.classList).toContain("light");
    });*/
});
