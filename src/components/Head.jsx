import React from 'react'
import { BsBell } from 'react-icons/bs'
import { GrAppsRounded } from 'react-icons/gr'
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io'
import { RxAvatar } from 'react-icons/rx'
import me from '../img/me.jpeg'

const Head = ({ toggleWidth }) => {
  return (
    <div className="mx-auto pb-3 border-b-2 scroll-smooth">
      <div className="sm:hidden">
        <div className="flex justify-between">
          <div className="flex">
            <p className="mx-1 font-bold text-blue-800">Catalog</p>
          </div>
          <div className="flex text-center justify-center content-center">
            <ol className="mx-1 rounded-full">
              <img
                src={me}
                alt="proflie"
                className="mx-1 rounded-full h-5 w-5"
              />
              {/* <RxAvatar className="mt-[2px] h-[18px] w-[18px]" /> */}
            </ol>
            <ol className="mx-3">
              <BsBell className="mt-[2px]" />
            </ol>
            <ol>
              <GrAppsRounded className="mt-[2px]" />
            </ol>
          </div>
        </div>
      </div>

      {/* web view */}

      <div className="hidden sm:block h-[30px]">
        <div className="flex justify-between">
          <div className="flex">
            <p className="mx-3 font-bold text-[#29547c]">Wallet</p>
          </div>
          <div className="flex text-center justify-center content-center">
            <ol className="mx-1">
              <img
                src={me}
                alt="proflie"
                className="mx-1 rounded-full h-6 w-6"
              />

              {/* <RxAvatar className="mt-[3px] h-6 w-6" /> */}
            </ol>
            <ol className="mx-1 font-medium">Tolulope Olonibua</ol>
            <ol className=" mx-3">
              <IoIosArrowDown className="mt-[2px]" />
            </ol>
            <ol className="border-r-2"></ol>
            <ol className="mx-3">
              <BsBell className="mt-[2px]" />
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head
