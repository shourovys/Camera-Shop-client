import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const CheckoutForm = ({ handelSubmit }) => {
  const [formData, setFormData] = useState({
    email: "",
    address: "",
    phone: "",
    name: "",
  });

  const handelBlur = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { user } = useAuth();
  const email= user?.userInfo?.email
  const name= user?.userInfo?.name
  useEffect(() => {
    setFormData({ ...formData, email,name });
  }, [email,name])
  return (
    <section
      aria-labelledby="payment-heading"
      className="flex-auto overflow-hidden px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:px-8 lg:pt-0 lg:pb-24"
    >
      <div className="max-w-lg mx-auto mt-6">
        <div className="grid grid-cols-12 gap-y-6 gap-x-4">
          <div className="col-span-full">
            <label
              htmlFor="name-address"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <div className="mt-1">
              <input
                type="name"
                onChange={handelBlur}
                id="name-address"
                name="name"
                autoComplete="name"
                value={formData.name}
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-10 pl-2"
              />
            </div>
          </div>
          <div className="col-span-full">
            <label
              htmlFor="email-address"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <div className="mt-1">
              <input
                type="email"
                onChange={handelBlur}
                id="email-address"
                name="email"
                autoComplete="email"
                value={formData.email}
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-10 pl-2"
              />
            </div>
          </div>
          <div className="col-span-full">
            <label
              htmlFor="email-address"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <div className="mt-1">
              <input
                type="phone"
                onChange={handelBlur}
                id="phone-address"
                name="phone"
                autoComplete="phone"
                value={formData.phone}
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-10 pl-2"
              />
            </div>
          </div>

          <div className="col-span-full">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <div className="mt-1">
              <input
                type="text"
                id="address"
                name="address"
                onChange={handelBlur}
                value={formData.address}
                autoComplete="street-address"
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-10 pl-2"
              />
            </div>
          </div>
        </div>

        <button
          onClick={() => handelSubmit(formData)}
          className="w-full mt-6 bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Checkout
        </button>
      </div>
    </section>
  );
};

export default CheckoutForm;
