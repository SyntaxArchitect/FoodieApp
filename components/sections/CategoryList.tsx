import { categories } from "@/utils/mockData";

export default function CategoryList({ selected, onSelect }: { selected: number | null, onSelect: (id: number) => void }) {
    return (
        <div className="flex gap-3 overflow-x-auto py-2">
            {categories.map(cat => (
                <button
                    key={cat.id}
                    onClick={() => onSelect(cat.id)}
                    className={
                        `
                        rounded-xl px-4 py-2 border font-semibold transition-colors
                        ${selected === cat.id
                            ? "bg-orange-500 text-white border-orange-500 dark:bg-orange-400 dark:text-gray-900 dark:border-orange-400"
                            : "bg-white text-gray-800 border-gray-300 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700"
                        }
                        `
                    }
                >
                    {cat.name}
                </button>
            ))}
        </div>
    );
}
