import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { signInWithEmailAndPassword, sendPasswordResetEmail} from
"firebase/auth";
import {auth} from "../../fireConfig";
import './sty.css';
import { Link, useNavigate } from 'react-router-dom';
const LoginClient = () => {
const navigate=useNavigate();
const [email, setEmail] = useState();
const [password, setPassword] = useState();
const handleSubmit = (e) => {
e.preventDefault();
console.log(`submitted email:
${email} password: ${password}`);
signInWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
const user = userCredential.user;
console.log(user);
navigate("/ListCards")
})
.catch((error) => {
const errorCode = error.code;
const errorMessage = error.message;
console.log(errorCode, errorMessage);
alert(errorMessage);
});
}
const forgotPass=()=>{
if(email){
sendPasswordResetEmail(auth, email)
.then(() => {
console.log("Password reset email sent!")
})
.catch((error) => {
console.log(error);
});
}
else
alert ('Type your Email');
}
return (
<Container component="main" maxWidth="xs">
<Box
sx={{
marginTop: 20,
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
border:"solid 2px gray",
padding:"40px",
width: "470px",
}}
>
<Typography component="h1" variant="h5">
Login
</Typography>
<Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1
}}>
<TextField
margin="normal"
required
fullWidth
id="email"
label={<EmailIcon />}
name="email"
autoComplete="email"
autoFocus
onChange={({ target }) =>
setEmail(target.value)}
/>
<TextField
margin="normal"
required
fullWidth
name="password"
label={ <LockIcon />}
type="password"
id="password"
autoComplete="current-password"
onChange={({ target}) =>
setPassword(target.value)}
/>
<Button className="er"
type="submit"
fullWidth
variant="contained"
color="secondary"
onClick={(event)=>handleSubmit(event)}

>
Se connecter
</Button>
<Grid container>
<Grid item xs>
<Link onClick={()=>forgotPass()}>
Mot de passe oublié?</Link>
</Grid>
<Grid item>
<Link to="/signup">
Vous n'avez pas de compte ? S'inscrire</Link>
</Grid>
</Grid>
</Box>
</Box>
</Container>
)
};
export default LoginClient;