import Link from "next/link";
import React from "react";
import Text from "@/components/atoms/Text";

interface LinkWithIconProps {
    href: string;
    children: React.ReactNode;
    icon?: React.ElementType;
    className?: string;
    target?: "_blank" | "_self" | "_parent" | "_top";
    active?: boolean;
    collapsed?: boolean;
}

const LinkWithIcon: React.FC<LinkWithIconProps> = ({
    href,
    children,
    icon: Icon,
    className = "",
    target = "_self",
    active = true,
    collapsed = false,
}) => {
    return (
        <Link href={href} target={target} className={`flex items-center gap-2 md:p-0 p-2 hover:underline transition duration-300 ${className}`}
            aria-label={typeof children === "string" ? children : undefined}>
            {Icon && <Icon className={`md:w-6 md:h-6 w-8 h-8 ${active ? "text-gray-900 dark:text-gray-100" : "text-gray-400"}`} />}
            {!collapsed &&
                <Text as="span" size="xl" variant={active ? "primary" : "muted"} className="font-semibold hidden sm:block">
                    {children}
                </Text>
            }
        </Link>
    );
};

export default LinkWithIcon;
