'use client';

import { foods, featured } from "@/utils/mockData";
import { FoodCard } from '@/components';
import { useEffect, useState } from "react";

export default function RecommendedSection() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 800);
    }, []);

    // Get 4 items not in featured
    const recommended = foods.filter(f => !featured.includes(f.id)).slice(0, 4);

    return (
        <section>
            <h2 className="text-lg font-bold mt-6 mb-2 text-gray-800 dark:text-gray-100 transition-colors">
                Recommended For You
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {loading
                    ? Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="w-full">
                            <div className="animate-pulse h-52 bg-gray-200 dark:bg-gray-800 rounded-2xl transition-colors"></div>
                        </div>
                    ))
                    : recommended.map(item => <FoodCard key={item.id} {...item} />)}
            </div>
        </section>
    );
}
