import React from "react";
import Button from "./Button";
import OrderFeed from "./OrderFeed";

const OderList = () => {
  return (
    <section className="flex flex-col px-10 w-full py-5">
      <div className="flex justify-between w-full">
        <div className="flex items-center flex-1 relative">
          <input
            type="text"
            placeholder="Search....."
            className="border border-gray-400 rounded-full px-5 py-2 w-[80%]"
          />
          <img
            src="search.svg"
            alt="search-logo"
            className="absolute right-[24%]"
            height={24}
            width={24}
          />
        </div>
        <div className="flex items-center flex-1 justify-end gap-10">
          <Button title={"Add item"} color="text-green-800" bgCol="bg-white" />
          <img src="print.svg" alt="logo" height={24} width={24} />
        </div>
      </div>
      <div className="border border-gray-300 mt-4 rounded-lg">
        <OrderFeed />
      </div>
    </section>
  );
};

export default OderList;
