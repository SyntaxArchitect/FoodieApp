type Props = {
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    type?: string;
    error?: string;
};

export default function InputField({ label, value, onChange, required = false, type = "text", error }: Props) {
    return (
        <label className="block mb-2">
            <span className="block mb-1 text-gray-800 dark:text-gray-200 font-medium">{label}</span>
            <input
                type={type}
                required={required}
                value={value}
                onChange={onChange}
                className={`
                    w-full px-4 py-2 rounded border
                    ${error ? "border-red-500" : "border-gray-300 dark:border-gray-700"}
                    bg-white dark:bg-gray-800
                    text-gray-900 dark:text-gray-100
                    placeholder-gray-400 dark:placeholder-gray-500
                    focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                    transition-colors
                `}
                placeholder={label}
            />
            {error && <span className="text-sm text-red-500 mt-1 block">{error}</span>}
        </label>
    );
}
