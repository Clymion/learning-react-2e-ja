import React from "react";
import Recipe from "./Recipe";
import "./Menu.css";

type Recipe = {
  name: string;
  ingredients: { name: string; amount: number; measurement: string }[];
  steps: string[];
};

export default function Menu({ recipes = [] }: { recipes: Recipe[] }) {
  return (
    <article>
      <header>
        <h1>Delicious Recipes</h1>
      </header>
      <div className="recipes">
        {recipes.map((props, i) => (
          <Recipe key={i} {...props} />
        ))}
      </div>
    </article>
  );
}
