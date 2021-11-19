import React from "react";
import { useLocation } from "react-router";

const OrderCard = ({ order,updateOrder,deleteOrder }) => {
  const {
    _id,
    status,
    address,
    phone,
    product: {  image, price,  name, },
  } = order;
  const {pathname} = useLocation()

  
  return (
    <div key={_id} className="group relative text-center">
      <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-md overflow-hidden group-hover:opacity-75">
        <img
          src={image}
          alt=""
          className=" h-48 object-center  w-full object-cover"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-500">
        {name}
      </h3>
      <p className="mt-4 text-sm text-gray-500">
        Price: {price}
      </p>
      <p className="mt-4 text-sm text-gray-500">
        Address: {address}
      </p>
      <p className="my-4 text-sm text-gray-500">
        Order Status: {status}
      </p>
      {
          pathname!=='/dashboard/myOrder' ?
          <button
          onClick={()=>updateOrder(_id)}
          className="flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md bg-indigo-100 hover:bg-indigo-200 md:py-2 md:text-md md:px-6 mx-auto"
        >
          Order Shipped
        </button>:
          <button
          onClick={()=>deleteOrder(_id)}
          className="flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md bg-indigo-500 hover:bg-indigo-600 md:py-2 text-white md:text-md md:px-6 mx-auto"
        >
          Cancel Order
        </button>
      }
    </div>
  );
};

export default OrderCard;
