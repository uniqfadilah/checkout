import useInfo from "@/store/useInfo";
import React from "react";

const Asside = () => {
  const { data, setData } = useInfo((state) => state);
  return (
    <div className="w-1/3 border-l border-[#FF8A00] px-6 pb-6 h-full">
      <div className="flex flex-col justify-between h-full">
        <div className="flex-1">
          <h3 className="text-2xl font-semibold text-[#FF8A00]">Summary</h3>
          <p className="text-gray-500">10 Items Purchased</p>

          {data.selectedShipment && <div className="w-full mt-6 ">
            <div className="w-1/3 h-[1px] bg-gray-300"></div>
            <div className="py-6">
              <p className="text-sm">Delivery Estimation</p>
              <p className="text-green-500 font-semibold">Today By {data?.selectedShipment?.name}</p>
            </div>
          </div>}
          {data.selectedPayment && <div className="w-full mt-6 ">
            <div className="w-1/3 h-[1px] bg-gray-300"></div>
            <div className="py-6">
              <p className="text-sm">Payment method</p>
              <p className="text-green-500 font-semibold">{data?.selectedPayment?.name}</p>
            </div>
          </div>}
        </div>
        <div className="flex flex-col space-y-4">
          <div className="flex text-gray-500 justify-between  ">
            <p>Cost of goods</p>
            <p className="text-gray-800 font-semibold">500.000</p>
          </div>
          <div className="flex text-gray-500 justify-between  ">
            <p>Dropshipping Fee</p>
            <p className="text-gray-800 font-semibold">5.900</p>
          </div>
          <div className="flex text-[#FF8A00] justify-between text-lg font-semibold">
            <p>Total</p>
            <p>505.900</p>
          </div>
          {data.step < 2 && <button
            onClick={() => setData({ step: data.step + 1 })}
            className="outline-none bg-[#FF8A00] w-full text-white text-lg py-4"
          >
            {data.step > 0 ? data.selectedPayment ? `Payment with ${data?.selectedPayment?.name}`:'Select payment':"Continue payment"}
          </button>}
        </div>
      </div>
    </div>
  );
};

export default Asside;
