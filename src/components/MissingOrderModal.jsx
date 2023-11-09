import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateStatus } from "../redux/orderSlice";

export const MissingOrderModal = ({ setModal }) => {
  const dispatch = useDispatch();
  const windowHeight = useRef(window.innerHeight);
  const height = `h-[${windowHeight.current}px]`;
  console.log("test", height);
  const { orders, selectedOrder } = useSelector((state) => state.order);
  //   console.log("inside modal", orders, selectedOrder);
  const handleMissingOrder = (status) => {
    setModal(false);
    dispatch(
      updateStatus({
        id: selectedOrder.id,
        status,
      })
    );
  };
  return (
    <div className="flex flex-col shadow-2xl shadow-gray-800 gap-5 z-20 w-[350px] h-[200px] px-5 py-2 rounded-lg border border-gray-300 bg-white fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <div className="flex items-center justify-between py-4">
        <h4 className="text-lg font-bold">Missing product</h4>
        <div onClick={() => setModal(false)} className="cursor-pointer">
          <img src="wrong.svg" alt="wrong" width={30} height={30} />
        </div>
      </div>
      <div>
        <p className="font-medium text-sm">
          {`Is '${selectedOrder.Product_Name.slice(0, 25)}...' urgent?`}
        </p>
      </div>
      <div className="flex items-center gap-6 justify-end p-2">
        <button
          className="font-bold"
          onClick={() => handleMissingOrder("Missing")}
        >
          No
        </button>
        <button
          className="font-bold"
          onClick={() => handleMissingOrder("Missing - Urgent")}
        >
          Yes
        </button>
      </div>
    </div>
  );
};
