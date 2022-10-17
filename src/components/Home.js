import React from "react";
import {
  MapPinIcon,
  MicrophoneIcon,
  ShoppingCartIcon,
  MagnifyingGlassIcon,
  LightBulbIcon,
  DevicePhoneMobileIcon,
  TvIcon,
  CurrencyDollarIcon,
  NewspaperIcon,
  CurrencyRupeeIcon,
  SpeakerWaveIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="w-full  bg-blue-500   ">
      <div className="flex justify-between space-x-3 px-3 py-1 items-center">
        <div>
          <h1 className=" text-4xl text-white font-thin">PUTATOE</h1>
        </div>
        <div className="flex justify-center space-x-4 items-center">
          <MapPinIcon className=" text-white w-7 h-7" />
          <ShoppingCartIcon className=" text-white w-7 h-7" />
        </div>
      </div>

      <div className=" flex justify-center my-3 border-b-2 pb-4   px-3 space-x-2 items-center">
        <div className="flex-1 rounded-full flex justify-center items-center bg-white space-x-3  p-2">
          <MagnifyingGlassIcon className=" w-6 h-6" />
          <input
            type="text"
            placeholder=" search product here"
            className=" w-full placeholder-gray-500  outline-none "
          />
        </div>
        <MicrophoneIcon className=" text-gray-100 w-8 h-8" />
      </div>

      <div className=" p-2  flex justify-center  items-center">
        <div className=" h-32 w-full space-x-6  flex justify-center items-center rounded-xl  bg-white">
          <img src="image/logo.png" className=" w-28" alt="" />
          <div>
            <h1 className=" text-sm font-mono">Lets Check Your Balance</h1>
            <Link to="/wallet">
              <button className=" mt-2 text-sm outline-none bg-blue-500 rounded-xl text-white p-2">
                Check Wallet
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="rounded-xl p-3 flex flex-col mx-2 items-center  justify-center  flex-1 bg-white mt-2">
        <div className=" grid grid-cols-4 space-x-3 ">
          <div className=" flex-col w-20 hover:bg-gray-100 rounded-2xl h-28 flex justify-center items-center">
            <DevicePhoneMobileIcon className=" w-10 h-10" />
            <h1 className=" text-center text-xs font-bold pt-2">
              Mobile Recharge
            </h1>
          </div>
          <div className=" w-20 hover:bg-gray-100 rounded-2xl h-28 flex-col flex justify-center items-center">
            <LightBulbIcon className=" w-10 h-10" />
            <h1 className=" text-center text-xs font-bold pt-2">Electricity</h1>
          </div>
          <div className=" w-20 hover:bg-gray-100 rounded-2xl h-28 flex-col  flex justify-center items-center">
            <TvIcon className=" w-10 h-10" />
            <h1 className=" text-center text-xs font-bold pt-2">Dish HD+</h1>
          </div>
          <div className=" w-20 hover:bg-gray-100 rounded-2xl h-28 flex-col  flex justify-center items-center">
            <CurrencyDollarIcon className=" w-10 h-10" />
            <h1 className=" text-center text-xs font-bold pt-2">Loan</h1>
          </div>
        </div>
        <div className=" grid grid-cols-4 space-x-3 ">
          <div className=" w-20 hover:bg-gray-100 rounded-2xl h-28 flex-col  flex justify-center items-center">
            <NewspaperIcon className=" w-10 h-10" />
            <h1 className=" text-center text-xs font-bold pt-2">News</h1>
          </div>
          <div className=" w-20 hover:bg-gray-100 rounded-2xl h-28 flex-col  flex justify-center items-center">
            <CurrencyRupeeIcon className=" w-10 h-10" />
            <h1 className=" text-center text-xs font-bold pt-2">Rewards</h1>
          </div>
          <div className=" w-20 hover:bg-gray-100 rounded-2xl h-28 flex-col  flex justify-center items-center">
            <RectangleStackIcon className=" w-10 h-10" />
            <h1 className=" text-center text-xs font-bold pt-2">Bills</h1>
          </div>
          <div className=" w-20 hover:bg-gray-100 rounded-2xl h-28 flex-col  flex justify-center items-center">
            <SpeakerWaveIcon className=" w-10 h-10" />
            <h1 className=" text-center text-xs font-bold pt-2">
              Paid Promotion
            </h1>
          </div>
        </div>
      </div>
      <h1 className=" p-3 font-thin text-white  text-2xl">
        Product Recommendation
      </h1>
      <div className="p-2 space-y-4">
        <div className=" grid grid-cols-4 space-x-3 ">
          <Product img="image/lighter.jpeg" name={"Lighter"} />
          <Product img="image/download.jpeg" name={"Wine"} />
          <Product img="image/shoe.jpeg" name={"Shoe"} />
          <Product img="image/ima.jpeg" name={"Lighter"} />
        </div>
        <div className=" grid grid-cols-4 space-x-3 ">
          <Product img="image/lighter.jpeg" name={"Lighter"} />
          <Product img="image/download.jpeg" name={"Wine"} />
          <Product img="image/shoe.jpeg" name={"Shoe"} />
          <Product img="image/ima.jpeg" name={"Lighter"} />
        </div>
      </div>
    </div>
  );
}

export default Home;

function Product({ img, name }) {
  return (
    <div className="flex justify-center items-center bg-white rounded-xl ">
      <div className=" w-20  rounded-2xl h-32 flex-col  flex justify-center items-center">
        <img src={img} className=" w-16 h-12" alt="" />
        <h1 className=" text-center text-xs font-bold pt-2">{name}</h1>
      </div>
    </div>
  );
}
