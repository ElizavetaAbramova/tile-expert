import { OrderPageTitle } from "../components/OrderPageTitle";
import { OrderSummary } from "../components/OrderSummary";
import { PatternBuilder } from "../components/PatternBuilder";
import { Payment } from "../components/Payment";
import { ShoppingTool } from "../components/ShoppingTool";
import { useIsMobile } from "../hooks/useIsMobile";

export const Main = () => {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col items-center justify-start flex-1 gap-5 py-3 px-2 md:px-10 bg-parchment-100">
      <OrderPageTitle />
      <div className="order-form flex md:flex-row flex-col items-center gap-2 justify-between w-full">
        <ShoppingTool items={[]} />
        {!isMobile && <PatternBuilder />}
        <div>
          <OrderSummary />
          <Payment />
        </div>
      </div>
    </div>
  );
};
