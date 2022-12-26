import { useState } from "react";
const StarRating: React.FC<{ evluateRating: (ratingValue: number) => void }> = (
  props
) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <div className="flex flex-row-reverse flexe-nowrap justify-center items-center">
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              style={{ display: "none" }}
              value={ratingValue}
              onClick={() => {
                setRating(ratingValue);
                props.evluateRating(ratingValue);
              }}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              viewBox="0 0 24 24"
              strokeWidth={0}
              stroke="#e4e5e9"
              className="w-3.5 h-3.5 lg:w-5 lg:h-5 xl:w-6  xl:h-6 cursor-pointer transition-colors delay-200 -mr-0.5 "
              onMouseEnter={() => {
                setHover(null);
              }}
              onMouseLeave={() => {
                setHover(ratingValue);
                props.evluateRating(ratingValue);
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
            {/* <FaStar
              size={100}
              className="cursor-pointer transition-colors delay-200"
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              onMouseEnter={() => {
                setHover(null);
              }}
              onMouseLeave={() => {
                setHover(ratingValue);
              }}
            /> */}
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
