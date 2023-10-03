import React, { useState } from 'react'
import {IoPodiumOutline } from 'react-icons/io5'
import {GiWallet} from 'react-icons/gi'
import {TbExchange} from 'react-icons/tb'
import {FiSettings} from 'react-icons/fi'
import { IoIosArrowUp, IoIosArrowDown, IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Dashboard = ({ width, toggleWidth }) => {
  const [open, setOpen] = useState({
    dashboard: false,
    legal: false,
    preferences: false,
    support: false,
  });

  const handleOpen = (name) => {
    setOpen((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };
  const [ToggleMargin, setToggleMargin] = useState(230);

  const handleToggleSwitch = () => {
    if(ToggleMargin == 230){
              setToggleMargin(10);
    }else{
              setToggleMargin(230);
    }
    toggleWidth()
  }
  return (
    <div
      style={{ width: `${width}px`, overflow: "hidden" }}
      className="border-r-2 h-full"
    >
      <div>
        <div style={{ width: `${width}px`, }}>
          <h1 className="font-bold max-w-[190px] mx-auto mt-2">Catalog</h1>
        </div>
        <button
          style={{
            marginLeft: `${ToggleMargin}px`,
            transition: "width 1s ease",
          }}
          className="border-2 scroll-smooth rounded-full text-center align-middle drop-shadow-md absolute bg-white mt-[11px]"
          onClick={handleToggleSwitch}
        >
          <IoIosArrowBack />
        </button>

        <div className="mt-10">
          <div className="flex justify-between drop-shadow-sm pb-3 mx-auto mb-2 border-b-2 font-semibold mt-6 max-w-[190px] ">
            <p className="text-[13px] drop-shadow-none">DASHBOARD</p>
            <button onClick={() => handleOpen("dashboard")}>
              {open.dashboard ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
          </div>
          {open.dashboard && (
            <div className="max-w-[190px] mx-auto">
              <h2 className="text-[14px] my-1 font-semibold flex pt-1 h-7 hover:bg-blue-100  text-center rounded-md hover:text-blue-700 cursor-pointer">
                <IoPodiumOutline className="mt-1 mx-2" /> Overview
              </h2>
              <h2 className="text-[14px] my-1 font-semibold flex pt-1 h-7 hover:bg-blue-100  text-center rounded-md hover:text-blue-700 cursor-pointer">
                <GiWallet className="mt-1 mx-2" />
                Wallet
              </h2>
              <h2 className="text-[14px] my-1 font-semibold flex pt-1 h-7 hover:bg-blue-100  text-center rounded-md hover:text-blue-700 cursor-pointer">
                <TbExchange className="mt-1 mx-2" />
                Transactions
              </h2>
              <h2 className="text-[14px] my-1 font-semibold flex pt-1 h-7 hover:bg-blue-100  text-center rounded-md hover:text-blue-700 cursor-pointer">
                <FiSettings className="mt-1 mx-2" />
                Settings
              </h2>
            </div>
          )}
        </div>
        <div>
          <div className="flex justify-between drop-shadow-sm pb-3 mx-auto mb-2 border-b-2 font-semibold mt-6 max-w-[190px] ">
            <p className="text-[13px] drop-shadow-none">LEGAL</p>
            <button onClick={() => handleOpen("legal")}>
              {open.legal ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
          </div>
          {open.legal && (
            <div className="max-w-[190px] mx-auto">
              <h2 className="text-[14px] my-1 font-semibold flex pt-1 h-7 hover:bg-blue-100  text-center rounded-md hover:text-blue-700 cursor-pointer">
                <IoPodiumOutline className="mt-1 mx-2" /> Overview
              </h2>
              <h2 className="text-[14px] my-1 font-semibold flex pt-1 h-7 hover:bg-blue-100  text-center rounded-md hover:text-blue-700 cursor-pointer">
                <GiWallet className="mt-1 mx-2" />
                Wallet
              </h2>
              <h2 className="text-[14px] my-1 font-semibold flex pt-1 h-7 hover:bg-blue-100  text-center rounded-md hover:text-blue-700 cursor-pointer">
                <TbExchange className="mt-1 mx-2" />
                Transactions
              </h2>
              <h2 className="text-[14px] my-1 font-semibold flex pt-1 h-7 hover:bg-blue-100  text-center rounded-md hover:text-blue-700 cursor-pointer">
                <FiSettings className="mt-1 mx-2" />
                Settings
              </h2>
            </div>
          )}
        </div>
        <div>
          <div className="flex justify-between drop-shadow-sm pb-3 mx-auto mb-2 border-b-2 font-semibold mt-6 max-w-[190px] ">
            <p className="text-[13px] drop-shadow-none">REFERENCES</p>
            <button onClick={() => handleOpen("preferences")}>
              {open.preferences ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
          </div>
          {open.preferences && (
            <div className="max-w-[190px] mx-auto">
              <h2 className="text-[14px] my-1 font-semibold flex pt-1 h-7 hover:bg-blue-100  text-center rounded-md hover:text-blue-700 cursor-pointer">
                <IoPodiumOutline className="mt-1 mx-2" /> Overview
              </h2>
              <h2 className="text-[14px] my-1 font-semibold flex pt-1 h-7 hover:bg-blue-100  text-center rounded-md hover:text-blue-700 cursor-pointer">
                <GiWallet className="mt-1 mx-2" />
                Wallet
              </h2>
              <h2 className="text-[14px] my-1 font-semibold flex pt-1 h-7 hover:bg-blue-100  text-center rounded-md hover:text-blue-700 cursor-pointer">
                <TbExchange className="mt-1 mx-2" />
                Transactions
              </h2>
              <h2 className="text-[14px] my-1 font-semibold flex pt-1 h-7 hover:bg-blue-100  text-center rounded-md hover:text-blue-700 cursor-pointer">
                <FiSettings className="mt-1 mx-2" />
                Settings
              </h2>
            </div>
          )}
        </div>
        <div>
          <div className="flex justify-between drop-shadow-sm pb-3 mx-auto mb-2 border-b-2 font-semibold mt-6 max-w-[190px] ">
            <p className="text-[13px] drop-shadow-none">SUPPORT</p>
            <button onClick={() => handleOpen("support")}>
              {open.support ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
          </div>
          {open.support && (
            <div className="max-w-[190px] mx-auto">
              <h2 className="text-[14px] my-1 font-semibold flex pt-1 h-7 hover:bg-blue-100  text-center rounded-md hover:text-blue-700 cursor-pointer">
                <IoPodiumOutline className="mt-1 mx-2" /> Overview
              </h2>
              <h2 className="text-[14px] my-1 font-semibold flex pt-1 h-7 hover:bg-blue-100  text-center rounded-md hover:text-blue-700 cursor-pointer">
                <GiWallet className="mt-1 mx-2" />
                Wallet
              </h2>
              <h2 className="text-[14px] my-1 font-semibold flex pt-1 h-7 hover:bg-blue-100  text-center rounded-md hover:text-blue-700 cursor-pointer">
                <TbExchange className="mt-1 mx-2" />
                Transactions
              </h2>
              <h2 className="text-[14px] my-1 font-semibold flex pt-1 h-7 hover:bg-blue-100  text-center rounded-md hover:text-blue-700 cursor-pointer">
                <FiSettings className="mt-1 mx-2" />
                Settings
              </h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard
