import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import TrendingSlider from "./TrendingSlider";

const RecipeDetails = () => {
  const { idMeal } = useParams();
  const [active, setActive] = useState("ingredient");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
      );
      const data = await api.json();

      setData(data.meals[0]);
    };
    fetchData();
  }, [idMeal]);
  return (
    <>
      <Navbar />
      <div
        className="container"
        style={{
          width: "90%",
          margin: "auto",
          textAlign: "center",
        }}
      >
        <h1 className=" mt-4">{data.strMeal}</h1>
        <div className="d-flex recipe-details">
          <div className="img">
            <img
              src={data.strMealThumb}
              alt="recipe"
              style={{ width: "20rem" }}
            />
          </div>
          <div
            className="content mt-8"
            style={{
              width: "60%",
              marginTop: "10px",
            }}
          >
            <button
              className="btn bg-warning text-dark mx-4"
              onClick={() => setActive("ingredient")}
            >
              Ingredient
            </button>
            <button
              className="btn bg-warning text-dark"
              onClick={() => setActive("instruction")}
            >
              Instruction
            </button>
            {active === "ingredient" ? (
              <div className="p-4">
                <h2>
                  {data.strIngredient1} - {data.strMeasure1}
                </h2>
                <h2>
                  {data.strIngredient2} - {data.strMeasure2}
                </h2>
                <h2>
                  {data.strIngredient3} - {data.strMeasure3}
                </h2>
                <h2>
                  {data.strIngredient4} - {data.strMeasure4}
                </h2>
                <h2>
                  {data.strIngredient5} - {data.strMeasure5}
                </h2>
                <h2>
                  {data.strIngredient6} - {data.strMeasure6}
                </h2>{" "}
              </div>
            ) : (
              <div className="p-4">
                <p>{data.strInstructions}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <TrendingSlider />
    </>
  );
};

export default RecipeDetails;
