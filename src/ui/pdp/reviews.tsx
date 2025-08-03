import { Reviews } from "@/lib/data/product-reviews";
import { IconStarFilled } from "@tabler/icons-react";
import Pagination from "../pagination";

const ProductReviews = ({ reviews }: { reviews: Reviews }) => {
  return (
    <div>
      {reviews.data.map((review) => (
        <div className="mt-8 border-b border-gray-200 pb-8" key={review.id}>
          <div className="text-sm font-medium text-gray-900">
            {review.author_name}
          </div>
          <div className="text-sm text-gray-600">1.8.2025</div>
          <div className="mt-2 flex">
            {Array.from({ length: review.rating }).map((_, index) => (
              <IconStarFilled
                key={`filled-${index}`}
                size={16}
                className="fill-pink-400"
              />
            ))}
            {Array.from({ length: 5 - review.rating }).map((_, index) => (
              <IconStarFilled
                key={`unfilled-${index}`}
                size={16}
                className="fill-gray-300"
              />
            ))}
          </div>
          <div className="mt-4 text-sm/6 text-gray-600">{review.content}</div>
        </div>
      ))}
      {reviews.meta.last_page > 1 ? (
        <div className="mt-16 flex justify-center">
          <Pagination pageCount={reviews.meta.last_page} />
        </div>
      ) : null}
    </div>
  );
};

export default ProductReviews;
