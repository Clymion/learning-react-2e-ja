import { FaStar } from 'react-icons/fa';

export default function Star({
  selected = false,
  size = '5em',
  onSelect = (f) => f,
}: {
  selected?: boolean;
  size?: string;
  onSelect?: (f: any) => void;
}) {
  return (
    <FaStar
      color={selected ? 'red' : 'grey'}
      size={size}
      onClick={onSelect}
    />
  );
}
