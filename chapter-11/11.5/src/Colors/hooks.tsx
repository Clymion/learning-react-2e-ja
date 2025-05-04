import { useCallback, useDebugValue, useEffect, useMemo, useReducer, useState } from 'react';
import { v4 } from 'uuid';

import createCxt from '../lib/ContextWrapper';
import { ColorType } from './Color';
import sampleColors from './default-colors.json';

export const useInput = (
  initialValue: string
): [{ value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }, () => void] => {
  const [value, setValue] = useState(initialValue);
  useDebugValue(value);
  return [{ value, onChange: (e) => setValue(e.target.value) }, () => setValue(initialValue)];
};

type ColorContextType = {
  colors: ColorType[];
  addColor: (title: string, color: string) => void;
  rateColor: (id: string, rating: number) => void;
  removeColor: (id: string) => void;
};
const [useColors, ColorContextProvider] = createCxt<ColorContextType>();
export { useColors };

const reducer = (
  state: Array<{ id: string; title: string; color: string; rating?: number }> = [],
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case 'ADD_COLOR':
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title,
          color: action.payload.color,
          rating: 0,
        },
      ];
    case 'REMOVE_COLOR':
      return state.filter((c) => c.id !== action.payload.id);
    case 'RATE_COLOR':
      return state.map((c) =>
        c.id !== action.payload.id ? c : { ...c, rating: action.payload.rating }
      );
    default:
      return state;
  }
};

export const ColorProvider = ({ children }) => {
  const defaultColors = sampleColors as ColorType[];
  const initColors = JSON.parse(localStorage.getItem('colors') ?? '') as ColorType[];
  const [_colors, dispatch] = useReducer(reducer, initColors ? initColors : defaultColors);

  const colors = useMemo((): ColorType[] => _colors, [_colors]);

  const addColor = useCallback(
    (title: string, color: string) =>
      dispatch({
        type: 'ADD_COLOR',
        payload: {
          id: v4(),
          title,
          color,
        },
      }),
    [dispatch]
  );

  const removeColor = useCallback(
    (id) => {
      dispatch({
        type: 'REMOVE_COLOR',
        payload: { id },
      });
    },
    [dispatch]
  );

  const rateColor = useCallback(
    (id, rating) => {
      dispatch({
        type: 'RATE_COLOR',
        payload: { id, rating },
      });
    },
    [dispatch]
  );

  useEffect(() => {
    localStorage.setItem('colors', JSON.stringify(colors));
  }, [colors]);

  return (
    <ColorContextProvider value={{ colors, addColor, rateColor, removeColor }}>
      {children}
    </ColorContextProvider>
  );
};
