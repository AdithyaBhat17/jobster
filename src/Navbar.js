import React from 'react'

export default function Navbar(props){
    return(
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <input onChange={props.searchJob} className="searchbar form-control" type="text" placeholder="🔎 search for jobs"/>
                        </li>
                    </ul>  
                </div>
            </div>
        </nav>
    )
}