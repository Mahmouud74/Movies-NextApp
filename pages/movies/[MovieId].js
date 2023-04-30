import { useRouter } from 'next/router';
import React from 'react';
import Link from 'next/link';
const MovieId = () => {
    const router = useRouter();
   return<>
    <div className=' container my-3'>
            <div className='row d-flex justify-content-center'>
                <div className='col-md-6'>
                      <div className="card bg-dark w-100" >
                                        <img className="card-img-top h-25" src={"https://image.tmdb.org/t/p/original/" + movie.backdrop_path} alt="Card image cap " />
                                        <div className="card-body">
                                            <h5 className="card-title text-primary text-decoration-outline">{movie.title}</h5>
                                            <p className="card-text text-light">{movie.overview}</p>

                                            <div className='d-flex justify-content-center mb-3 '>
                                                <button className='btn btn-danger btn-outline-light' id={`${movie.id}`} >DELETE</button>
                                            </div>
                                            <div className="d-flex justify-content-end">
                                                <Link href={`/movies`} className="btn btn-primary btn-outline-light w-100 ">Back</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                    
                </div>
    </div>
   </>
};
export default MovieId;
export async function getStaticPaths() {
    return {
      paths: [
        { params: { MovieId: "1" } },
        { params: { MovieId: "2" } },
        { params: { MovieId: "3" } },
      ],
      fallback: "blocking",
    };
  }
  
  export async function getStaticProps(context) {
    const { params } = context;
    const res = await fetch(`http://localhost:3001/results/${params.MovieId}`);
    const data = await res.json();
    return {
      props: {
        movie: data,
      },
      revalidate:10
    };
  }