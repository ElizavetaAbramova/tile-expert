import { useIsMobile } from "../hooks/useIsMobile";
import titleImageLeft from "/src/assets/title-1.png";
import titleImageRight from "/src/assets/title-2.png";
import tileImage1 from "/src/assets/var1.png";
import tileImage2 from "/src/assets/var2.png";
import tileImage3 from "/src/assets/var3.png";
import tileImage4 from "/src/assets/var4.png";
import tileImage5 from "/src/assets/var5.png";
import tileImage6 from "/src/assets/var6.png";

export const OrderPageTitle = () => {
  const isMobile = useIsMobile();

  return (
    <div className="flex gap-6 items-center z-10">
      {!isMobile && (
        <img src={titleImageLeft} alt="temple" className="w-17 h-17" />
      )}
      <div className="title font-heading tracking-wider text-center flex flex-col gap-1">
        <h1 className="text-lg md:text-4xl font-bold">
          CERAMIC TILE ORDER FORM
        </h1>
        <div className="flex justify-between gap-2 md:gap-4 items-center">
          <div className="flex gap-1 md:gap-2">
            <img
              src={tileImage1}
              alt="tile"
              className="w-4 h-4 md:w-7 md:h-7"
            />
            <img
              src={tileImage2}
              alt="tile"
              className="w-4 h-4 md:w-7 md:h-7"
            />
            <img
              src={tileImage3}
              alt="tile"
              className="w-4 h-4 md:w-7 md:h-7"
            />
          </div>
          <h3 className="text-sm md:text-2xl">THE ARTISAN KILN</h3>
          <div className="flex gap-1 md:gap-2">
            <img
              src={tileImage4}
              alt="tile"
              className="w-4 h-4 md:w-7 md:h-7"
            />
            <img
              src={tileImage5}
              alt="tile"
              className="w-4 h-4 md:w-7 md:h-7"
            />
            <img
              src={tileImage6}
              alt="tile"
              className="w-4 h-4 md:w-7 md:h-7"
            />
          </div>
        </div>
      </div>
      {!isMobile && (
        <img src={titleImageRight} alt="temple" className="w-17 h-17" />
      )}
    </div>
  );
};
