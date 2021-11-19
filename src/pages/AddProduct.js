import { useState } from "react";
import { addProductsApi } from "../api";
import ImgUpload from "../components/common/imgUpload";

export default function AddProduct({}) {
  const [formData, setFormData] = useState({});
  const [resStatus, setResStatus] = useState({ type: "", text: "" });

  const handelChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handelBlur = (value) => {
    setFormData({ ...formData, ...value });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      await addProductsApi(formData);
      setResStatus({ type: "success", text: "Your Product added successfully" });
    } catch (error) {
      setResStatus({ type: "error", text: "Some error happened. Try Again" });
    }
    
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col py-8 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Add New Product
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        {resStatus.type === "success" && (
              <p className="text-green-600 my-2 text-center">
                {resStatus.text}
              </p>
            )}
            {resStatus.type === "error" && (
              <p className="text-red-600 my-2 text-center">{resStatus.text}</p>
            )}
          <form className="space-y-6" onSubmit={handelSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Product Name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  onChange={handelChange}
                  type="name"
                  autoComplete="name"
                  required
                  defaultValue={formData.name}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="Price"
                className="block text-sm font-medium text-gray-700"
              >
                Price
              </label>
              <div className="mt-1">
                <input
                  id="price"
                  name="price"
                  onChange={handelChange}
                  type="number"
                  autoComplete="current-password"
                  required
                  defaultValue={formData.price}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <div className="mt-1">
                <ImgUpload handelBlur={handelBlur} priviesImage={formData.image}/>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
