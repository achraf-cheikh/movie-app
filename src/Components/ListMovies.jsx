import React from "react";
import MovieDesc from "./MovieDesc";

const ListMovies = ({ tab, del, name, rate }) => {
  return (
    <div className="Movie-list">
      {tab
        .filter(
          (el) =>
            el.title.trim().toLowerCase().includes(name.trim().toLowerCase()) &&
            el.rating >= rate
        )
        .map((el) => (
          <MovieDesc key={el.id} el={el} del={del} />
        ))}
    </div>
  );
};

export default ListMovies;
