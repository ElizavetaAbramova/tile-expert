interface OrderTotalProps {
  subtotal: number;
  shipping: number;
  grandTotal: number;
}

export const OrderTotal = ({
  subtotal,
  shipping,
  grandTotal,
}: OrderTotalProps) => {
  return (
    <div className="font-heading text-md grid gap-x-1 grid-cols-2 text-end items-center">
      <p>Subtotal: </p>
      <span className="border-x-2 w-[82px] text-center px-2 ">
        [${subtotal.toFixed(2)}]
      </span>
      <p>Shipping: </p>
      <span className="border-2 w-[82px] text-center px-2 ">
        [${shipping.toFixed(2)}]
      </span>
      <p>Grand total: </p>
      <span className="border-x-2 border-b-2 w-[82px] text-center px-2 bg-parchment-200">
        [${grandTotal.toFixed(2)}]
      </span>
    </div>
  );
};
