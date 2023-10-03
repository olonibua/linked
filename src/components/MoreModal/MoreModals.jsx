import React, { useEffect, useState } from 'react'
import {BiInfoCircle} from 'react-icons/bi'
import { FaDollarSign } from 'react-icons/fa';
import {FaAws} from 'react-icons/fa'
import {AiFillDropboxSquare} from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io';
import {AiOutlineRise } from 'react-icons/ai'
import {PiHouse} from 'react-icons/pi'
import './Moremodals.css'

const MoreModals = ({width}) => {
  const [module, setModule] = useState();
  useEffect(() => {
    if (width > 900) {
      setModule(518);
    }else{
      setModule(418)
    }
  });
  return (
    <>
      <div className="grid grid-cols-1 mt-3 sm:hidden">
        <div
          className=" mx-auto w-[240px] drop-shadow-sm sm:w-[430px] sm:mx-3 border-2 rounded-md h-[245px] m-3"
        >
          <div className="flex justify-between pb-3 p-3 drop-shadow-none">
            <p className="items-center flex">
              Upcoming Bills <BiInfoCircle className="mt-1 mx-1" />
            </p>
            <p className="items-center">...</p>
          </div>
          <div className="flex justify-between border-t-2 p-3">
            <div>
              <p className="text-[13px] font-medium"> Total sum</p>
              <p className="flex font-semibold text-[17px]">
                <FaDollarSign className="mt-1 mx-[1px]" />
                9,070.00
              </p>
            </div>
            <button className="sm:h-10 sm:w-20 border-2 rounded-md">
              + Add bill
            </button>
          </div>
          <div className="flex text-[12px] p-2 over ">
            <div className="h-[100px] bg-slate-50 rounded-md p-3 text-center">
              <p>+</p>
              <p>Schedue Payments</p>
            </div>
            <div className="mx-2 h-[100px] min-w-[200px] border-2 rounded-md text-center">
              <div className="flex justify-between mt-2 p-2">
                <div className="flex">
                  <p className="text-[18px]">
                    <FaAws className="mt-[1px]" />
                  </p>
                  <p className=" mx-2">AWS</p>
                </div>
                <p>
                  <IoIosArrowForward />
                </p>
              </div>
              <div className="bg-slate-100 h-[52px] flex justify-between p-3 text-[12px] pt-4">
                <p className="font-bold">$160.00</p>
                <p>Jun 16, 2023</p>
              </div>
            </div>
            <div className="mx-2 h-[100px] min-w-[200px] border-2 rounded-md text-center">
              <div className="flex justify-between mt-2 p-2">
                <div className="flex">
                  <p className="text-[18px] text-blue-700">
                    <AiFillDropboxSquare className="mt-[1px]" />
                  </p>
                  <p className=" mx-2">Dropbox</p>
                </div>
                <p>
                  <IoIosArrowForward />
                </p>
              </div>
              <div className="bg-slate-100 h-[52px] flex justify-between p-3 text-[12px] pt-4">
                <p className="font-bold">$160.00</p>
                <p>Jun 16, 2023</p>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
        <div
          className="mx-auto w-[240px] drop-shadow-sm sm:w-[430px] border-2 rounded-md h-[245px] m-3"
        >
          <div className="flex justify-between pb-3 p-3 drop-shadow-none">
            <p className="items-center flex">
              Savings Goals <BiInfoCircle className="mt-1 mx-1" />
            </p>
            <p className="items-center">...</p>
          </div>
          <div className="flex justify-between border-t-2 p-3">
            <div>
              <p className="text-[13px] font-medium"> Total Balance</p>
              <p className="flex font-semibold text-[17px]">
                <FaDollarSign className="mt-1 mx-[1px]" />
                11,870.00
              </p>
            </div>
            <button className="sm:h-10 sm:w-20 border-2 rounded-md">
              + Add bill
            </button>
          </div>
          <div className="flex text-[12px] p-2 over ">
            <div className="h-[100px] w-[70px] bg-slate-50 rounded-md p-3 text-center">
              <p>+</p>
              <p>Schedue Payments</p>
            </div>

            <div className="mx-2 h-[100px] min-w-[200px] border-2 rounded-md text-center bg-slate-50">
              <div className=" h-[52px] text-center p-3 text-[12px] pt-4">
                <div className="text-[17px]">
                  <AiOutlineRise className="text-center w-10 mx-auto" />
                </div>
                <p className="font-bold my-2">Investment</p>
                <p>$7000/$10000</p>
              </div>
            </div>
            <div className="mx-2 h-[100px] min-w-[200px] border-2 rounded-md text-center bg-slate-50">
              <div className=" h-[52px] text-center p-3 text-[12px] pt-4">
                <div className="text-[17px]">
                  <PiHouse className="text-center w-10 mx-auto" />
                </div>
                <p className="font-bold my-2">Rent</p>
                <p>$1300/$12000</p>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
      {/* web version */}
      <div className="grid grid-cols-1 hidden sm:flex mt-3">
        <div
          style={{ width: `${module}px` }}
          className=" mx-auto w-[240px] drop-shadow-sm sm:w-[400px] sm:mx-3 border-2 rounded-md h-[245px] m-3"
        >
          <div className="flex justify-between pb-3 p-3 drop-shadow-none">
            <p className="items-center flex">
              Upcoming Bills <BiInfoCircle className="mt-1 mx-1" />
            </p>
            <p className="items-center">...</p>
          </div>
          <div className="flex justify-between border-t-2 p-3">
            <div>
              <p className="text-[13px] font-medium"> Total sum</p>
              <p className="flex font-semibold text-[17px]">
                <FaDollarSign className="mt-1 mx-[1px]" />
                9,070.00
              </p>
            </div>
            <button className="sm:h-10 sm:w-20 border-2 rounded-md">
              + Add bill
            </button>
          </div>
          <div className="flex text-[12px] p-2 over ">
            <div className="h-[100px] bg-slate-50 rounded-md p-3 text-center">
              <p>+</p>
              <p>Schedue Payments</p>
            </div>
            <div className="mx-2 h-[100px] min-w-[200px] border-2 rounded-md text-center">
              <div className="flex justify-between mt-2 p-2">
                <div className="flex">
                  <p className="text-[18px]">
                    <FaAws className="mt-[1px]" />
                  </p>
                  <p className=" mx-2">AWS</p>
                </div>
                <p>
                  <IoIosArrowForward />
                </p>
              </div>
              <div className="bg-slate-100 h-[52px] flex justify-between p-3 text-[12px] pt-4">
                <p className="font-bold">$160.00</p>
                <p>Jun 16, 2023</p>
              </div>
            </div>
            <div className="mx-2 h-[100px] min-w-[200px] border-2 rounded-md text-center">
              <div className="flex justify-between mt-2 p-2">
                <div className="flex">
                  <p className="text-[18px] text-blue-700">
                    <AiFillDropboxSquare className="mt-[1px]" />
                  </p>
                  <p className=" mx-2">Dropbox</p>
                </div>
                <p>
                  <IoIosArrowForward />
                </p>
              </div>
              <div className="bg-slate-100 h-[52px] flex justify-between p-3 text-[12px] pt-4">
                <p className="font-bold">$160.00</p>
                <p>Jun 16, 2023</p>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
        <div
          style={{ width: `${module}px` }}
          className="mx-auto w-[240px] drop-shadow-sm sm:w-[430px] border-2 rounded-md h-[245px] m-3"
        >
          <div className="flex justify-between pb-3 p-3 drop-shadow-none">
            <p className="items-center flex">
              Savings Goals <BiInfoCircle className="mt-1 mx-1" />
            </p>
            <p className="items-center">...</p>
          </div>
          <div className="flex justify-between border-t-2 p-3">
            <div>
              <p className="text-[13px] font-medium"> Total Balance</p>
              <p className="flex font-semibold text-[17px]">
                <FaDollarSign className="mt-1 mx-[1px]" />
                11,870.00
              </p>
            </div>
            <button className="sm:h-10 sm:w-20 border-2 rounded-md">
              + Add bill
            </button>
          </div>
          <div className="flex text-[12px] p-2 over ">
            <div className="h-[100px] w-[70px] bg-slate-50 rounded-md p-3 text-center">
              <p>+</p>
              <p>Schedue Payments</p>
            </div>

            <div className="mx-2 h-[100px] min-w-[200px] border-2 rounded-md text-center bg-slate-50">
              <div className=" h-[52px] text-center p-3 text-[12px] pt-4">
                <div className="text-[17px]">
                  <AiOutlineRise className="text-center w-10 mx-auto" />
                </div>
                <p className="font-bold my-2">Investment</p>
                <p>$7000/$10000</p>
              </div>
            </div>
            <div className="mx-2 h-[100px] min-w-[200px] border-2 rounded-md text-center bg-slate-50">
              <div className=" h-[52px] text-center p-3 text-[12px] pt-4">
                <div className="text-[17px]">
                  <PiHouse className="text-center w-10 mx-auto" />
                </div>
                <p className="font-bold my-2">Rent</p>
                <p>$1300/$12000</p>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </>
  );
}

export default MoreModals
