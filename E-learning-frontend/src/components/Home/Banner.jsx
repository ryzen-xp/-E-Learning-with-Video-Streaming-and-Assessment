import React from "react";
//import banner from "../../public/E.jpg";
const banner = "/E.jpg";

function Banner() {
  return (
    <>
      <div className=" max-w-screen-2xl  container mx-auto px-20 md:px-20 sm:px-4 flex flex-col md:flex-row  min-h-screen">
        <div className="w-full order-2 px-10 md:order-1 md:w-1/2 mt-12 md:mt-36 max-h-screen">
          <div className="space-y-8 ">
            <h1 className="text-2xl md:text-5xl font-bold text-white">
              Hello, welcomes here to learn something{" "}
              <span className="text-pink-500">new everyday!!!</span>
            </h1>
            <p className="text-xl sm:text-2xl  text-gray-300 md:text-3xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              et totam. Tempora amet atque expedita, quae corrupti totam sed
              pariatur corporis at veniam est voluptas animi!
            </p>

            <label className="flex items-center gap-2 border-2 border-gray-500  rounded-md p-2 ">
            <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 16 16"
  fill="currentColor"
  className="w-8 h-10 text-white opacity-70"
>
  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
</svg>

  <input
    type="text"
    className="grow h-10  font-semibold text-sm text-gray-300 md:text-xl placeholder-slate-400 focus:outline-none focus:ring-0 bg-inherit"
    placeholder="Email"
  />
</label>

          </div>
          <button  className="border  text-xl bg-pink-400 hover:bg-pink-500 text-black font-bold py-4 px-6 rounded transition duration-300 mt-6 ">Get Started</button>
        </div>
        <div className=" order-1 w-full mt-20 md:w-1/2 max-h-screen" >
          <img
            src={banner}
            className=" px-10  md:w-[350] md:h-[400px] md:ml-12"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
