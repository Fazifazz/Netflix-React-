import React, { useEffect, useState } from "react";
import axios from "../../axios";
import { imageUrl } from "../../constants/Constants";
import "./RowPost.css";

function RowPost({title,clasName,url}) {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCards(response.data.results);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="posters">
    {cards.map((card) => {
          return (
            <img
              className={clasName}
              src={card ? imageUrl + card.backdrop_path : ""}
              alt="poster"
            />
          );
        })}
      </div>
    </div>
  );
}

export default RowPost;
