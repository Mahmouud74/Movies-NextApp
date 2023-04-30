import { movies } from "@/data/movies.model";

export default function handler(req,res){
    if(req.method === 'GET'){
        res.status(200).json(movies)

    }else if(req.method === 'POST'){
        const movie = req.body.inputData;
        console.log(movie);
        const newMovie ={
            id:Date.now(),
            title:movie.title,
            overview:movie.overview,
            backdrop_path: "/ovM06PdF3M8wvKb06i4sjW3xoww.jpg",
            age: 20,
            salary: 3000      
        }
        movies.push(newMovie);
        console.log(movies);
        res.status(200).json(newMovie)
    }
}