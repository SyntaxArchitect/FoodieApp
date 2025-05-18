export default function HowItWorksSection() {
    return (
        <section>
            <h2 className="text-lg font-bold mt-10 mb-4 text-gray-800 dark:text-gray-100 transition-colors">
                How It Works
            </h2>
            <div className="flex flex-col md:flex-row gap-6 justify-between text-center">
                <div className="flex-1 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow transition-colors">
                    <div className="text-3xl mb-2">🛒</div>
                    <div className="font-semibold mb-1 text-gray-900 dark:text-gray-100 transition-colors">
                        Browse Menu
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 transition-colors">
                        Choose from a wide range of delicious dishes.
                    </div>
                </div>
                <div className="flex-1 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow transition-colors">
                    <div className="text-3xl mb-2">🧾</div>
                    <div className="font-semibold mb-1 text-gray-900 dark:text-gray-100 transition-colors">
                        Place Your Order
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 transition-colors">
                        Add items to your cart and checkout easily.
                    </div>
                </div>
                <div className="flex-1 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow transition-colors">
                    <div className="text-3xl mb-2">🚚</div>
                    <div className="font-semibold mb-1 text-gray-900 dark:text-gray-100 transition-colors">
                        Quick Delivery
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 transition-colors">
                        Get your food hot and fresh at your doorstep.
                    </div>
                </div>
            </div>
        </section>
    );
}
