import Star from './Star';

export default function StarRating({
  totalStars = 5,
  selectedStars = 0,
  onRate = f => f,
  style = {},
}: {
  totalStars?: number;
  selectedStars?: number;
  onRate?: (rating: number) => void;
  style?: React.CSSProperties;
}) {
  // const [selectedStars, setSelectedStars] = useState(3);

  return (
    <div style={{ padding: "5px", ...style }}>
      {[...Array(totalStars)].map((_, i) => (
        <Star
          key={i}
          selected={i < selectedStars}
          size="1em"
          onSelect={() => onRate(i + 1)}
        />
      ))}
      <p style={{ fontSize: '1em' }}>
        {selectedStars} of {totalStars} stars
      </p>
    </div>
  );
}
