interface CartBadgeProps {
  amountOfItems: number;
}

const CartBadgeSize = {
  Small: "h-4 w-4 text-[12px]",
  Medium: "h-5 w-5 text-[10px]",
  Large: "h-5 w-5 text-[8px]",
} as const;

const getBadgeSize = (
  count: number,
): (typeof CartBadgeSize)[keyof typeof CartBadgeSize] => {
  if (count < 10) return CartBadgeSize.Small;
  if (count < 100) return CartBadgeSize.Medium;

  return CartBadgeSize.Large;
};

export const CartBadge = ({ amountOfItems }: CartBadgeProps) => {
  const sizeClass = getBadgeSize(amountOfItems);

  return (
    <div className="flex items-center py-1">
      <div className="relative inline-block">
        <img
          src="src/assets/shopping-cart.png"
          alt="shopping cart"
          className="h-5 md:h-6"
        />
        {amountOfItems > 0 && (
          <div
            className={`absolute -top-2 -right-2 flex items-center justify-center rounded-full bg-ochre-300 font-bold border-2 ${sizeClass}`}
          >
            {amountOfItems > 999 ? "999+" : amountOfItems}
          </div>
        )}
      </div>
    </div>
  );
};
