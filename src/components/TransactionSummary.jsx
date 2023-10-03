import React, { useEffect, useState } from 'react'

const TransactionSummary = ({width}) => {
  const screenWidth = window.innerWidth

  const [tranWidth, setTranWidth] = useState()

  useEffect(() => {
    if (width > 900) {
      setTranWidth(1070);
    } else {
      setTranWidth(870);
    }
  })
  return (
    <>
      <div className='sm:hidden'>
        <div className="rounded-lg border-2 p-3 m-3 h-[100px] justify-between mt-5">
          <div className="flex justify-between">
            <h2 className="font-semibold">Transaction Summary</h2>
            <div className="bg-slate-100 rounded-md p-[2px]">
              <button className="mx-2 font-bold ">TX</button>
              <button className="mx-2 font-bold ">TX</button>
              <button className="mx-2 font-bold ">TX</button>
              <button className="mx-2 font-bold ">TX</button>
            </div>
          </div>
        </div>
      </div>
      {/* web  */}
      <div style={{ width: `${tranWidth}px` }}>
        <div className="rounded-lg hidden sm:block border-2 p-3 m-3 h-[100px] justify-between mt-5">
          <div className="flex justify-between">
            <h2 className="font-semibold">Transaction Summary</h2>
            <div className="bg-slate-100 rounded-md p-[2px]">
              <button className="mx-2 font-bold ">TX</button>
              <button className="mx-2 font-bold ">TX</button>
              <button className="mx-2 font-bold ">TX</button>
              <button className="mx-2 font-bold ">TX</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TransactionSummary
