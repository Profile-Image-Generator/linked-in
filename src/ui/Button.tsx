import React from "react";

interface ButtonProps {
    onClick: () => void;
    disabled?: boolean;
    fullWidth?: boolean;
    children: React.ReactNode;
}

export default function Button({
    onClick,
    disabled = false,
    fullWidth = false,
    children,
                               }: ButtonProps) {
    const widthStyle = fullWidth ? "py-3 px-6 w-full" : "px-4 py-2";

    return (<button
        onClick={onClick}
        disabled={disabled}
        className={"mt-8 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed " + widthStyle}
    >
        {children}
    </button>)
}