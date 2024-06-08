import React from "react";
import RecipeCard from "../RecipeCard";
import { getRandomColor } from "../../lib/utils";

export default function FavoritePage() {
  const favorite = JSON.parse(localStorage.getItem("favorites")) || [];
  return (
    <div className="bg-[#faf9fb] flex-1 p-10 min-h-screen">
      <div className="max-w-screen-lg mx-auto">
        <p className="font-bold text-3xl md:text-5xl mt-4 mb-10">My Favorites</p>

        {favorite.length === 0 && (
          <div className="h-[80vh] flex flex-col items-center gap-4">
            <img src="./404.svg" className="h-3/4 mt-14" alt="404 error" />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {favorite.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} {...getRandomColor()} />
          ))}
        </div>
      </div>
    </div>
  );
}
