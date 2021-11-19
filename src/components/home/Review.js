import BeautyStars from "beauty-stars";
import React, { useEffect, useState } from "react";
import { getReviewsApi } from "../../api";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Review = () => {
  const [reviews, setReviews] = useState([]);

  const getData = async () => {
    const { data } = await getReviewsApi();
    console.log("🚀 ~ file: Review.js ~ line 16 ~ getData ~ data", data);
    setReviews(data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flow-root p-20">
      <div className="text-center">
        <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl pb-10">
          User Reviews
        </h2>
      </div>
      <div className="-my-12 divide-y divide-gray-200 ">
        {reviews.map((review) => (
          <div key={review._id} className="py-12">
            <div className="flex items-center">
              <img
                src="https://png.pngtree.com/png-vector/20200614/ourlarge/pngtree-businessman-user-avatar-character-vector-illustration-png-image_2242909.jpg"
                alt={`${review.author}.`}
                className="h-12 w-12 rounded-full"
              />
              <div className="ml-4">
                <h4 className="text-sm font-bold text-gray-900">
                  {review.name}
                </h4>
                <h4 className="text-sm font-bold text-gray-900">
                  {review.email}
                </h4>
                <div className="mt-1 flex items-center">
                  <BeautyStars value={review.rating} editable={false} size='16px' gap='5px'/>
                </div>
                <p className="sr-only">{review.rating} out of 5 stars</p>
              </div>
            </div>

            <div
              className="mt-4 space-y-6 text-base italic text-gray-600"
              dangerouslySetInnerHTML={{ __html: review.review }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
