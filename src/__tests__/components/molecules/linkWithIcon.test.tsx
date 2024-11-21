import { render, screen } from "@testing-library/react";
import LinkWithIcon from "@/components/molecules/LinkWithIcon";
import { MusicalNoteIcon } from "@heroicons/react/16/solid";


jest.mock("@heroicons/react/16/solid", () => ({
    MusicalNoteIcon: jest.fn(() => <div data-testid="musical-icon" />)
}));
describe("LinkWithIcon", () => {
    it("should render the link with the correct text and href", () => {
        render(
            <LinkWithIcon href="/test" target="_self">
                Test Link
            </LinkWithIcon>
        );
        const link = screen.getByRole("link", { name: "Test Link" });
        expect(link).toHaveAttribute("href", "/test");
        expect(link).toHaveTextContent("Test Link");
    });

    it("should render icon when icon property is provided", () => {
        render(
            <LinkWithIcon href="/test" icon={MusicalNoteIcon}>
                Test Link
            </LinkWithIcon>
        );
        const icon = screen.getByTestId("musical-icon");
        expect(icon).toBeInTheDocument();
    });


    it("should apply an aria-label when the text is a string", () => {
        render(
            <LinkWithIcon href="/test" icon={MusicalNoteIcon}>
                Test Link
            </LinkWithIcon>
        );
        const link = screen.getByRole("link", { name: "Test Link" });
        expect(link).toHaveAttribute("aria-label", "Test Link");
    });

    it("must have the correct target when provided", () => {
        render(
            <LinkWithIcon href="/test" target="_blank">
                Test Link
            </LinkWithIcon>
        );
        const link = screen.getByRole("link", { name: "Test Link" });
        expect(link).toHaveAttribute("target", "_blank");
    });
});
