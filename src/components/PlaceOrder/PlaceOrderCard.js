import { CheckIcon } from '@heroicons/react/solid';
import React from 'react';

const PlaceOrderCard = ({product}) => {
    return (
        <li className="flex py-6 sm:py-10">
                  <div className="flex-shrink-0">
                    <img
                      src={product.image}
                      alt={product.imageAlt}
                      className="w-24 h-24 rounded-md object-center object-cover sm:w-48 sm:h-48"
                    />
                  </div>

                  <div className="ml-4 flex-1 flex flex-col justify-between sm:ml-6">
                    <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                      <div>
                        <div className="flex justify-between">
                          <h3 className="text-lg">
                              {product.name}
                          </h3>
                        </div>
                        
                        <p className="mt-1 text-sm font-medium text-gray-900">${product.price}</p>
                      </div>
                    </div>

                    <p className="mt-4 flex text-sm text-gray-700 space-x-2">
                        <CheckIcon className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
                      

                      <span>Product available</span>
                    </p>
                  </div>
                </li>
    );
};

export default PlaceOrderCard;