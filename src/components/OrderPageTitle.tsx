import { useIsMobile } from "../hooks/useIsMobile";

export const OrderPageTitle = () => {
  const isMobile = useIsMobile();

  return (
    <div className="flex gap-6 items-center">
      {!isMobile && (
        <img
          src="/src/assets/temple_2.png"
          alt="temple"
          className="w-17 h-17"
        />
      )}
      <div className="title font-heading tracking-wider text-center flex flex-col gap-1">
        <h1 className="text-2xl font-bold">CERAMIC TILE ORDER FORM</h1>
        <div className="flex justify-between gap-4">
          <div className="flex gap-1">
            <img src="/src/assets/var1.png" alt="tile" className="w-5 h-5" />
            <img src="/src/assets/var2.png" alt="tile" className="w-5 h-5" />
            <img src="/src/assets/var3.png" alt="tile" className="w-5 h-5" />
          </div>
          <h3 className="text-sm">THE ARTISAN KILN</h3>
          <div className="flex gap-1">
            <img src="/src/assets/var4.png" alt="tile" className="w-5 h-5" />
            <img src="/src/assets/var5.png" alt="tile" className="w-5 h-5" />
            <img src="/src/assets/var6.png" alt="tile" className="w-5 h-5" />
          </div>
        </div>
      </div>
      {!isMobile && (
        <img
          src="/src/assets/fireplace.png"
          alt="temple"
          className="w-20 h-20"
        />
      )}
    </div>
  );
};
