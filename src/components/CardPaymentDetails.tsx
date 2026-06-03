import { useState } from "react";
import { RadioInput } from "./RadioInput";
import { validateCardNumber } from "../utils/validateCardNumber";
import visaLogo from "../assets/visa.png";
import mastercardLogo from "../assets/mastercard.svg";

interface CardPaymentDetailsProps {
  checked: boolean;
  onSelect: () => void;
}

export const CardPaymentDetails = ({
  checked,
  onSelect,
}: CardPaymentDetailsProps) => {
  const [cardNumber, setCardNumber] = useState("");

  const digits = cardNumber.replace(/\s/g, "");

  const isError = digits.length >= 13 && !validateCardNumber(cardNumber);

  return (
    <>
      <div className="flex gap-2 items-center">
        <RadioInput
          value="bankcard"
          name="payment-method"
          label=""
          checked={checked}
          onSelect={onSelect}
        />
        <div className="bg-ceramic-50 rounded-md border-2 w-12 p-1 h-8 flex items-center">
          <img src={visaLogo} alt="Visa" />
        </div>
        <div className="bg-ceramic-50 rounded-md border-2 w-12 h-8 p-1 flex items-center">
          <img src={mastercardLogo} alt="Mastercard" />
        </div>
      </div>
      <input
        placeholder="enter card number"
        className="bg-parchment-100 border-2 rounded-md uppercase px-1 text-sm w-full"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
        autoComplete="cc-number"
      />
      {isError && (
        <p className="text-red-500 text-sm">Enter valid card number</p>
      )}
      <div className="w-full flex gap-2">
        <input
          placeholder="date of expiration"
          className="bg-parchment-100 border-2 rounded-md uppercase px-1 text-sm flex-1"
          autoComplete="cc-exp"
        ></input>
        <input
          placeholder="CVV"
          className="bg-parchment-100 border-2 rounded-md uppercase px-1 text-sm flex-1"
          autoComplete="cc-csc"
        ></input>
      </div>
    </>
  );
};
