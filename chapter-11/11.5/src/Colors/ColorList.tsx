import Color from './Color';
import { useColors } from './hooks';

export default function ColorList() {
  const { colors } = useColors();

  return (
    <div className="color-list">
      {colors.length === 0 ? (
        <p>No Colors Listed. (Add a Color)</p>
      ) : (
        colors.map((color) => (
          <Color
            key={color.id}
            {...color}
          />
        ))
      )}
    </div>
  );
}
