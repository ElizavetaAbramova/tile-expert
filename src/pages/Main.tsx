import { OrderPageTitle } from "../components/OrderPageTitle";
import { OrderSummary } from "../components/OrderSummary";
import { PatternBuilder } from "../components/PatternBuilder";
import { Payment } from "../components/Payment";
import { ShoppingTool } from "../components/ShoppingTool";
import { useIsMobile } from "../hooks/useIsMobile";
import bgImageTL from "/src/assets/angle-tl.png";
import bgImageTR from "/src/assets/angle-tr.png";
import bgImageBorderL from "/src/assets/border-left.png";
import bgImageBorderR from "/src/assets/border-right.png";

export const Main = () => {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col items-center justify-start flex-1 gap-5 md:gap-10 py-3 px-2 md:px-10 bg-parchment-100 relative">
      {!isMobile && (
        <>
          <img src={bgImageTL} className="absolute top-0 left-0" />
          <img src={bgImageTR} className="absolute top-0 right-0" />
        </>
      )}
      <img src={bgImageBorderL} className="absolute top-30 left-0" />
      <img src={bgImageBorderR} className="absolute top-30 right-0" />

      <OrderPageTitle />
      <div className="order-form flex md:flex-row flex-col md:items-start justify-center gap-2 md:gap-5 md:justify-around w-full flex-wrap z-10">
        <ShoppingTool />
        {!isMobile && <PatternBuilder />}
        <div className="flex flex-col gap-2 w-full lg:w-[350px]">
          <OrderSummary />
          <Payment />
        </div>
      </div>
    </div>
  );
};
