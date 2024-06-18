import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "./Navbar";

const Category = () => {
  const { name } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${name}`
      );
      const data = await api.json();
      setData(data.meals);
    };
    fetchData();
  }, [name]);

  return (
    <>
      <Navbar />
      <div
        className="container"
        style={{
          width: "90%",

          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(15rem, 1fr))",
          gridGap: "1rem",
        }}
      >
        {data.map((d) => {
          return (
            <Link to={`/${d.idMeal}`} key={d.idMeal}>
              <div style={{ textAlign: "center" }}>
                <div className="img">
                  <img
                    src={d.strMealThumb}
                    alt="images"
                    style={{ width: "15rem" }}
                  />
                </div>
                <h4 className="text-light mt-3">{d.strMeal}</h4>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Category;
