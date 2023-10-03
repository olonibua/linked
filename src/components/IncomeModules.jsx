import React, { useEffect, useState } from 'react'
import { AiOutlineDollarCircle } from 'react-icons/ai';
import {LiaLongArrowAltUpSolid} from 'react-icons/lia'
import {IoIosArrowForward} from 'react-icons/io'

const IncomeModules = ({width}) => {
  const [module, setModule] = useState()
   useEffect(() => {
    if(width > 900) {
      setModule(334)
    }else{
      setModule(267)
    }
   })
  return (
    <div className="relative ">
      <div
        style={{ width: `${width}px` }}
        className="grid md:flex  sm:w-[450px] w-[270px] mt-3"
      >
        <div style={{width: `${module}px`}} className="mx-auto rounded-lg drop-shadow-sm border-2 mt-5 md:w-[265px] sm:mx-3">
          <div className="flex justify-between p-3">
            <div className="flex">
              <p className="bg-green-100 p-[1px] rounded-md border-green-500 text-center border-[1px]">
                <AiOutlineDollarCircle className="mt-[2px] mx-1 " />
              </p>
              <p className="mx-1 font-semibold">Total Income:</p>
            </div>
            <p>
              <IoIosArrowForward />
            </p>
          </div>
          <div className="border-t-2 p-2">
            <h2 className="font-bold">$123,500.00</h2>
            <div className="flex my-[3px]">
              <p className="bg-green-100 w-[70px] rounded-md text-center flex">
                <LiaLongArrowAltUpSolid className="mt-1" />
                2.13%
              </p>
              <p className="mx-2 text-[13px] text-slate-5">From last month</p>
            </div>
          </div>
        </div>
        <div style={{width: `${module}px`}} className="mx-auto rounded-lg drop-shadow-sm border-2 mt-5 md:w-[265px] sm:mx-3">
          <div className="flex justify-between p-3">
            <div className="flex">
              <p className="bg-red-50 p-[1px] rounded-md border-red-400 text-center border-[1px]">
                <AiOutlineDollarCircle className="mt-[2px] mx-1 " />
              </p>
              <p className="mx-1 font-semibold">Total Expenses:</p>
            </div>
            <p>
              <IoIosArrowForward />
            </p>
          </div>
          <div className="border-t-2 p-2">
            <h2 className="font-bold">$71,304.00</h2>
            <div className="flex my-[3px]">
              <p className="bg-green-100 w-[70px] rounded-md text-center flex">
                <LiaLongArrowAltUpSolid className="mt-1" />
                2.13%
              </p>
              <p className="mx-2 text-[13px] text-slate-5">From last month</p>
            </div>
          </div>
        </div>
        <div style={{width: `${module}px`}} className="mx-auto rounded-lg drop-shadow-sm border-2 mt-5 md:w-[265px] sm:mx-3">
          <div className="flex justify-between p-3">
            <div className="flex">
              <p className="bg-purple-50 p-[1px] rounded-md border-purple-400 text-center border-[1px]">
                <AiOutlineDollarCircle className="mt-[2px] mx-1 " />
              </p>
              <p className="mx-1 font-semibold">Total Savings:</p>
            </div>
            <p>
              <IoIosArrowForward />
            </p>
          </div>
          <div className="border-t-2 p-2">
            <h2 className="font-bold">$52,196.00</h2>
            <div className="flex my-[3px]">
              <p className="bg-green-100 w-[70px] rounded-md text-center flex">
                <LiaLongArrowAltUpSolid className="mt-1" />
                2.13%
              </p>
              <p className="mx-2 text-[13px] text-slate-5">From last month</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IncomeModules
