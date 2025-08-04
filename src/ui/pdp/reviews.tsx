import { Reviews } from "@/lib/data/product-reviews";
import Pagination from "../pagination";
import StarRating from "./star-rating";

const ProductReviews = ({ reviews }: { reviews: Reviews }) => {
  return (
    <>
      <div>
        {reviews.reviews.map((review) => {
          const date = new Date(review.updated_at);

          const day = date.getDate();
          const month = date.getMonth() + 1;
          const year = date.getFullYear();

          return (
            <div
              className="mt-8 border-b border-gray-200 pb-8 last:border-b-0 last:pb-0"
              key={review.id}
            >
              <div className="text-sm font-medium text-gray-900">
                {review.author_name}
              </div>
              <div className="text-sm text-gray-600">
                {day}.{month}.{year}
              </div>
              <StarRating rating={review.rating} className="mt-2" />
              <div className="mt-4 text-sm/6 text-gray-600">
                {review.content}
              </div>
            </div>
          );
        })}
      </div>
      {reviews.meta.last_page > 1 ? (
        <div className="mt-12 flex justify-center lg:mt-16">
          <Pagination pageCount={reviews.meta.last_page} />
        </div>
      ) : null}
    </>
  );
};

export default ProductReviews;
