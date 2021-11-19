import React, { useEffect, useState } from 'react';
import { deleteOrderApi, getSingleUserOrderApi } from '../api';
import OrderInfo from '../components/Order/OrderInfo';
import useAuth from '../hooks/useAuth';

const MyOrders = () => {
    const {user:{userInfo}}=useAuth()
    const id = userInfo?.id
    const [orders, setOrders] = useState([]);
    const getData = async () => {
      try {
        const { data } = await getSingleUserOrderApi(id);
        setOrders(data);
      } catch (error) {
        console.log("🚀 ~ file: OrderInfo.js ~ line 12 ~ getData ~ error", error);
      }
    };
    useEffect(() => {
      if (id) {
        getData();
      }
    }, [id]);
    const deleteOrder = async (id) => {
        if (window.confirm('Are you sure you want to cancel order')) {
            try {
                const { data } = await deleteOrderApi(id);
                const updatedData = orders.filter((order) =>
                  order._id !== id
                );
                setOrders(updatedData);
              } catch (error) {
                console.log(
                  "🚀 ~ file: OrderCard.js ~ line 16 ~ updateOrder ~ error",
                  error
                );
              }
          } 
      };
    return (
        <div>
            <OrderInfo orders={orders} deleteOrder={deleteOrder}/>
        </div>
    );
};

export default MyOrders;