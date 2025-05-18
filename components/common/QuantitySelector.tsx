export default function QuantitySelector({
    value,
    onChange,
}: {
    value: number;
    onChange: (val: number) => void;
}) {
    return (
        <div className="flex items-center gap-2 w-full justify-center">
            <button
                className="bg-gray-200 px-3 py-1 rounded-l font-bold text-xl"
                onClick={() => onChange(value - 1)}
                aria-label="Decrease quantity"
            >−</button>
            <span className="px-3 py-1 text-lg dark:text-white">{value}</span>
            <button
                className="bg-gray-200 px-3 py-1 rounded-r font-bold text-xl"
                onClick={() => onChange(value + 1)}
                aria-label="Increase quantity"
            >+</button>
        </div>
    );
}
