import React, { useState } from "react";
import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const TrendingSlider = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        "https://www.themealdb.com/api/json/v1/1/filter.php?a=Chinese"
      );
      const data = await api.json();
      setData(data.meals);
    };
    fetchData();
  }, []);
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <>
      <div
        style={{
          height: "25vh",
          width: "98%",
          margin: "auto",
        }}
      >
        <Slider {...settings} style={{ margin: "1rem" }}>
          {data.map((d) => {
            return (
              <Link to={`/${d.idMeal}`} key={d.idMeal}>
                <div className="slider">
                  <img
                    src={d.strMealThumb}
                    alt="recipe images"
                    style={{ width: "10rem", height: "8rem" }}
                  />
                </div>
              </Link>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default TrendingSlider;
