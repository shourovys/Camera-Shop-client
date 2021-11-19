import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import { addReviewsApi } from "../../api";
import useAuth from "../../hooks/useAuth";

const TakeReview = () => {
  const {
    user: {
      userInfo: { name, email },
    },
  } = useAuth();
  const [review, setReview] = useState();
  const [resStatus, setResStatus] = useState({ type: "", text: "" });
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };

  const handelBlur = (e) => {
    setReview(e.target.value);
    setResStatus({ type: "", text: "" });
  };
  const handelSubmit = async (formData) => {
    setResStatus({ type: "", text: "" });
    try {
      const { data } = await addReviewsApi({ review, name, email, rating });
      setResStatus({ type: "success", text: "Your review added successfully" });
      setReview("");
    } catch (error) {
      setResStatus({ type: "error", text: "Some error happened. Try Again" });
    }
  };
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col py-8 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Give a review
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handelSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Write a Review
              </label>
              <Rating
                onClick={handleRating}
                ratingValue={rating}
                size={40}
                label
                transition
                fillColor="orange"
                emptyColor="gray"
                className="foo"
              />
              <div className="mt-1">
                <textarea
                  type="review"
                  onChange={handelBlur}
                  id="review"
                  review="review"
                  autoComplete="review"
                  value={review}
                  className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-40 p-2 border"
                />
              </div>
              
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Add
              </button>
            </div>
            {resStatus.type === "success" && (
              <p className="text-green-600 my-2 text-center">
                {resStatus.text}
              </p>
            )}
            {resStatus.type === "error" && (
              <p className="text-red-600 my-2 text-center">{resStatus.text}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default TakeReview;
