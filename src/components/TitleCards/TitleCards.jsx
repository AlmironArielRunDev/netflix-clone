import React, { useEffect, useRef, useState } from 'react';
import './TitleCards.css';
import {Link} from 'react-router-dom'


const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  const API_KEY = "2a5cd89ffe1f20d2d515869a938a4efe"; // <- clave pública de la api tmdb

useEffect(() => {
  fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?api_key=${API_KEY}&language=en-US&page=1`)
    .then(res => res.json())
    .then(res => {
      console.log(res);
      setApiData(res.results);
    })
    .catch(err => console.error('Error fetching data:', err));

  const currentRef = cardsRef.current;
  currentRef.addEventListener('wheel', handleWheel);

  return () => {
    currentRef.removeEventListener('wheel', handleWheel);
  };
}, [category]);
  

  return <div className='title-cards'>
        <h2>{title ? title : "Popular on Netflix"}</h2>
        <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          const imageUrl = card.backdrop_path ? `https://image.tmdb.org/t/p/w500${card.backdrop_path}` : 'ruta/a/imagen/default.jpg';
          return <Link to={`/player/${card.id}`} className="card" key={index}>
                <img src={imageUrl} alt={card.original_title} />
                 <p>{card.original_title}</p>
                </Link>
        })}
      </div>
    </div>
};

export default TitleCards;
