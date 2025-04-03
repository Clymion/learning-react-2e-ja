import Color from './Color';
import { useColors } from './ColorProvider';

export default function ColorList() {
  const { colors } = useColors();
  if (typeof colors === 'undefined' || !colors.length) return <div>No Colors Listed.</div>;

  return (
    <div>
      {colors.map((color) => (
        <Color
          key={color.id}
          {...color}
        />
      ))}
    </div>
  );
}
