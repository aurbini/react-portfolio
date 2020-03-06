import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav id="navbar" class="row navbar sticky-top p-0">
    <div  class="text-center col-xs-12 col-md-auto mx-md-5 ml-0 mb-0" >
        <h1 id="nav-header" 
            class="main-header">Alex Urbini</h1>
    </div>
    <div class="text-center col-xs-12 col-md-5 mt-0 mb-0">
        <ul id="nav-links"
            class="list-inline mx-auto text-white">
            <li id="link" class="list-inline-item text-white">
              <Link 
                to="/"
                className={ window.location.pathname==="/" || window.location.pathname ==="/about"
                  ? "nav-link active"
                  : "nav-link"
                }
                >
                  About
                </Link>
            </li>
            <li class="list-inline-item ml-3 text-white">
              <Link 
                to="/portfolio"
                className= { window.location.pathname==="/portfolio" || window.location.pathname ==="/portfolio"
                  ? "nav-link active"
                  : "nav-link"
                }
                >
                  Portfolio
                </Link>
                </li>
            <li class="list-inline-item ml-3 text-white">
              <Link 
                to="/form"
                className={ window.location.pathname==="/contact" || window.location.pathname ==="/contact"
                  ? "nav-link active"
                  : "nav-link"
                }
              >
                Contact
              </Link>
            </li>
        </ul>
    </div>
</nav>
  )


}

export default Navbar; 