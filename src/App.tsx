import React from "react";
import { useState } from "react";

function App() {
  const [paypalAmount, setPaypalAmount] = useState(0);
  const [tokenAmount, setTokenAmount] = useState(0);

  const handlePaypalAmount = (e: any) => {
    setPaypalAmount(e.target.value);
    setTokenAmount(e.target.value / 1.5);
  };

  const handleTokenAmount = (e: any) => {
    setPaypalAmount(e.target.value * 1.5);
    setTokenAmount(e.target.value);
  };

  return (
    <div className="text-xl">
      <div className="container mx-auto px-12 max-sm:px-6">
        <div className="flex flex-col justify-center items-center h-[100vh]">
          <div className="flex flex-col gap-4 w-full">
            <p className="text-2xl py-4">Buy Cyrpto Token using Paypal</p>
            <div className="flex justify-center items-center gap-4 w-full max-xl:flex-col">
              <p className="flex-[1_1_5%]   w-full">Your Wallet Address:</p>
              <input
                type="text"
                className="px-2 outline-none flex-[1_1_70%] border-black border-b-[1px] w-full"
                placeholder="Your Wallet Address"
              />
            </div>
            <div className="flex justify-center items-center gap-4 w-full max-xl:flex-col">
              <p className="flex-[1_1_5%]   w-full">Token Amount:</p>
              <input
                type="text"
                className="px-2 outline-none flex-[1_1_70%]  border-black border-b-[1px] w-full"
                placeholder="Token Amount"
                value={tokenAmount}
                onChange={handleTokenAmount}
              />
            </div>
            <div className="flex justify-center items-center gap-4 w-full max-xl:flex-col">
              <p className="flex-[1_1_5%]   w-full">Paypal Amount:</p>
              <input
                type="text"
                className="px-2 outline-none flex-[1_1_70%]  border-black border-b-[1px] w-full"
                placeholder="Paypal Amount"
                value={paypalAmount}
                onChange={handlePaypalAmount}
              />
            </div>
            <button>Pay Paypal</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
