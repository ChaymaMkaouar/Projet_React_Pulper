import { Link } from "react-router-dom"
import React, { useState , useEffect } from "react";
import { auth } from "./fireConfig";
import { onAuthStateChanged } from "firebase/auth";
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import Button from '@mui/material/Button';
import FaceIcon from '@mui/icons-material/Face';
import element from "../src/components/ElementsArticle"
function Menu() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  onAuthStateChanged(auth, (user) => {
    return user ? setIsLoggedIn(true) : setIsLoggedIn(false);
  });
  const logOut = () => {
    auth.signOut().then(() => {
      console.log('singOut');
    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <a>
            <span className="dr">Pulper</span>
            <img src="images/icon.png" width="50" />
          </a>

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="but" aria-current="page" to="/main">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="but" to="./ListCards">Espace Client</Link>
            </li>
            <li className="nav-item">
              <Link className="but" to="/login">Espace administrateur</Link>
            </li>
          </ul>
          {!isLoggedIn
            ? (
              <Link className="but" to="/loginclient">< FaceIcon Log ></FaceIcon>
               Login </Link>
            ) : (
              <button className="but"
                onClick={() => logOut()}>Log Out</button>
            )
          }

         
        </div>
      </div>
    </nav>
  );
}

export default Menu;