import Image from 'next/image';
import styles from './styles.module.css';  
import { useRouter } from 'next/router';
import { Movie } from '@/@types/movie';
import { useEffect, useState } from 'react';

export default function MovieDetails() {
  const router = useRouter();
  const { slug } = router.query;
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    if (slug) {
      fetch(`http://www.omdbapi.com/?t=${slug}&apikey=${process.env.NEXT_PUBLIC_API_KEY}`)
        .then((response) => response.json())
        .then((data) => setMovie(data));
    }
  }, [slug]);

  if (!movie) return <p>Loading...</p>;

  return (
    <>
    
      <div className={styles.container}>
        <div className={styles.textInfoContainer}>
          <h1
            className={styles.title}
          >
            {movie.Title}
          </h1>
          <p><strong>Year:</strong> {movie.Year}</p>
          <p><strong>Rated:</strong> {movie.Rated}</p>
          <p><strong>Released:</strong> {movie.Released}</p>
          <p><strong>Runtime:</strong> {movie.Runtime}</p>
          <p><strong>Genre:</strong> {movie.Genre}</p>
          <p><strong>Director:</strong> {movie.Director}</p>
          <p><strong>Writer:</strong> {movie.Writer}</p>
          <p><strong>Actors:</strong> {movie.Actors}</p>
          <p><strong>Plot:</strong> {movie.Plot}</p>
          <p><strong>Language:</strong> {movie.Language}</p>
          <p><strong>Country:</strong> {movie.Country}</p>
          <p><strong>Awards:</strong> {movie.Awards}</p>
        </div>
          <div>
            <Image 
              src={movie.Poster} 
              alt={`${movie.Title} Poster`} 
              width={300} 
              height={450} 
              layout="intrinsic"
            />
            <p><strong>Metascore:</strong> {movie.Metascore}</p>
            <p><strong>IMDb Rating:</strong> {movie.imdbRating}</p>
            <p><strong>IMDb Votes:</strong> {movie.imdbVotes}</p>
            <p><strong>IMDb ID:</strong> {movie.imdbID}</p>
            <p><strong>Type:</strong> {movie.Type}</p>
            <p><strong>Total Seasons:</strong> {movie.totalSeasons}</p>
          </div>
      </div>

    </>
  );
};

