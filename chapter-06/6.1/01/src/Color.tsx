import { useColors } from './ColorProvider';
import StarRating from './StarRating';
import { FaTrash } from 'react-icons/fa';

export default function Color({
  id,
  title,
  color,
  rating,
}: {
  id: string;
  title: string;
  color: string;
  rating: number;
}) {
  const { removeColor, rateColor } = useColors();
  return (
    <section>
      <h1>{title}</h1>
      <button onClick={() => removeColor(id)}>
        <FaTrash />
      </button>
      <div style={{ height: 50, backgroundColor: color }}></div>
      <StarRating
        selectedStars={rating}
        onRate={(rating) => rateColor(id, rating)}
      />
    </section>
  );
}
