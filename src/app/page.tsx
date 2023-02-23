"use client";
import React, {  useEffect, useMemo } from "react";
import Icon from "./component/Icon";
import StageOne from "./component/StageOne";
import StageThree from "./component/StageThree";
import StageTwo from "./component/StageTwo";
import useInfo from "@/store/useInfo";
import Asside from "./component/Asside";
import Breadcrumb from "./component/Breadcrumb";
const page = () => {

  const {data} = useInfo((state) => state)

  useEffect(()=>{
    console.log(data)
  },[data])
  const sectionTitle = useMemo(() => {
    if (data.step === 0)
      return <StageOne/>
    if(data.step === 1)
      return <StageTwo/>
    return <StageThree/>

  }, [data.step]);
  return (
    <div className=" bg-[#FFFAE6] w-full py-12 h-screen ">
      <div className="container mx-auto bg-white h-full flex flex-col rounded shadow-xl px-6 relative">
        
     <Breadcrumb/>
        <button className="flex pt-8 space-x-2  outline-none">
          <Icon type="ri-arrow-left-line" />
          <p>Back to cart</p>
        </button>
        <div className="flex  mt-6 h-full">
        {sectionTitle}
          <Asside/>
        </div>
      </div>
    </div>
  );
};

export default page;
