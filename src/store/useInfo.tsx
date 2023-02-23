import { IPaymentType, IshipmentType } from "@/constant/shipmentType";
import { create } from "zustand";
interface formdata {
  data: info;
  inputData : Iinput | null
  setData : (arg:any) => void
}

interface Iinput {
  email : string,
  isEmailValid : boolean
}

interface info {
  step : number,
  selectedShipment : IshipmentType | null
  selectedPayment : IPaymentType | null
 
}
const useInfo = create<formdata>((set) => ({
  data : {
    step : 0,
    selectedShipment : null,
    selectedPayment :  null
  },
  inputData : {
    email : '',
    isEmailValid : false
  },
  setData : (args : any) => set((state) => ({
    ...state,
    data : {...state.data,...args}

  }))
}))


export default useInfo