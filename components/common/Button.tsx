import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
}

export default function Button({
    children,
    className = '',
    iconLeft,
    iconRight,
    ...props
}: ButtonProps) {
    return (
        <button
            className={`
                bg-orange-500 text-white
                py-1.5 px-3 text-sm        /* Mobile */
                sm:py-2 sm:px-4 sm:text-base  /* Tablet */
                md:py-2.5 md:px-5 md:text-base /* Desktop */
                rounded-2xl font-semibold cursor-pointer
                transition hover:bg-orange-600 flex items-center justify-center gap-2
                disabled:bg-gray-300 disabled:text-gray-400
                ${className}
            `}
            {...props}
        >
            {iconLeft}
            {children}
            {iconRight}
        </button>
    );
}
