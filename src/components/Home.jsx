import React from 'react'
import Head from './Head'
import Body from './Body';

const Home = () => {
  return (
    <div className="shadow-black w-[320px] border-[9px] sm:border-[15px] border-[#cadcf856] p-3 bg-white sm:w-[500px] md:w-[1200px] mx-auto rounded-[24px]">
      <div>
        <Body />
      </div>
    </div>
  );
}

export default Home
