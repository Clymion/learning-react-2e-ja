import { useReducer } from 'react';

function Checkbox() {
  const [checked, toggle] = useReducer((checked) => !checked, false);

  return (
    <>
      <input
        id="box"
        type="checkbox"
        checked={checked}
        onChange={toggle}
      />
      <label htmlFor="box">
        {checked ? 'checked' : 'not checked'}
      </label>
    </>
  );
}

export default function App() {
  return <Checkbox />;
}
