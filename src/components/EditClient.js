import { useState,useEffect  } from 'react';
import axios from 'axios';
import { useNavigate , useParams} from 'react-router-dom';
function EditClient() {
const navigate=useNavigate();
const [nom, setnom] = useState("");
const [prenom, setprenom] = useState("");
const [age, setage] = useState("");
const [adresse, setadresse] = useState("");
const [num_du_carte, setnum_carte] = useState("");
const [telephone, settelephone] = useState("");
const [imageartpetit, setImageartpetit] = useState("");
const {id} = useParams();
useEffect(()=>{
axios.get('http://localhost:3001/client/'+id).then(res => {
setnom(res.data.nom);
setprenom(res.data.prenom);
setage(res.data.age);
setadresse(res.data.adresse);
setnum_carte(res.data.num_du_carte);
settelephone(res.data.telephone);
setImageartpetit(res.data.imageartpetit);
})
},[id]);
const handleSubmit = (e) => {
e.preventDefault();
const newClient = {
id:id,
nom,
prenom,
age,
adresse, 
num_du_carte, 
telephone,
imageartpetit
};
    axios.put("http://localhost:3001/client/"+id,newClient)
.then(res => {  
console.log(res);
navigate("/client")
})   
.catch(error=>{
console.log(error)
alert("Erreur ! Modification non effectuée")
})

}

return ( 
<>
        <div className="container">
        <h2>Modification d'un client</h2>
        <form onSubmit={handleSubmit}>
    <div className="grid gap-3">
    <div className="col-sm-5 p-2 g-col-6">
        <input className="form-control"
          placeholder="nom"
          type="text"
          value={nom}
          onChange={e => setnom(e.target.value)}
          />
     </div>
     <div className="col-sm-5 p-2 g-col-6">
        <input className="form-control"
          placeholder="prenom"
          name="prenom"
          type="text"
          value={prenom}
          onChange={e => setprenom(e.target.value)}
          />
     </div>
     <div className="col-sm-5 p-2 g-col-6">
        <input className="form-control"
          placeholder="age"
          type="number"
          value={age}
          onChange={e => setage(e.target.value)}
          />
     </div>
     <div className="col-sm-5 p-2 g-col-6">
        <input className="form-control"
          placeholder="adresse"
          type="text"
          value={adresse}
          onChange={e => setadresse(e.target.value)}
          />
     </div>
     <div className="col-sm-5 p-2 g-col-6">
        <input className="form-control"
          placeholder="num_du_carte"
          name="num_du_carte"
          type="number"
          value={num_du_carte}
          onChange={e => setnum_carte(e.target.value)}
          />
     </div>
     <div className="col-sm-5 p-2 g-col-6">
        <input className="form-control"
          placeholder="telephone"
          type="number"
          value={telephone}
          onChange={e => settelephone(e.target.value)}
          />
          <div className="col-sm-5 p-2 g-col-6">
<input className="form-control"
placeholder="Image"
type="text"
value={imageartpetit}
onChange={e => setImageartpetit(e.target.value)}
/>
</div>
     </div>
     <div>{imageartpetit ?<img src={"/"+imageartpetit} alt={imageartpetit} 
     width="70"/>:null}</div>
 
     <div>
    <button className="bout">Valider</button>
    </div>  
    </div>
    </form>
   
  </div>
  </>
     );
}

export default EditClient;
