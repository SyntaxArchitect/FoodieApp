'use client'
import { useSearchParams } from 'next/navigation'
import { foods } from '../../utils/mockData'
import { FoodCard, CategoryList } from '@/components';
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Menu() {
    const searchParams = useSearchParams();
    const [selected, setSelected] = useState<number | null>(null)
    const [loading, setLoading] = useState(true)
    const router = useRouter();
    // On mount, set selected from query
    useEffect(() => {
        const catParam = searchParams.get('category');
        setSelected(catParam ? Number(catParam) : null);
        // Only run on mount
        // eslint-disable-next-line
    }, []);

    useEffect(() => { setTimeout(() => setLoading(false), 800) }, [])

    const shown = selected ? foods.filter(f => f.category === selected) : foods

    function handleSelect(catId: number) {
        setSelected(catId);
        router.push(`/menu?category=${catId}`);
    }

    return (
        <section>
            <h2 className="text-xl font-bold mt-2 mb-4 text-gray-900 dark:text-gray-100 transition-colors">
                Menu
            </h2>
            <CategoryList selected={selected} onSelect={handleSelect} />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                {loading
                    ? Array.from({ length: 8 }).map((_, i) => (
                        <div key={i} className="w-full">
                            <div className="animate-pulse h-48 bg-gray-200 dark:bg-gray-800 rounded-2xl transition-colors"></div>
                        </div>
                    ))
                    : shown.map(item => <FoodCard key={item.id} {...item} />)}
            </div>
        </section>
    )
}
