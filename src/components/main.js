// Importez React
import React from 'react';
import './s.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import Button from '@mui/material/Button';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

// Composant principal
function Main() {
  return (
    <div className="cont">
              <h1 id="main">Bienvenue dans Pulper</h1>
            
            {/* <p>Pour plus d'informations check les articles</p> */}
     <center> <img src="images/main.jpeg" height={700} width={1400}/></center>
   <div className='footer'>
    <h5 className="title">Contact Us</h5>
    <hr/>
    <center>
    <Button color="inherit"><FacebookIcon fontSize="large" className="et"/></Button>
    <Button color="inherit"><InstagramIcon fontSize="large" className="et"/></Button>
    <Button color="inherit"><TwitterIcon fontSize="large" className="et"/></Button>
    </center>
   
<center><p className="copy">Copyright Pulper © 2023. All rights reserved.</p></center>
</div>
</div>


    
    
    
 
  )
}

// Exportez le composant principal
export default Main;
