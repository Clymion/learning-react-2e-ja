import { memo, useCallback } from 'react';
import { FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import { useColors } from './hooks';
import StarRating from './StarRating';

const Trash = memo(FaTrash);
const Rating = memo(StarRating);

export interface ColorType {
  id: string;
  title: string;
  color: string;
  rating?: number;
}

export default memo(
  function Color({ id, title, color, rating = 0 }: ColorType) {
    const { rateColor, removeColor } = useColors();

    const rate = useCallback((rating: number) => rateColor(id, rating), [id, rateColor]);

    let navigate = useNavigate();

    return (
      <section className="color">
        <h1>{title}</h1>
        <button onClick={() => removeColor(id)}>
          <Trash color="red" />
        </button>
        <div
          onClick={() => navigate(`/${id}`)}
          style={{
            height: 50,
            backgroundColor: color,
          }}
        />
        <Rating
          selected={rating}
          onChange={rate}
        />
      </section>
    );
  },
  (prevProps, nextProps) => {
    console.log(prevProps.rating, nextProps.rating);
    return prevProps.rating === nextProps.rating;
  }
);
