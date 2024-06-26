import React from "react";

function Navbar() {
  return (
    <section className=" py-1 ">
      <nav className=" flex justify-between container-wrapper items-center">
        <div className=" flex items-center gap-1">
          <img src="images/logo2.png" alt="" className=" h-[120px]" />
          <h2 className="asul-bold text-xl sm:text-3xl text-[#ffffff]">Obama VS Trump</h2>
        </div>

        {/* <div>
          <a
            href="https://www.dextools.io/app/en/solana/pair-explorer/DUXstahu6oU1m39LgCmYh9QCSK7q2wrtKPEcv5iRwERD?t=1713463968983"
            target="_blank"
            className="bg-[#ad2450] rounded-full text-base sm:text-2xl py-2 px-6 font-bold asul-bold  border-2 border-black"
          >
            Buy Now
          </a>
        </div> */}
      </nav>
    </section>
  );
}

export default Navbar;
