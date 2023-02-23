import { IbreadCrumb, __BreadCrumb__ } from "@/constant/shipmentType";
import useInfo from "@/store/useInfo";
import React, { Fragment } from "react";
import Icon from "./Icon";

const Breadcrumb = () => {
  const { data, setData } = useInfo((state) => state);
  return (
    <div className="w-1/3 bg-[#FFFAE6] text-[#FF8A00] font-semibold  rounded-full absolute -top-6 p-4 left-1/2 transform -translate-x-1/2 flex justify-evenly items-center">
      {__BreadCrumb__.map((e: IbreadCrumb) => (
        <Fragment key={`br-${e.id}`} >
          <div className="flex space-x-4 items-center">
            <span className={`${ data.step >= e.id ? 'bg-[#FF8A00] text-white' : 'text-[#FF8A00] bg-amber-100'} w-[30px] h-[30px] rounded-full text-center  flex items-center justify-center`}>
              {e.id + 1}
            </span>
            <p>{e.name}</p>
          </div>
          {e.id + 1 !== __BreadCrumb__.length && <Icon type="ri-arrow-right-s-line" />}
        </Fragment>
      ))}
    </div>
  );
};

export default Breadcrumb;
