import React from "react";
import Ingredient from "./Ingredient";

export default function IngredientsList({
  list = [],
}: {
  list: { name: string; amount: number; measurement: string }[];
}) {
  return (
    <ul className="ingredients">
      {list.map((ingredient, i) => (
        <Ingredient key={i} {...ingredient} />
      ))}
    </ul>
  );
}
