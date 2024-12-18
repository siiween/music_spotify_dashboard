interface ButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "outline" | "transparent";
    size?: "xs" | "sm" | "md" | "lg";
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    name?: string;
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = "primary",
    size = "md",
    onClick,
    disabled = false,
    className = "",
    name = "button",
}) => {


    const baseClasses =
        "inline-flex items-center justify-center font-semibold rounded focus:outline-none transition duration-200";

    const variantClasses = {
        primary: "bg-pink-600 text-white hover:bg-pink-700",
        secondary: "bg-rose-600 text-white hover:bg-rose-700",
        outline: "border border-gray-400 text-gray-700 hover:bg-gray-100",
        transparent: "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-neutral-700",
    };

    const sizeClasses = {
        sm: "px-3 py-1 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-5 py-3 text-lg",
        xs: "px-2 py-1 text-xs",
    };

    const classes = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${disabled ? "opacity-50 cursor-not-allowed" : ""}
    ${className}
  `;

    return (
        <button className={classes} onClick={onClick} disabled={disabled} aria-label={name} name={name} title={name}>
            {children}
        </button>
    );
};

export default Button;
