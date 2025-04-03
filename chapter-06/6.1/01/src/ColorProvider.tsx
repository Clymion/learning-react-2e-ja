import React, { useState } from 'react';
import colorData from './color-data.json';
import { ColorType } from './types/ColorType';
import createCxt from './lib/ContextWrapper';
import { v4 } from 'uuid';

type ColorContextType = {
  colors: ColorType;
  addColor: (title: string, color: string) => void;
  rateColor: (id: string, rating: number) => void;
  removeColor: (id: string) => void;
};
const [useColors, ColorContextProvider] = createCxt<ColorContextType>();

export default function ColorProvider({ children }) {
  const [colors, setColors] = useState(colorData);

  const addColor = (title: string, color: string) => {
    setColors([
      ...colors,
      {
        id: v4(),
        rating: 0,
        title,
        color,
      },
    ]);
  };

  const rateColor = (id: string, rating: number) => {
    setColors(colors.map((color) => (color.id === id ? { ...color, rating } : color)));
  };

  const removeColor = (id: string) => setColors(colors.filter((color) => color.id !== id));

  return (
    <ColorContextProvider value={{ colors, addColor, rateColor, removeColor }}>
      {children}
    </ColorContextProvider>
  );
}

export { useColors };
