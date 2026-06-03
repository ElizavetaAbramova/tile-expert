import { Input } from "./Input";
import { OrderTotal } from "./OrderTotal";
import { TextArea } from "./TextArea";

export const OrderSummary = () => {
  return (
    <div className="order-summary max-w-[300px] flex flex-col items-end">
      <div className="title bg-parchment-200 flex w-full rounded-t-sm">
        <div className="font-heading text-lg md:text-xl uppercase bg-parchment-200 border-l-2 border-t-2 border-r-2 px-2 rounded-t-sm mb-1 mr-[-1px]">
          Order Summary
        </div>
        <div className="flex-1 rounded-bl-sm border-b-2 border-l-2 mt-1 ml-[-1px]"></div>
      </div>
      <div className="order-info flex flex-col gap-1 w-full">
        <Input
          name="name"
          type="text"
          label="Customer Name :"
          isRequired={true}
        />
        <div className="flex">
          <Input name="phone" type="text" label="phone :" isRequired={true} />
          <Input name="email" type="email" label="email :" isRequired={true} />
        </div>
        <Input
          name="shipping-address"
          type="text"
          label="shipping address :"
          isRequired={true}
        />
        <TextArea name="notes" rows={3} cols={50} label="projects Notes :" />
      </div>
      <OrderTotal />
    </div>
  );
};
