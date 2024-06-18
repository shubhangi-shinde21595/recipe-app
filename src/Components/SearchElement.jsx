import React from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SearchElement = () => {
  const { searchTerm } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
      const data = await api.json();
      setData(data.meals);
    };
    fetchData();
  }, [searchTerm]);
  return (
    <>
      <Navbar />
      <div
        style={{
          width: "90%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(15rem, 1fr))",
          gridGap: "1rem",
          margin: "auto",
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
                <h4 className="text-light text-center">{d.strMeal}</h4>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default SearchElement;
