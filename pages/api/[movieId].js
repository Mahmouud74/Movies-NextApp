import { movies } from "@/data/movies.model";
export default function handler(req, res) {
  const { movieId } = req.query;
  let index =0;
  const deletedMovie = movies.find(
    (movie,idx) => {index=idx;return movie.id === +movieId;}
  );
  movies.splice(index, 1);
  console.log(movies[index]);
  res.status(200).json(deletedMovie);
}
