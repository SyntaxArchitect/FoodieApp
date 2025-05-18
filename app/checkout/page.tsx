'use client';
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { Button, InputField } from '@/components';
import { clearCart } from "../../redux/cartSlice";
import { calculateOrderSummary } from "../../utils/orderSummary";
import Link from "next/link";

export default function Checkout() {
    const items = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();
    const { subtotal, deliveryCharge, gst, grandTotal } = calculateOrderSummary(items);

    const [form, setForm] = useState({ name: "", address: "", phone: "" });
    const [errors, setErrors] = useState<{ name?: string; address?: string; phone?: string }>({});
    const [done, setDone] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors: typeof errors = {};

        if (!form.name.trim()) newErrors.name = "Name is required";
        if (!form.address.trim()) newErrors.address = "Address is required";
        if (!form.phone.trim()) newErrors.phone = "Phone number is required";
        else if (!/^\d{10}$/.test(form.phone.trim())) newErrors.phone = "Enter a valid 10-digit phone number";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({});
        setLoading(true);

        setTimeout(() => {
            setDone(true);
            setLoading(false);
            dispatch(clearCart());
        }, 1400);
    };

    if (done) return (
        <div className="text-center mt-10 text-green-600 dark:text-green-400">
            <div className="text-2xl font-bold mb-2">🎉 Order Placed!</div>
            <div>Thank you for your order.</div>
            <div className="my-4">
                <Link href="/" className="underline text-orange-500 dark:text-orange-400">Go to Home</Link>
            </div>
        </div>
    )

    return (
        <>
            <h2 className="text-lg font-bold my-2 text-gray-900 dark:text-gray-100">Checkout</h2>
            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                <InputField
                    label="Name"
                    required
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    error={errors.name}
                />
                <InputField
                    label="Address"
                    required
                    value={form.address}
                    onChange={e => setForm(f => ({ ...f, address: e.target.value }))}
                    error={errors.address}
                />
                <InputField
                    label="Phone"
                    required
                    value={form.phone}
                    onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    error={errors.phone}
                />

                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow p-5 mt-3 transition-colors">
                    <div className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Order Summary:</div>
                    {items.map(item => (
                        <div key={item.id} className="flex justify-between text-gray-800 dark:text-gray-100">
                            <span>{item.name} x{item.quantity}</span>
                            <span>₹{item.price * item.quantity}</span>
                        </div>
                    ))}
                    <div className="flex justify-between mt-2">
                        <span className="text-gray-700 dark:text-gray-300">Subtotal</span>
                        <span className="text-gray-900 dark:text-gray-100">₹{subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between mt-1">
                        <span className="text-gray-700 dark:text-gray-300">Delivery Charges</span>
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
                    <div className="flex justify-between mt-1">
                        <span className="text-gray-700 dark:text-gray-300">GST (5%)</span>
                        <span className="text-gray-900 dark:text-gray-100">₹{gst.toFixed(2)}</span>
                    </div>
                    <hr className="my-2 border-gray-200 dark:border-gray-700" />
                    <div className="flex justify-between text-lg font-bold">
                        <span className="text-gray-900 dark:text-gray-100">Total</span>
                        <span className="text-gray-900 dark:text-gray-100">₹{grandTotal.toFixed(2)}</span>
                    </div>
                </div>
                <Button type="submit" className="mt-4" disabled={loading}>
                    {loading ? "Placing Order..." : "Place Order"}
                </Button>
            </form>
        </>
    );
}
