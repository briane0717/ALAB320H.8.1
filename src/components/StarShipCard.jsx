import { useState, useEffect } from "react";
import { getAllStarships } from "../services/sw-api";

function StarShipCard({ name }) {
  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
}
export default StarShipCard;
