import axios from 'axios';
import {getSession , signIn} from 'next-auth/react';
import React, { useState, useEffect} from 'react';
import Link from 'next/link';
const index = () => {
    let apiUrl="/api";
    const [loading,setLoading] = useState(true);

    const [movies, setMovies] = useState([]);
    const [movie, setMovie] = useState("");
    const fetchMovies = async () => {
        const res = await fetch(apiUrl);
        const data = await res.json();
        console.log();
        setMovies(data);
      };
    useEffect(()=>{
         (async() =>{
            const session = await getSession();
            if(session){
               setLoading(false)
            }
       })()
       fetchMovies();
    },[])
      const postMovie =async ()=>{
        const res = await fetch("/api",{
          method:'POST',
          body:JSON.stringify({movie}),
          headers:{
              "Content-Type":"application/json"
          }
        });
        const data = await res.json();
        console.log(data);
        setMovie("")
  
    }
      const deleteMovie= async (movieId)=>{
        console.log("x");
        const res = await fetch(`/api/${movieId}`,{
          method:'DELETE'
        })
        const data = await res.json();
        console.log(data);
        // fetchMovies();
        let idx=0
        movies.find(
            (movie,idx) => {idx=idx;return movie.id === +movieId;}
          );
        movies.splice(idx,1);
        setMovies([...movies])
        console.log(movies);
    }
    if(loading){
        return (
            <div className=' container my-3'>
                <div className='row'>
                    {movies.map((movie, idx) => {
                                    // console.log(movie.title);
                                    return <div key={idx} className="col-md-4 my-3">
    
                                        <div className="card bg-dark" >
                                            <img className="card-img-top" src={"https://image.tmdb.org/t/p/original/" + movie.backdrop_path} alt="Card image cap" />
                                            <div className="card-body">
                                                <h5 className="card-title text-primary text-decoration-outline">{movie.title}</h5>
                                                <p className="card-text text-light">{movie.overview}</p>
    
                                                
                                                <div className="d-flex justify-content-end">
                                                    <Link href={`/movies/${movie.id}`} className="btn btn-primary btn-outline-light w-100 ">Show More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
    
                                })}
                </div>
            </div>
        );

    }
    return (
        <div className=' container my-3'>
            <div className='row'>
                {movies.map((movie, idx) => {
                                // console.log(movie.title);
                                return <div key={idx} className="col-md-4 my-3">

                                    <div className="card bg-dark" >
                                        <img className="card-img-top" src={"https://image.tmdb.org/t/p/original/" + movie.backdrop_path} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title text-primary text-decoration-outline">{movie.title}</h5>
                                            <p className="card-text text-light">{movie.overview}</p>

                                            <div className='d-flex justify-content-center mb-3 '>
                                                <button className='btn btn-danger btn-outline-light' onClick={()=>{deleteMovie(movie.id)}} >DELETE</button>
                                            </div>
                                            <div className="d-flex justify-content-end">
                                                <Link href={`/movies/${movie.id}`} className="btn btn-primary btn-outline-light w-100 ">Show More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            })}
            </div>
        </div>
    );
};

export default index;
// export async function getStaticProps(){
    
//     const data = await res.json();
//     return{
//         props:{
//             movies : data
//         }
//     }
// }