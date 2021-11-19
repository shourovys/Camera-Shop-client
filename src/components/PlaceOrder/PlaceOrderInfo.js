import { Disclosure } from '@headlessui/react';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { addOrderApi, getSingleProductApi } from '../../api';
import CheckoutForm from './CheckoutForm';
import PlaceOrderCard from './PlaceOrderCard';


export default function PlaceOrderInfo() {
  const history=useHistory()
  const {id}=useParams()
  const [productData, setProductData] = useState({});
  const getData = async () => {
    const { data } = await getSingleProductApi(id);
    setProductData(data);
  };
  useEffect(() => {
    getData();
  }, []);

  const subtotal = productData.price||0
  const taxes = productData.price/10||0
  const total = Number(productData.price)+productData.price/10||0

  const handelSubmit= async(formData)=>{
    const updatedData={
      ...formData,
      product:productData
    }
    try {
      const {data}= await addOrderApi(updatedData)
      history.push('/dashboard/myOrder')
      console.log("🚀 ~ file: PlaceOrderInfo.js ~ line 31 ~ handelSubmit ~ data", data)
    } catch (error) {
      
    }
  }
  return (
    <div className="bg-white">
      <main className=" lg:overflow-hidden lg:flex lg:flex-row-reverse">
        <h1 className="sr-only">Checkout</h1>

        {/* Mobile order summary */}
        <section aria-labelledby="order-heading" className="bg-gray-50 px-4 py-6 lg:hidden">
          <Disclosure as="div" className="max-w-lg mx-auto">
            {({ open }) => (
              <>
                <div className="flex items-center justify-between">
                  <h2 id="order-heading" className="text-lg font-medium text-gray-900">
                    Your Order
                  </h2>
                  <Disclosure.Button className="font-medium text-indigo-600 hover:text-indigo-500">
                    {open ? <span>Hide full summary</span> : <span>Show full summary</span>}
                  </Disclosure.Button>
                </div>

                <Disclosure.Panel>
                  <ul role="list" className="divide-y divide-gray-200 border-b border-gray-200">
                    <PlaceOrderCard product={productData}/>
                  </ul>

                  <dl className="text-sm font-medium text-gray-500 mt-10 space-y-6">
                    <div className="flex justify-between">
                      <dt>Subtotal</dt>
                      <dd className="text-gray-900">{subtotal}</dd>
                    </div>
                    
                    <div className="flex justify-between">
                      <dt>Taxes</dt>
                      <dd className="text-gray-900">{taxes}</dd>
                    </div>
                    
                  </dl>
                </Disclosure.Panel>

                <p className="flex items-center justify-between text-sm font-medium text-gray-900 border-t border-gray-200 pt-6 mt-6">
                  <span className="text-base">Total</span>
                  <span className="text-base">{total}</span>
                </p>
              </>
            )}
          </Disclosure>
        </section>

        {/* Order summary */}
        <section aria-labelledby="summary-heading" className="hidden bg-gray-50 flex-col lg:flex ">
          <h2 id="summary-heading" className="sr-only">
            Order summary
          </h2>

          <ul role="list" className="flex-auto overflow-y-auto divide-y divide-gray-200 px-6">
            <PlaceOrderCard product={productData}/>
          </ul>

          <div className="sticky bottom-0 flex-none bg-gray-50 border-t border-gray-200 p-6">
            <dl className="text-sm font-medium text-gray-500 mt-10 space-y-6">
              <div className="flex justify-between">
                <dt>Subtotal</dt>
                <dd className="text-gray-900">{subtotal}</dd>
              </div>
              
              <div className="flex justify-between">
                <dt>Taxes</dt>
                <dd className="text-gray-900">{taxes}</dd>
              </div>
              
              <div className="flex items-center justify-between border-t border-gray-200 text-gray-900 pt-6">
                <dt className="text-base">Total</dt>
                <dd className="text-base">{total}</dd>
              </div>
            </dl>
          </div>
        </section>

        {/* Checkout form */}
        <CheckoutForm handelSubmit={handelSubmit}/>
      </main>
    </div>
  )
}

