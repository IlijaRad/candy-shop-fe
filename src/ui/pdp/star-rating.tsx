import { IconStarFilled } from "@tabler/icons-react";
import { twMerge } from "tailwind-merge";

const StarRating = ({
  rating,
  className,
  starSize,
}: {
  rating: number;
  className?: string;
  starSize?: number;
}) => {
  return (
    <div className={twMerge("flex", className)}>
      {Array.from({ length: rating }).map((_, index) => (
        <IconStarFilled
          key={`filled-${index}`}
          size={starSize || 16}
          className="fill-pink-400"
        />
      ))}
      {Array.from({ length: 5 - rating }).map((_, index) => (
        <IconStarFilled
          key={`unfilled-${index}`}
          size={starSize || 16}
          className="fill-gray-300"
        />
      ))}
    </div>
  );
};

export default StarRating;
