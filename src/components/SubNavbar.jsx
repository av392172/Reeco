import React from "react";
import Button from "./Button";

export const SubNavbar = () => {
  return (
    <section className="border-2 shadow-md flex flex-col max-container padding-container gap-5 py-4 bg-white">
      <div className="flex space-x-4">
        <p className="text-gray-30 font-light text-sm">Orders</p>
        <p className="text-gray-30 font-light text-sm">{`>`}</p>
        <p className="underline text-gray-30 font-light text-sm">
          Order 32457ABC
        </p>
      </div>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Order 32457ABC</h1>
        <div className="flex space-x-5">
          <Button title={"Back"} color="text-green-800" bgCol="bg-white" />
          <Button
            title={"Approve order"}
            bgCol="bg-green-800"
            color="text-white"
          />
        </div>
      </div>
    </section>
  );
};
