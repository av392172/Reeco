import { TickIcon, WrongIcon } from "../constants/icons";
import { updateStatus, updateSelectedOrder } from "../redux/orderSlice";
import { useDispatch, useSelector } from "react-redux";

export const Order = ({ item, setModal }) => {
  const dispatch = useDispatch();
  const allOrders = useSelector((state) => state.order.orders);

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

  return (
    <tr key={item.id} className="border-b dark:border-neutral-500">
      <td className="px-2 py-3 text-xs text-center flex items-center justify-center">
        <img
          src={item.img}
          alt="avocado"
          height={30}
          width={30}
          className="object-contain"
        />
      </td>
      <td className="px-1 py-3 text-xs text-center">{item.Product_Name}</td>
      <td className="px-1 py-3 text-xs text-center">{item.Brand}</td>
      <td className="px-1 py-3 text-xs whitespace-nowrap text-center">{`$${item.Price} /6*1LB`}</td>
      <td className="px-1 py-3 text-xs whitespace-nowrap text-center">
        <b className="font-bold">{`${item.Quantity}`}</b> x6*1LB
      </td>
      <td className="px-1 py-3 text-xs whitespace-nowrap text-center">{`$${item.Total}`}</td>
      <td className="whitespace-nowrap text-center px-2 bg-gray-100">
        {item.Status.length ? (
          <div className={`border ${variant} px-2 py-1 text-xs rounded-full`}>
            {item.Status}
          </div>
        ) : (
          item.Status
        )}
      </td>
      <td
        className="px-1 py-3 text-xs h-[30px] w-[30px] cursor-pointer bg-gray-100"
        onClick={() => handleApprove(item.id)}
      >
        <TickIcon fill={item.Status === "Approved" ? "#008000" : "#808080"} />
      </td>
      <td
        className="px-1 py-3 text-xs h-[30px] w-[30px] cursor-pointer bg-gray-100"
        onClick={() => handleMissingProduct(item.id)}
      >
        <WrongIcon fill={iconColor} />
      </td>
      <td className="px-2 py-3 text-xs text-center bg-gray-100">
        <button>Edit</button>
      </td>
    </tr>
  );
};
