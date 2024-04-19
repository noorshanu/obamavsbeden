import React from "react";
import { FaTelegram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
function Hero() {
  return (
    <section className=" h-[33vh]  sm:h-[100vh] ">
      <div className=" container-wrapper">
        <div className=" flex flex-col justify-center items-center pt-[10rem] sm:pt-[33%]  rounded-3xl">
        
          {/* <img
            src="images/logo.png"
            alt=""
            className=" rounded-full h-[350px] mb-4"
          /> */}

          <div className="bg-[#ad2450]  rounded-full py-2 px-4 my-3">
            <a
              href="https://solscan.io/token/2jyRoWtWtTFZx8XY3zrvdqB1uV1MEbiwuyWtFaegS1yX"
              target="_blank"
              className="asul-bold text-xs sm:text-2xl"
            >
           2jyRoWtWtTFZx8XY3zrvdqB1uV1MEbiwuyWtFaegS1yX
            </a>
          </div>

          <div className="flex justify-center gap-4 items-center">
            <a
              href="https://www.dextools.io/app/en/solana/pair-explorer/43zdpWU64z1VUbxTMRQdY9tG6srTcaPVTWDJQYCQbZyR?t=1713505406512"
              target="_blank"
              className="bg-[#ad2450]  rounded-full text-lg sm:text-2xl py-2 px-6 font-bold asul-bold  border-2 border-black"
            >
              DEXTOOLS
            </a>

            <div className=" flex justify-center gap-4 items-center">
              <a
                href="https://t.me/obamavst"
                target="_blank"
                className=" text-5xl "
              >
                <FaTelegram />
              </a>

              <a
                href="http://twitter.com/obama_vs_trump1"
                target="_blank"
                className=" text-5xl"
              >
                <FaSquareXTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
