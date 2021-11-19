import React, { useEffect, useState } from "react";
import { getOrderApi, updateOrderApi } from "../api";
import OrderInfo from "../components/Order/OrderInfo";

const AllOrders = () => {
  const [orders, setOrders] = useState([]);
  const getData = async () => {
    try {
      const { data } = await getOrderApi();
      setOrders(data);
    } catch (error) {
      console.log("🚀 ~ file: OrderInfo.js ~ line 12 ~ getData ~ error", error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const updateOrder = async (id) => {
    try {
      const { data } = await updateOrderApi(id, { status: "Shipped" });
      const updatedData = orders.map((order) =>
        order._id === id ? data : order
      );
      setOrders(updatedData);
    } catch (error) {
      console.log(
        "🚀 ~ file: OrderCard.js ~ line 16 ~ updateOrder ~ error",
        error
      );
    }
  };
  console.log("🚀 ~ file: AllOrders.js ~ line 32 ~ updateOrder ~ updateOrder", updateOrder)
  return (
    <div>
      <OrderInfo orders={orders} updateOrder={updateOrder}></OrderInfo>
    </div>
  );
};

export default AllOrders;
