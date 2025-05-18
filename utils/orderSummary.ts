export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export function calculateOrderSummary(items: CartItem[]) {
  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const deliveryCharge = subtotal >= 500 || subtotal === 0 ? 0 : 40;
  const gstRate = 0.05;
  const gst = subtotal * gstRate;
  const grandTotal = subtotal + deliveryCharge + gst;
  return {
    subtotal,
    deliveryCharge,
    gst,
    grandTotal,
  };
}
