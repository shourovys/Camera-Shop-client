import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteProductApi, getProductsApi } from "../../api";

export default function Products({ limited, remove }) {
  const [ProductsData, setProductsData] = useState([]);
  const getData = async () => {
    const { data } = await getProductsApi(limited);
    setProductsData(data);
  };
  const deleteProduct = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        const { data } = await deleteProductApi(id);
        setProductsData((products) =>
          products.filter((pd) => pd._id !== data._id)
        );
      } catch (error) {
        console.log(
          "🚀 ~ file: Products.js ~ line 16 ~ deleteProduct ~ error",
          error
        );
      }
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            Our Products
          </h2>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {ProductsData.map((product) => (
            <div
              key={product._id}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden text-center"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={product.image}
                  alt=""
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-xl font-semibold text-indigo-600">
                    {product.name}
                  </p>

                  <p className="mb-3 text-sm font-medium text-gray-900">
                    Price: ${product.price}
                  </p>
                  {remove ? (
                    <button
                      onClick={() => deleteProduct(product._id)}
                      className="flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-full  bg-indigo-400 hover:bg-indigo-500 md:py-2 md:text-md md:px-6 mx-auto"
                    >
                      Delete
                    </button>
                  ) : (
                    <Link to={`/place/order/${product._id}`}>
                      <button className="flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-full  bg-indigo-100 hover:bg-indigo-200 md:py-2 md:text-md md:px-6 mx-auto">
                        Buy Now
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
