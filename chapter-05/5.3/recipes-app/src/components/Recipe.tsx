import React from "react";
import IngredientsList from "./IngredientsList";
import Instructions from "./Instructions";

type RecipeProps = {
  name?: string;
  ingredients?: { name: string; amount: number; measurement: string }[];
  steps?: string[];
};

export default function Recipe({
  name = "untitled",
  ingredients = [],
  steps = [],
}: RecipeProps) {
  return (
    <section id={name.toLowerCase().replace(/ /g, "-")}>
      <h1>{name}</h1>
      <IngredientsList list={ingredients} />
      <Instructions title="Cooking Instructions" steps={steps} />
    </section>
  );
}
