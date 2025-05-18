import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between py-4 px-6
            bg-white dark:bg-gray-800 shadow sticky top-0 z-50 max-w-5xl mx-auto
            transition-colors"
        >
            <Link
                href="/"
                className="font-bold text-xl text-primary dark:text-orange-300 transition-colors"
            >
                FoodieApp
            </Link>
            <div className="flex gap-4">
                <Link href="/menu" className="text-gray-700 dark:text-gray-200 transition-colors">
                    Menu
                </Link>
                <Link href="/cart" className="text-gray-700 dark:text-gray-200 transition-colors">
                    Cart
                </Link>
            </div>
        </nav>
    );
}
