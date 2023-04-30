import React from 'react';
import Link from 'next/link';
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = () => {
    const { data: session } = useSession();
    if(session){        
        return (
            <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand text-info fw-bolder" href="#">MOVIES</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" href="/movies">All Movies</Link>
                </li>
                <li className="nav-item ">
                    <Link className="nav-link " aria-current="page" href="/movies/addMovie">Add Movie</Link>
                </li>
                <li className="nav-item">
                    <Link
                      className="nav-link btn btn-info text-dark"
                      aria-current="page"
                      href="/api/auth/signout"
                      onClick={() => signOut()}
                    >
                      signOut
                    </Link>
                  </li>
                <li className="nav-item">
                    {/* <Link> AddMovie</Link> */}
                </li>
            
                
                    </ul>
            
                </div>
            </div>
        </nav>
            </>
        );
    }
        return (
            <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand text-info fw-bolder" href="#">MOVIES</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" href="/movies">All Movies</Link>
                </li>

                <li className="nav-item">
                    <Link
                      className="nav-link btn btn-info text-dark"
                      aria-current="page"
                      href="/api/auth/signin"
                      onClick={() => signIn()}
                    >
                      signIn
                    </Link>
                  </li>
                    </ul>
                </div>
            </div>
        </nav>
            </>
        );
        
    
};

export default Navbar;