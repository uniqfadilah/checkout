import React, { useState } from "react";
import {
  __Shipment_Type__,
  IshipmentType,
  __Payment_Type__,
  IPaymentType,
} from "@/constant/shipmentType";
import Icon from "./Icon";
import useInfo from "@/store/useInfo";
import { numberFormat } from "@/utils/common";

const StageTwo = () => {
  const {data, setData} = useInfo((state) => state)
  const [selectedShipment, setSelectedShipment] = useState<IPaymentType>();
  const [selectedPayment, setSelectedPayment] = useState<IPaymentType>();
  return (
    <div className="flex-1 flex flex-col space-y-6">
      <div className="w-full">
        <h1 className="text-3xl font-semibold text-[#FF8A00] ">Shipment</h1>

        <div className="py-8 flex space-x-4">
          {__Shipment_Type__.map((e: IshipmentType) => (
            <button
              className={`w-[180px] text-gray-500 outline-none flex justify-between items-center px-2 border py-2 text-gray hover:border-green-500 hover:text-gray-800 ${
                e.id === data?.selectedShipment?.id &&
                "bg-green-50 border-green-500 text-gray-800 font-semibold"
              }`}
              onClick={() => setData({selectedShipment : e})}
              key={e.id}
            >
             <div className="flex-1 text-left px-2"><p className="font-normal">{e.name}</p> <p>{numberFormat(parseInt(e.price))}</p></div>
             {data?.selectedShipment?.id === e.id && <Icon type="ri-check-fill text-green-500"/> }
             
            </button>
          ))}
        </div>
      </div>
      <div className="w-full">
        <h1 className="text-3xl font-semibold text-[#FF8A00] ">Payment</h1>
        <div className="py-8 flex space-x-4">
          {__Payment_Type__.map((e: IPaymentType) => (
            <button
            className={`w-[180px] text-gray-500 outline-none flex justify-between items-center px-2 border py-2 text-gray hover:border-green-500 hover:text-gray-800 ${
                e.id === data?.selectedPayment?.id &&
                "bg-green-50 border-green-500 text-gray-800 font-semibold"
              }`}
              onClick={() => setData({selectedPayment:e})}
              key={e.id}
            >
              <div className="flex-1 text-left"><p className="font-normal">{e.name}</p> {e.ballance && <p>{numberFormat(parseInt(e.ballance))} Left</p>}</div>
              {data?.selectedPayment?.id === e.id && <Icon type="ri-check-fill text-green-500"/> }
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StageTwo;
