import React, { useEffect, useState } from "react";
import { ORDERS_LIST } from "../constants";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  updateStatus,
  addOrders,
  updateSelectedOrder,
} from "../redux/orderSlice";
import { TickIcon, WrongIcon } from "../constants/icons";
import { MissingOrderModal } from "./MissingOrderModal";

const OrderFeed = () => {
  const dispatch = useDispatch();
  const allOrders = useSelector((state) => state.order.orders);
  const [modal, setModal] = useState(false);

  const handleMissingProduct = (id) => {
    setModal(true);
    const order = allOrders.filter((item) => item.id === id);
    dispatch(updateSelectedOrder(order[0]));
  };
  const handleApprove = (id) => {
    dispatch(
      updateStatus({
        id,
        status: "Approved",
      })
    );
  };
  const Order = ({ item }) => {
    const variant =
      item.Status === "Approved"
        ? "bg-green-50 text-white"
        : item.Status === "Missing - Urgent"
        ? "bg-red-600 text-white"
        : item.Status === "Missing"
        ? "bg-orange-400 text-white"
        : "";

    const iconColor =
      item.Status === "Approved"
        ? "#008000"
        : item.Status === "Missing - Urgent"
        ? "#FF0000"
        : item.Status === "Missing"
        ? "#FFA500"
        : "#808080";

    console.log("vaariant", variant);
    return (
      <tr key={item.id} className="border-b dark:border-neutral-500">
        <td className="px-6 py-2 font-medium">
          <img
            src={item.img}
            alt="avocado"
            height={30}
            width={30}
            className="object-contain"
          />
        </td>
        <td className="px-6 py-2 font-medium">{item.Product_Name}</td>
        <td className="px-6 py-2 font-medium">{item.Brand}</td>
        <td className="px-6 py-2 font-medium">{item.Price}</td>
        <td className="px-6 py-2 font-medium">{item.Quantity}</td>
        <td className="px-6 py-2 font-medium">{item.Total}</td>
        <td className="whitespace-nowrap text-center">
          {item.Status.length ? (
            <div className={`border ${variant} px-2 py-1 rounded-full`}>
              {item.Status}
            </div>
          ) : (
            item.Status
          )}
        </td>
        <td
          className="px-6 py-2 font-medium h-[75px] w-[75px] cursor-pointer"
          onClick={() => handleApprove(item.id)}
        >
          <TickIcon fill={item.Status === "Approved" ? "#008000" : "#808080"} />
        </td>
        <td
          className="px-6 py-2 font-medium h-[80px] w-[80px] cursor-pointer"
          onClick={() => handleMissingProduct(item.id)}
        >
          <WrongIcon fill={iconColor} />
        </td>
        <td className="px-6 py-4 font-medium">
          <button>Edit</button>
        </td>
      </tr>
    );
  };
  useEffect(() => {
    dispatch(addOrders(ORDERS_LIST));
  }, []);
  const headings = Object.keys(ORDERS_LIST[0])
    .slice(1)
    .map((item) => {
      if (item.includes("_")) {
        const updated = item.split("_").join(" ");
        return updated;
      } else {
        return item;
      }
    });
  return (
    <>
      {modal && <MissingOrderModal setModal={setModal} />}
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    {headings.map((item, i) => (
                      <th
                        key={i}
                        scope="col"
                        className="px-6 py-4 text-gray-400"
                      >
                        {item}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {allOrders.map((item) => (
                    <Order key={item.id} item={item} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderFeed;
