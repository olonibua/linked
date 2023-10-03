import React, { useEffect, useState } from 'react'
import IncomeModules from './IncomeModules';
import MoreModals from './MoreModal/MoreModals';
import TransactionSummary from './TransactionSummary';
import Head from './Head';
import { GrAppsRounded } from 'react-icons/gr'
import {RxSlash} from 'react-icons/rx'
import { RiBitCoinLine } from 'react-icons/ri'
import {AiOutlineDollarCircle} from 'react-icons/ai'
import {FaDollarSign} from 'react-icons/fa'

const Mainbody = ({ width, toggleWidth, margin}) => {

  return (
    <>
      <div className="w-[280px] sm:hidden mx-auto p-2">
        <Head />
        <div>
          <div className=" border-b-2 p-2 flex ">
            <p className="hidden sm:flex mt-1">
              <GrAppsRounded /> <RxSlash />
            </p>
            <h2 className="sm:bg-blue-200 rounded-md font-semibold text-[12px] p-1 sm:mx-[6px]">
              Wallet
            </h2>
          </div>
          <div className="sm:flex border-b-2 justify-between">
            <div className="p-3 sm:p-4">
              <p className="flex text-[11px] justify-center sm:text-[15px] ">
                Total Balance
              </p>
              <p className="font-bold flex justify-center sm:text-[18px]">
                <FaDollarSign className="mt-1 mx-[1px]" />
                52,196.90
              </p>
            </div>
            <div className="sm:mt-3 sm:border-none border-b-2 pb-4 flex sm:p-2">
              <button className="text-center bg-blue-600 mx-3 flex justify-center rounded-md p-2 text-white  sm:h-min w-[130px]">
                <RiBitCoinLine className="mt-1 mx-1" />
                <p>Deposit</p>
              </button>
              <button className="bg-white rounded-md flex p-2 justify-center text-blue-800 border-2 w-[130px]  sm:h-min">
                <RiBitCoinLine className="mt-1 mx-1" />
                Withdraw
              </button>
            </div>
          </div>
        </div>
        <IncomeModules />
        <MoreModals />
        <TransactionSummary />
      </div>
      {/* web view */}

      <div
        style={{
          width: `${width}px`,
          marginLeft: `${margin}px`,
          // transition: "width 0.2s ease-in-out",
        }}
        className=" hidden sm:block p-2"
      >
        <Head toggleWidth={toggleWidth} />
        <div className="sm:pl-6 overflow-hidden">
          <div className=" border-b-2 p-2 flex h-[55px] my-auto">
            <p className="hidden sm:flex mt-2">
              <GrAppsRounded /> <RxSlash className="mx-2" />
            </p>
            <h2 className="sm:bg-blue-200 mt-1 rounded-md h-7 font-semibold text-[12px] p-1 sm:mx-[3px]">
              Wallet
            </h2>
          </div>

          <div className="sm:flex border-b-2 justify-between">
            <div className="p-3 sm:p-4">
              <p className="flex text-[11px] justify-center sm:text-[15px] ">
                Total Balance
              </p>
              <p className="font-bold flex justify-center sm:text-[18px]">
                <FaDollarSign className="mt-1 mx-[1px]" />
                52,196.90
              </p>
            </div>
            <div className="sm:mt-3 sm:border-none border-b-2 pb-4 flex sm:p-2">
              <button className="text-center bg-blue-600 mx-3 flex justify-center rounded-md p-2 text-white  sm:h-min w-[130px]">
                <RiBitCoinLine className="mt-1 mx-1" />
                <p>Deposit</p>
              </button>
              <button className="bg-white rounded-md flex p-2 justify-center text-blue-800 border-2 w-[130px]  sm:h-min">
                <RiBitCoinLine className="mt-1 mx-1" />
                Withdraw
              </button>
            </div>
          </div>

          <IncomeModules width={width} />
          <MoreModals width={width} />
          <TransactionSummary width={width} />
        </div>
      </div>
    </>
  );
};

export default Mainbody

