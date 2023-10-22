import React, { useEffect, useState } from "react";
import Youtube from 'react-youtube'
import axios from "../../axios";
import { API_KEY, imageUrl } from "../../constants/Constants";
import "./RowPost.css";

function RowPost({title,clasName,url}) {
  const [cards, setCards] = useState([]);
  const [urlKey,setUrlKey] = useState('')
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
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    }
  }
  const handleUrl = (id)=>{
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&langauge=en-US`).then(response=>{
      if(response.data.results.length!==0){
        setUrlKey(response.data.results[0])
      }
    })
  }
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="posters">
    {cards.map((card) => {
      return (
            <img
            onClick={()=>handleUrl(card.id)}
            className={clasName}
            src={card ? imageUrl + card.backdrop_path : ""}
            alt="poster"
            />
            );
          })}
      </div>
        {urlKey && <Youtube videoId={urlKey.key} opts={opts}/> } 
    </div>
  );
}

export default RowPost;
