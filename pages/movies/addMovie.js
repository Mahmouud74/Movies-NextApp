import axios from 'axios';
import {getSession , signIn} from 'next-auth/react';
import React, { useState, useEffect} from 'react';
import Link from 'next/link';
const index = () => {
    let apiUrl="/api";
    const [loading,setLoading] = useState(true);
   
    const [movies, setMovies] = useState([]);
    const [movie, setMovie] = useState("");
    const [inputData, setInputData] = useState({ title: "", overview: "" });
    const onChangeInputs = (e) => {
        const { name, value } = e.target;
        setInputData({ ...inputData, [name]: value });
        console.log(inputData);
        // console.log(inputData);
    }
    const fetchMovies = async () => {
        const res = await fetch(apiUrl);
        const data = await res.json();
        console.log();
        setMovies(data);
      };
      useEffect(()=>{
        const securePage = async() =>{
             const session = await getSession();
             if(!session){
                signIn();

             }else{
                setLoading(false)
             }
        }
        securePage()
    },[]);
    
      const postMovie =async ()=>{
        const res = await fetch("/api",{
          method:'POST',
          body:JSON.stringify({inputData}),
          headers:{
              "Content-Type":"application/json"
          }
        });
        const data = await res.json();
        console.log(data);
        setInputData({ title: "", overview: "" })  
    }
      const deleteMovie= async (movieId)=>{
        console.log("x");
        const res = await fetch(`/api/${movieId}`,{
          method:'DELETE'
        })
        const data = await res.json();
        console.log(data);
        fetchMovies();
        console.log(movies);
    }
    if(loading) return <div className=' container my-3'>
      <div className='row d-flex justify-content-center'> 
        <div className=' col-md-6 d-flex justify-content-center alert alert-info h4'>
            Loading...
        </div>
      </div>
    </div>
    return (
        <div className=' container my-3'>
            <div className='row d-flex justify-content-center'>
               <div className='col-md-12  mt-3 d-flex justify-content-center'>
                    <input className='form-control w-50' name="title" value={inputData.name} onChange={onChangeInputs} placeholder='enter Movie title'></input>
               </div>
               <div className='col-md-12  mt-3 d-flex justify-content-center'>
                    <input className='form-control w-50' name='overview' value={inputData.name} onChange={onChangeInputs} placeholder='enter Movie overview'></input>
               </div>
               <div className='col-md-12  mt-3 d-flex justify-content-center'>
                    <button className='btn btn-info'  onClick={postMovie}> add </button>
               </div>
            </div>
        </div>
    );
};

export default index;
