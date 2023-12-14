// AdminPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const AdminPage = () => {
  return (
    <div>
      <center><h1>Welcome Admin</h1></center>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <nav>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       <center> <h3>Voulez-vous voir la liste des clients? </h3></center>
         <li className="nav-item">
            <center><Link className="but" to="/client">Liste des client</Link></center>
        </li> 
       <center> <h3>Voulez-vous voir la liste des Articles? </h3></center>
        <li className="nav-item">
         <center> <Link className="but"  to="/articles">Liste des articles</Link></center>
        </li>
        <center><h3>Voulez-vous ajouter un client? </h3></center>
        <li className="nav-item">
<center><Link className="but" to="/AddClient">Ajout d'un client</Link></center>
</li>
<center><h3>Voulez-vous ajouter un article? </h3></center>
        <li className="nav-item">
         <center> <Link className="but"  to="/addArticle">Ajout articles</Link></center>
        </li>
     
     </ul>
      </nav>
    </div>
  );
};

export default AdminPage;
