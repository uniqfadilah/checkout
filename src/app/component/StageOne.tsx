import { validateEmail, validatePhone } from "@/utils/common";
import React, { useState } from "react";

const StageOne = () => {
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [isDropship, setIsDropship] = useState<boolean>(true);

  const handleValidateEmail = (e: string) => {
    if (validateEmail(e)) {
      setEmail("isValid");
    } else {
      setEmail("inValid");
    }
  };
  const handleValidatePhone = (e: string) => {
    if (validatePhone(e)) {
      setPhone("isValid");
    } else {
      setPhone("inValid");
    }
  };

  return (
    <div className="flex-1 mr-4">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold text-[#FF8A00] ">
          Delivery Details
        </h1>

        <label
          htmlFor="checboxDropship "
          className="flex space-x-4 items-center text-gray-600"
        >
          <input
            type="checkbox"
            name="checboxDropship"
            id="checboxDropship"
            className="w-4 h-4"
            checked={isDropship}
            onChange={(e) => setIsDropship(e.target.checked)}
          />
          <p className="whitespace-nowrap">Sent as Dropshipper</p>
        </label>
      </div>

      <div className="flex space-x-4 mt-8 ">
        <div className="flex-1 flex flex-col space-y-4">
          <div
            className={`inputWrap border ${
              email === "isValid"
                ? "inputClassValid"
                : email === "inValid"
                ? "inputClassInvalid"
                : ""
            }`}
          >
            <input
              required
              onBlur={(e) => handleValidateEmail(e.target.value)}
            />
            <label>Email</label>
          </div>
          <div
            className={`inputWrap border ${
              phone === "isValid"
                ? "inputClassValid"
                : phone === "inValid"
                ? "inputClassInvalid"
                : ""
            }`}
          >
            <input
              required
              type="number"
              onBlur={(e) => handleValidatePhone(e.target.value)}
            />
            <label>Phone number</label>
          </div>
          <div className="inputWrap">
            <textarea className="border w-full o" required />
            <label>Delivery Address</label>
          </div>
        </div>
        <div className="flex-1 flex flex-col space-y-4">
          {isDropship && (
            <>
              {" "}
              <div className="inputWrap">
                <input required />
                <label>Email</label>
              </div>
              <div className="inputWrap">
                <input required type="number" />
                <label>Phone number</label>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default StageOne;
