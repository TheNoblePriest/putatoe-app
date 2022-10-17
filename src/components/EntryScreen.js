import React from "react";
import {
  ArrowLeftIcon,
  CurrencyRupeeIcon,
  GiftIcon,
  HomeModernIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

function EntryScreen() {
  return (
    <div className="w-full  flex-col flex  bg-blue-400">
      <div className="flex  p-3 h-20 ">
        <Link to="/">
          <ArrowLeftIcon className="w-8 h-8 text-white outline-none" />
        </Link>

        <h1 className="text-white text-3xl pl-5 font-thin">Putatoe Wallet</h1>
      </div>

      <div className="bg-gray-50 rounded-t-full w-full">
        <div className="w-full  -top-10 h-[180px] flex justify-center items-center ">
          <div className=" bg-blue-400 w-[80%] border shadow-white rounded-2xl shadow-xl h-[100%] space-y-2 flex justify-center items-start flex-col px-10 ">
            <div>
              <p className=" text-4xl font-sans text-white"> ₹ 999.9 </p>
              <p className=" text-sm text-white font-bold">Available Balance</p>
            </div>

            <div>
              <p className=" text-xl text-white flex items-center space-x-3">
                {" "}
                <GiftIcon className=" w-8 h-8 p-1" /> 199
              </p>
              <p className="text-sm font-semibold text-white">Reward Point</p>
            </div>
          </div>
        </div>
        <div className="  p-4 flex justify-center w-full items-center flex-col">
          <div className="bg-blue-400 p-2 rounded-xl">
            <p className=" text-[8px] font-bold text-white">
              1 Credits Coin = ₹1 can be redeemed on credits above ₹ 10,000
            </p>
            <p className=" text-[8px] font-bold text-white">
              100 points = 1 Putatoe Credits
            </p>
          </div>
        </div>
        <div className=" px-5">
          <div className=" flex justify-between px-6 border shadow-xl rounded-2xl ">
            <div className=" w-16 text-blue-600   rounded-2xl h-32 flex-col  flex justify-center items-center">
              <CurrencyRupeeIcon className="w-8 h-8" />
              <h1 className=" text-center text-xs font-bold pt-2">Add Money</h1>
            </div>
            <div className=" w-16 text-blue-600 rounded-2xl h-32 flex-col  flex justify-center items-center">
              <GiftIcon className="w-8 h-8" />
              <h1 className=" text-center text-xs font-bold pt-2">
                Redeem as Credits
              </h1>
            </div>
            <div className=" w-20 text-blue-600  rounded-2xl h-32 flex-col  flex justify-center items-center">
              <HomeModernIcon className="w-8 h-8" />
              <h1 className=" text-center text-xs font-bold pt-2">
                Send Money to bank
              </h1>
            </div>
          </div>
        </div>
        <div className="bg-white px-4 my-2 rounded-2xl mx-6 border">
          <h1 className=" p-4 text-3xl font-thin">Transactions</h1>
          <Transaction />
          <Transaction />
          <Transaction />
          <Transaction />
          <Transaction />
          <Transaction />
        </div>
      </div>
    </div>
  );
}

export default EntryScreen;

function Transaction() {
  return (
    <div className=" my-2 border border-gray-800 p-2 rounded-md shadow-md">
      <div className=" flex justify-between items-center">
        <div>
          <p className=" text-xs font-bold">Date & Day </p>
          <p className="text-sm">Sat, 06 Nov, 2021</p>
        </div>
        <div>
          <p className=" text-xs font-bold">Time</p>
          <p className="text-sm">05:55:06 GMT</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <p className=" text-xs font-bold">Amount</p>
          <p className="text-sm text-green-500">₹102.4</p>
        </div>
        <div>
          <p className=" text-xs font-bold">Transaction ID</p>
          <p className="text-sm">pay_IIDaf3f3fdhj</p>
        </div>
      </div>
    </div>
  );
}
