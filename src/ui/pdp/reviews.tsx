import { Reviews } from "@/lib/data/product-reviews";
import { IconPencil, IconStar } from "@tabler/icons-react";
import Pagination from "../pagination";
import StarRating from "./star-rating";

const ProductReviews = ({ reviews }: { reviews: Reviews }) => {
  return (
    <>
      {reviews.reviews.length > 1 ? (
        reviews.reviews.map((review) => {
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
        })
      ) : (
        <div className="mt-8 lg:mt-16">
          <div className="flex items-center justify-center text-pink-500">
            <IconStar />
            <IconStar />
            <IconStar />
            <IconStar />
            <IconStar />
          </div>
          <div className="mt-4 text-center text-xl font-semibold text-gray-900">
            Još nema recenzija
          </div>
          <p className="mx-auto mt-4 max-w-112 text-center text-gray-600">
            Prva recenzija je najvažnija! Pomozite drugima da saznaju više o
            ovom proizvodu.
          </p>
          <button className="mx-auto mt-6 flex cursor-pointer items-center gap-x-2 rounded-md bg-gray-900 py-2 pr-4 pl-3.5 font-medium text-white">
            <IconPencil size={16} />
            <span>Napišite recenziju</span>
          </button>
        </div>
      )}
      {reviews.meta.last_page > 1 ? (
        <div className="mt-12 flex justify-center lg:mt-16">
          <Pagination pageCount={reviews.meta.last_page} />
        </div>
      ) : null}
    </>
  );
};

export default ProductReviews;
