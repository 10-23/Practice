import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "styles/Home.module.css";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`https://yts.mx/api/v2/list_movies.json?sort_by=like_count&page=${page}`);
        const {
          data: { movies, movie_count, limit },
        } = await res.json();
        setMovies(movies);
        setLastPage(Math.ceil(movie_count / limit));
      } catch (err) {
        console.log(err);
      }
    })();
  }, [page]);

  return (
    <div>
      <ul className={styles.movieList}>
        {movies.map(({ id, large_cover_image, medium_cover_image, title, rating, genres, summary }) => (
          <Link
            key={id}
            to={`/${id}`}
            state={{ title, large_cover_image, medium_cover_image, rating, genres, summary }}
          >
            <li className={styles.movieItem}>
              <img
                src={medium_cover_image}
                alt="이미지"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/250x345";
                }}
              />
              <div className={styles.title}>{title}</div>
              <div>⭐{rating}</div>
              <div>{genres[0]}</div>
            </li>
          </Link>
        ))}
      </ul>
      <div className={styles.buttonContainer}>
        {1 !== page && <button onClick={() => setPage(page - 1)}>prev</button>}
        {lastPage !== page && <button onClick={() => setPage(page + 1)}>next</button>}
      </div>
    </div>
  );
};

export default Home;
