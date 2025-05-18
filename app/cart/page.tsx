'use client'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/store'
import { removeFromCart, updateQuantity } from '../../redux/cartSlice'
import { QuantitySelector, Button } from '@/components';
import Link from 'next/link'
import Image from 'next/image'
import { calculateOrderSummary } from '../../utils/orderSummary'

export default function CartPage() {
    const items = useSelector((state: RootState) => state.cart.items)
    const dispatch = useDispatch()
    const { subtotal, deliveryCharge, gst, grandTotal } = calculateOrderSummary(items);

    if (!items.length) return <div className="text-center mt-8 text-gray-700 dark:text-gray-300">Cart is empty.</div>

    return (
        <>
            <h2 className="text-lg font-bold my-2 text-gray-900 dark:text-gray-100 transition-colors">Your Cart</h2>
            <div className="flex flex-col gap-4">
                {items.map(item => (
                    <div key={item.id} className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 flex items-center gap-4 transition-colors">
                        <div className="w-16 h-16 relative">
                            <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                sizes="64px"
                                className="object-cover rounded-lg"
                                priority
                            />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="font-semibold truncate text-gray-900 dark:text-gray-50">{item.name}</div>
                            <div className="text-sm text-primary dark:text-orange-200 mb-2">₹{item.price}</div>
                            <QuantitySelector
                                value={item.quantity}
                                onChange={qty => {
                                    if (qty < 1) {
                                        dispatch(removeFromCart(item.id));
                                    } else {
                                        dispatch(updateQuantity({ id: item.id, quantity: qty }));
                                    }
                                }}
                            />
                        </div>
                        <Button
                            className=""
                            onClick={() => dispatch(removeFromCart(item.id))}
                            type="button"
                        >
                            Remove
                        </Button>
                    </div>
                ))}
            </div>

            {/* Price Summary */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow p-5 mt-6 max-w-md mx-auto transition-colors">
                <div className="flex justify-between mb-2">
                    <span className="text-gray-700 dark:text-gray-200">Subtotal</span>
                    <span className="text-gray-900 dark:text-gray-100">₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                    <span className="text-gray-700 dark:text-gray-200">Delivery Charges</span>
                    <span>
                        {deliveryCharge === 0
                            ? <span className="text-green-600 dark:text-green-400 font-semibold">FREE</span>
                            : <span className="text-gray-900 dark:text-gray-100">₹{deliveryCharge.toFixed(2)}</span>}
                    </span>
                </div>
                {subtotal < 500 && (
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-right">
                        Free delivery on orders above ₹500
                    </div>
                )}

                <div className="flex justify-between mb-2">
                    <span className="text-gray-700 dark:text-gray-200">GST (5%)</span>
                    <span className="text-gray-900 dark:text-gray-100">₹{gst.toFixed(2)}</span>
                </div>
                <hr className="my-2 border-gray-200 dark:border-gray-700" />
                <div className="flex justify-between text-lg font-bold">
                    <span className="text-gray-900 dark:text-gray-100">Total</span>
                    <span className="text-gray-900 dark:text-gray-100">₹{grandTotal.toFixed(2)}</span>
                </div>
            </div>

            <div className="flex justify-center mt-6">
                <Link href="/checkout" className="w-full max-w-xs">
                    <Button className="w-full text-lg py-3 font-bold">
                        Checkout
                    </Button>
                </Link>
            </div>
        </>
    )
}
