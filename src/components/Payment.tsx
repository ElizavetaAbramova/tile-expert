import { useState } from "react";
import { RadioInput } from "./RadioInput";
import { CardPaymentDetails } from "./CardPaymentDetails";

export const Payment = () => {
  const [selectedMethod, setSelectedMethod] = useState<"card" | "paypal">(
    "card",
  );

  const [cardMethod, setCardMethod] = useState<
    "bankcard" | "applepay" | "transfer"
  >("bankcard");

  return (
    <div className="payment font-heading uppercase flex flex-col gap-2">
      <span className="border-2 rounded-md px-2 bg-parchment-200">
        Select payment method:
      </span>
      <fieldset>
        <div className="method flex gap-10 w-full">
          <RadioInput
            name="payment-type"
            value="card"
            label="Debit / credit card"
            checked={selectedMethod === "card"}
            onSelect={() => setSelectedMethod("card")}
          />
          <RadioInput
            value="paypal"
            name="payment-type"
            label="Paypal"
            checked={selectedMethod === "paypal"}
            onSelect={() => setSelectedMethod("paypal")}
          />
        </div>
      </fieldset>
      {selectedMethod === "card" && (
        <fieldset className="flex flex-col gap-2">
          <div
            className="bg-parchment-200 flex flex-col gap-2 items-start p-2 border-2 rounded-md"
            onClick={() => setCardMethod("bankcard")}
          >
            <CardPaymentDetails
              checked={cardMethod === "bankcard"}
              onSelect={() => setCardMethod("bankcard")}
            />
          </div>

          <div className="flex gap-2">
            <div
              className="flex flex-1 gap-1 items-center px-2 border-2 rounded-md"
              onClick={() => setCardMethod("applepay")}
            >
              <RadioInput
                value="applepay"
                name="payment-method"
                label=""
                checked={cardMethod === "applepay"}
                onSelect={() => setCardMethod("applepay")}
              />
              <div className="w-full flex flex-col items-center">
                <img src="/src/assets/apple-pay.png" className="w-8" />
                <p className="text-sm">Apple Pay</p>
              </div>
            </div>
            <div
              onClick={() => setCardMethod("transfer")}
              className="flex flex-1 gap-1 items-center px-2 py-1 border-2 rounded-md"
            >
              <RadioInput
                value="transfer"
                name="payment-method"
                label=""
                checked={cardMethod === "transfer"}
                onSelect={() => setCardMethod("transfer")}
              />
              <div className="w-full flex flex-col items-center">
                <img src="/src/assets/bank.png" className="w-8" />
                <p className="text-sm">Bank Transfer</p>
              </div>
            </div>
          </div>
        </fieldset>
      )}
      <button className="uppercase bg-ceramic-300 text-ceramic-50 rounded-md border-2 border-ink-400 w-full p-1 md:hover:bg-ceramic-500 transition-color duration-300 cursor-pointer">
        Place secure order
      </button>
    </div>
  );
};
