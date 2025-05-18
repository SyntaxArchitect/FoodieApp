import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateQuantity, removeFromCart } from "../../redux/cartSlice";
import { RootState } from "../../redux/store";
import QuantitySelector from "../common/QuantitySelector";
import Image from "next/image";
import Button from '../common/Button';

type Props = { id: number; name: string; image: string; price: number; };

export default function FoodCard({ id, name, image, price }: Props) {
    const dispatch = useDispatch();
    const cartItem = useSelector(
        (state: RootState) => state.cart.items.find((i) => i.id === id)
    );

    return (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow flex flex-col items-center w-full max-w-xs mx-auto min-h-[300px] transition-colors">
            {/* Large, top-only-rounded image */}
            <div className="w-full relative rounded-t-2xl overflow-hidden h-[150px]">
                <Image
                    src={image}
                    alt={name}
                    fill
                    sizes="(max-width: 640px) 100vw, 200px"
                    className="object-cover"
                    priority
                />
            </div>
            {/* Product Info */}
            <div className="flex-1 flex flex-col justify-between w-full px-5 py-4">
                <div>
                    <div className="font-semibold text-center text-lg text-gray-900 dark:text-gray-50 transition-colors">{name}</div>
                    <div className="text-primary dark:text-orange-300 text-center text-base my-2 font-medium transition-colors">
                        ₹{price}
                    </div>
                </div>
                <div className="flex flex-col justify-end mt-2">
                    {cartItem ? (
                        <QuantitySelector
                            value={cartItem.quantity}
                            onChange={(qty) => {
                                if (qty === 0) {
                                    dispatch(removeFromCart(id));
                                } else {
                                    dispatch(updateQuantity({ id, quantity: qty }));
                                }
                            }}
                        />
                    ) : (
                        <Button
                            className="mt-2 w-full"
                            onClick={() =>
                                dispatch(addToCart({ id, name, price, image, quantity: 1 }))
                            }
                        >
                            Add to Cart
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}
