import React, { useEffect, useState } from "react";
import { ORDERS_LIST } from "../constants";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  updateStatus,
  addOrders,
  updateSelectedOrder,
} from "../redux/orderSlice";
import { MissingOrderModal } from "./MissingOrderModal";
import { Order } from "./Order";

const OrderFeed = () => {
  const dispatch = useDispatch();
  const allOrders = useSelector((state) => state.order.orders);
  const [modal, setModal] = useState(false);

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
                        className="px-6 py-4 text-gray-400 text-center"
                      >
                        {item}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {allOrders.map((item) => (
                    <Order key={item.id} item={item} setModal={setModal} />
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
