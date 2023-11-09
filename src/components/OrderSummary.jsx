import React from "react";
import OderList from "./OderList";
import { ORDER_DETAILS } from "../constants";

const OrderSummary = () => {
  return (
    <section className="max-container padding-container mt-8">
      <div className="border border-gray-300 flex rounded-lg bg-white">
        <ul className="flex flexBetween flex-1 divide-x divide-gray-300">
          {ORDER_DETAILS.map((item) => (
            <div
              key={item.key}
              className="flex flex-col flex-1 px-2 gap-2 justify-center items-center"
            >
              <h4 className="text-gray-500 font-semibold text-center w-full">
                {item.label}
              </h4>
              <h3 className="text-center font-bold flex-wrap">{item.value}</h3>
            </div>
          ))}
        </ul>
      </div>
      <div className="border border-gray-300 rounded-lg mt-5 bg-white mb-10">
        <OderList />
      </div>
    </section>
  );
};

export default OrderSummary;
