import { useParams } from 'react-router';
import { useColors } from './hooks';

export function ColorDetails() {
  let { id } = useParams();
  let { colors } = useColors();

  let foundColor = colors.find((color) => color.id === id);
  if (!foundColor) {
    return <h1>Color not found</h1>;
  }

  return (
    <div>
      <div
        style={{
          backgroundColor: foundColor.color,
          height: 100,
          width: 100,
        }}
      ></div>
      <h1>{foundColor.title}</h1>
      <h1>{foundColor.color}</h1>
    </div>
  );
}
