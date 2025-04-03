"use client";
import { useState } from "react";
import { Star } from "lucide-react";

interface RatingProps {
  totalStars?: number;
  initialRating?: number;
  onChange?: (rating: number) => void;
  starSize?: string;
  activeColor?: string;
  inactiveColor?: string;
}

export default function Rating({
  totalStars = 5,
  initialRating = 0,
  onChange,
  starSize = "h-6 w-6",
  activeColor = "text-yellow-400",
  inactiveColor = "text-gray-300",
}: RatingProps) {
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setRating(index);
    onChange && onChange(index);
  };

  return (
    <div className="flex space-x-1">
      {Array.from({ length: totalStars }, (_, i) => i + 1).map((index) => (
        <button
          key={index}
          type="button"
          onClick={() => handleClick(index)}
          onMouseEnter={() => setHover(index)}
          onMouseLeave={() => setHover(null)}
          className="focus:outline-none"
        >
          <Star
            className={`${starSize} ${(hover || rating) >= index ? activeColor : inactiveColor
              }`}
            fill={(hover || rating) >= index ? "currentColor" : "none"}
          />
        </button>
      ))}
    </div>
  );
}
