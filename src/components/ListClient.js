import axios from 'axios';
import {useEffect,useState} from 'react';
import ElementsClient from './ElementsClient';
function ListClient() {
    const[client,setClient]=useState([]);
    
    useEffect(() => {
        axios.get("http://localhost:3001/client")
        .then((response)=>setClient(response.data));
       }, []);
       const deleteClient = async (id) => {
        if (!window.confirm("Are you sure you want to delete")) {
        return;
        }
        axios.delete('http://localhost:3001/client/' +id)
        .then(() => {
        console.log('successfully deleted!')
        setClient(prevClient => prevClient.filter((client) =>
        client.id!==id));
        }).catch((error) => {
        console.log(error)
        })
        }        
    return ( 
        <>
        <center><h2>Liste des clients </h2></center>
        <ElementsClient client={client} deleteClient={deleteClient} />
        </>
     );
}

export default ListClient;
