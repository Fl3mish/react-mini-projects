import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
export default function MealApi() {
  const [items, setItems] = useState([]);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");
  //         const data = await response.json();
  //         setItems(data);
  //       } catch (error) {
  //         console.log("Error fetching data:", error);
  //       }
  //     };
  //     fetchData();
  //   }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
        ); //imediately does json parsing
        console.log(response.data.meals);
        setItems(response.data.meals);
      } catch (error) {
        if (error.response) {
          console.error(error.response.data); // Server responded with an error
          console.error(error.response.status); // Status code of the error
        } else if (error.request) {
          console.error("Request made but no response received");
        } else {
          console.error("Error setting up the request:", error.message);
        }
      }
    };
    fetchData();
  }, []);

  return (
    <div className="items-container">
      {items.map((item) => (
        <section className="card" key={item.idMeal}>
          <img src={item.strMealThumb} alt={item.strMeal} />
          <section className="content">
            <p>{item.strMeal}</p>
            <p>#{item.idMeal}</p>
          </section>
        </section>
      ))}
    </div>
  );
}
