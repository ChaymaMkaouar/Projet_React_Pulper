import './style.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function AddClient() {
    const navigate=useNavigate();
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [age, setAge] = useState("");
    const [adresse, setAdresse] = useState("");
    const [num_du_carte, setCarte] = useState("");
    const [telephone, setTele] = useState("");
    const [imageartpetit, setImageartpetit] = useState("");
    const handleSubmit = (e) => {
    e.preventDefault();
    const newClient = {
        nom,
        prenom,
        age,
        adresse,
        num_du_carte,
        telephone,
        imageartpetit
    };
    axios.post("http://localhost:3001/client",newClient)
.then(res => {
console.log(res);
navigate("/client")
})
.catch(error=>{
console.log(error)
alert("Erreur ! Insertion non effectuée")
})
}
return (
<div className="container">
<h2>Ajout d'un client </h2>
<form onSubmit={handleSubmit}>
<div className="grid gap-3">
<div className="col-sm-5 p-2 g-col-6">
<input className="form-control"
placeholder="nom"
type="text"
value={nom}
onChange={e => setNom(e.target.value)}
/>
</div>
<div className="col-sm-5 p-2 g-col-6">
<input className="form-control"
placeholder="prenom"
name="prenom"
type="text"
value={prenom}
onChange={e => setPrenom(e.target.value)}
/>
</div>
<div className="col-sm-5 p-2 g-col-6">
<input className="form-control"
placeholder="age"
type="number"
value={age}
onChange={e => setAge(e.target.value)}
/>
</div>
<div className="col-sm-5 p-2 g-col-6">
<input className="form-control"
placeholder="adresse"
type="text"
value={adresse}
onChange={e => setAdresse(e.target.value)}
/>
</div>
<div className="col-sm-5 p-2 g-col-6">
<input className="form-control"
placeholder="numéro du carte"
name="num_du_carte"
type="number"
value={num_du_carte}
onChange={e => setCarte(e.target.value)}
/>
</div>
<div className="col-sm-5 p-2 g-col-6">
<input className="form-control"
placeholder="téléphone"
type="number"
value={telephone}
onChange={e => setTele(e.target.value)}
/>
</div>
<div className="col-sm-5 p-2 g-col-6">
<input className="form-control"
placeholder="Image"
type="text"
value={imageartpetit}
onChange={e => setImageartpetit(e.target.value)}
/>
</div>
<div>{imageartpetit ?<img src={"/"+imageartpetit} alt=""
width="70"/>:null}</div>
<div>
<button className="bout">Valider</button>
</div>
</div>
</form>
</div>
);
}

export default AddClient;