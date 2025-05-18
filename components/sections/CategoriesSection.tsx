'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { categories } from "../../utils/mockData";

export default function CategoriesSection() {
    const mainCategories = categories.slice(0, 4);
    const router = useRouter();

    return (
        <section>
            <h2 className="text-lg font-bold mt-6 mb-2 text-gray-800 dark:text-gray-100 transition-colors">
                Browse Categories
            </h2>
            <div className="flex gap-4 overflow-x-auto p-4">
                {mainCategories.map(cat => (
                    <button
                        key={cat.id}
                        type="button"
                        className="flex flex-col items-center
                            bg-white dark:bg-gray-800
                            shadow rounded-2xl px-5 py-3 min-w-[120px]
                            transition-colors focus:outline-none hover:ring-2 hover:ring-primary dark:hover:ring-gray-100"
                        onClick={() => router.push(`/menu?category=${cat.id}`)}
                    >
                        <Image
                            src={cat.image}
                            alt={cat.name}
                            width={56}
                            height={56}
                            className="w-14 h-14 object-cover rounded-full mb-2"
                        />
                        <div className="font-medium text-gray-800 dark:text-gray-100 transition-colors">
                            {cat.name}
                        </div>
                    </button>
                ))}
            </div>
        </section>
    );
}
