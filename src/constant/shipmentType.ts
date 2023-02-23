export interface IshipmentType {
  id: number;
  name: string;
  price: string;
}

export const __Shipment_Type__: IshipmentType[] = [
  { id: 1, name: "GO-SEND", price: "15000" },
  { id: 2, name: "JNE", price: "9000" },
  { id: 3, name: "Personal Courier", price: "29000" },
];

export interface IPaymentType {
    id: number;
    name: string;
    ballance?: string;
  }
  
  export const __Payment_Type__: IPaymentType[] = [
    { id: 1, name: "e-Walet", ballance: "1500000" },
    { id: 2, name: "Bank Transfer" },
    { id: 3, name: "Personal Courier"},
  ];

export interface IbreadCrumb {
  id : number,
  name : string
}

export const __BreadCrumb__ : IbreadCrumb[] = [
  {id : 0 , name : 'Delivery'},
  {id : 1 , name : 'Payment'},
  {id : 2 , name : 'Finish'}
]