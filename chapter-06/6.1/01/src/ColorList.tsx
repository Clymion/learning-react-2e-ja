import { useColors } from './ColorProvider';
import Color from './Color';

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
