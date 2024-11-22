import Button from "@/components/atoms/Button";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Button", () => {
  it("should correctly render button with text", () => {
    render(<Button>Test Button</Button>);
    const button = screen.getByText(/test Button/i);
    expect(button).toBeInTheDocument();
  });

  it("must apply the correct classes according to the variant", () => {
    render(<Button variant="primary">Primary Button</Button>);
    const primaryButton = screen.getByText(/Primary Button/i);
    expect(primaryButton?.getAttribute("class")).toContain(
      "bg-pink-600 text-white hover:bg-pink-700"
    );

    render(<Button variant="secondary">Secondary Button</Button>);
    const secondaryButton = screen.getByText(/Secondary Button/i);
    expect(secondaryButton?.getAttribute("class")).toContain(
      "bg-rose-600 text-white hover:bg-rose-700"
    );

    render(<Button variant="outline">Outline Button</Button>);
    const outlineButton = screen.getByText(/Outline Button/i);
    expect(outlineButton?.getAttribute("class")).toContain(
      "border border-gray-400 text-gray-700 hover:bg-gray-100"
    );
  });

  it("must apply the correct classes according to the size", () => {
    render(<Button size="sm">Small Button</Button>);
    const smallButton = screen.getByText(/Small Button/i);
    expect(smallButton?.getAttribute("class")).toContain("px-3 py-1 text-sm");

    render(<Button size="md">Medium Button</Button>);
    const mediumButton = screen.getByText(/Medium Button/i);
    expect(mediumButton?.getAttribute("class")).toContain(
      "px-4 py-2 text-base"
    );

    render(<Button size="lg">Large Button</Button>);
    const largeButton = screen.getByText(/Large Button/i);
    expect(largeButton?.getAttribute("class")).toContain("px-5 py-3 text-lg");
  });

  it("should have the disabled state when the `disabled` property is true", () => {
    render(<Button disabled={true}>Disabled Button</Button>);
    const disabledButton = screen.getByText(/Disabled Button/i);
    expect(disabledButton).toBeDisabled();
    expect(disabledButton?.getAttribute("class")).toContain(
      "opacity-50 cursor-not-allowed"
    );
  });

  it("should call onClick function when button is clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    const button = screen.getByText(/Click Me/i);
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("should not call onClick function when button is disabled", () => {
    const handleClick = jest.fn();
    render(
      <Button onClick={handleClick} disabled={true}>
        Click Disabled Button
      </Button>
    );
    const disabledButton = screen.getByText(/Click Disabled Button/i);
    fireEvent.click(disabledButton);
    expect(handleClick).not.toHaveBeenCalled();
  });
});
