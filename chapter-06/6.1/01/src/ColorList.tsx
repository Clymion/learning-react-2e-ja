import Color from './Color';

export default function ColorList({
  colors = [],
  onRemoveColor = f => f,
  onRateColor = f => f,
}: {
  colors?: Array<{ id: string; title: string; color: string; rating: number }>;
  onRemoveColor?: (id: string) => void;
  onRateColor?: (id: string, rating: number) => void;
}) {
  if (!colors.length) return <div>No Colors Listed.</div>;

  return (
    <div>
      {colors.map((color) => (
        <Color
          key={color.id}
          {...color}
          onRemove={onRemoveColor}
          onRate={onRateColor}
        />
      ))}
    </div>
  );
}
