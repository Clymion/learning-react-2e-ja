import React from "react";

export default function Ingredient({
  amount,
  measurement,
  name,
}: {
  amount: number;
  measurement: string;
  name: string;
}) {
  return (
    <li>
      {amount} {measurement} {name}
    </li>
  );
}
