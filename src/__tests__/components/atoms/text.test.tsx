import { render, screen } from "@testing-library/react";
import Text from "@/components/atoms/Text";

describe("Text", () => {
  it("should render text correctly with default classes", () => {
    render(<Text>Test Text</Text>);
    const textElement = screen.getByText(/Test Text/i);
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveClass(
      "font-sans text-base text-gray-900 dark:text-gray-100"
    );
  });

  it("must apply the correct classes according to the size", () => {
    render(<Text size="xs">Text XS</Text>);
    const textXS = screen.getByText(/Text XS/i);
    expect(textXS).toHaveClass("text-xs");

    render(<Text size="lg">Text LG</Text>);
    const textLG = screen.getByText(/Text LG/i);
    expect(textLG).toHaveClass("text-lg");

    render(<Text size="2xl">Text 2XL</Text>);
    const text2XL = screen.getByText(/Text 2XL/i);
    expect(text2XL).toHaveClass("text-2xl");
  });

  it("must apply the correct classes according to the variant", () => {
    render(<Text variant="primary">Primary Text</Text>);
    const textPrimary = screen.getByText(/primary text/i);
    expect(textPrimary).toHaveClass("text-gray-900 dark:text-gray-100");

    render(<Text variant="secondary">Secundary Text</Text>);
    const textSecondary = screen.getByText(/secundary text/i);
    expect(textSecondary).toHaveClass("text-gray-700 dark:text-gray-300");

    render(<Text variant="muted">Muted Text</Text>);
    const textMuted = screen.getByText(/muted text/i);
    expect(textMuted).toHaveClass("text-gray-500 dark:text-gray-400");
  });

  it("should render with the label type specified by the `as` property", () => {
    render(<Text as="h1">Header H1</Text>);
    const headingElement = screen.getByText(/header h1/i);
    expect(headingElement).toBeInTheDocument();
    expect(headingElement.tagName).toBe("H1");

    render(<Text as="span">Text in Span</Text>);
    const spanElement = screen.getByText(/text in span/i);
    expect(spanElement).toBeInTheDocument();
    expect(spanElement.tagName).toBe("SPAN");

    render(<Text as="div">Text in Div</Text>);
    const divElement = screen.getByText(/text in div/i);
    expect(divElement).toBeInTheDocument();
    expect(divElement.tagName).toBe("DIV");
  });

  it("should apply the additional classes provided via `className`", () => {
    render(<Text className="text-red-500">Text with aditional class</Text>);
    const textWithClass = screen.getByText(/text with aditional class/i);
    expect(textWithClass).toHaveClass("text-red-500");
  });
});
