import Star from './Star';

interface StarRatingProps {
  total?: number;
  selected?: number;
  onChange?: (rating: number) => void;
}

export default function StarRating({
  total = 5,
  selected = 0,
  onChange = (f) => f,
}: StarRatingProps) {
  return (
    <div className="star-rating">
      {[...Array(total)].map((_, i) => (
        <Star
          key={i}
          selected={selected > i}
          onSelect={() => onChange(i + 1)}
        />
      ))}
      <p>
        {selected} of {total} stars
      </p>
    </div>
  );
}
