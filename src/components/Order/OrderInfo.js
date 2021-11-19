import OrderCard from "./OrderCard";

export default function OrderInfo({ orders ,updateOrder,deleteOrder}) {
  
  
  return (
    <div className="bg-white">
      <main
        className="max-w-2xl mx-auto py-8 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
        aria-labelledby="order-history-heading"
      >
        <div className="max-w-xl">
          <h1
            id="order-history-heading"
            className="text-3xl font-extrabold tracking-tight text-gray-900"
          >
            Order history
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Check the status of recent orders, manage returns, and discover
            similar products.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
          {orders && orders.map((order) => (
            <OrderCard order={order} updateOrder={updateOrder} deleteOrder={deleteOrder}/>
          ))}
        </div>
      </main>
    </div>
  );
}
