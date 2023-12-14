import { Link } from "react-router-dom";
import './style.css';

function ElementsClient(props) {
    return (
        <div className="container">
            <table className="table table-striped table-bordered">
            <thead className="thead-dark">
                    <tr>
                    <th className="text-center">Image</th>
                        <th className="text-center">Nom</th>
                        <th className="text-center">Prénom</th>
                        <th className="text-center">Âge</th>
                        <th className="text-center">Adresse</th>
                        <th className="text-center">Téléphone</th>
                        <th className="text-center">Numéro de carte</th>
                        <th className="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {props.client.map(client => (
                        <tr key={client.id}>
                            <td className="text-center"><img src={client.imageartpetit} alt={client.nom} className="img-fluid rounded-start" width={150} height={50}/></td>
                            <td className="text-center">{client.nom}</td>
                            <td className="text-center">{client.prenom}</td>
                            <td className="text-center">{client.age} ans</td>
                            <td className="text-center">{client.adresse}</td>
                            <td className="text-center">{client.telephone}</td>
                            <td className="text-center">{client.num_du_carte}</td>
                            <td>
                                <button className="button"><Link exact to={`/editClient/${client.id}`}>Modifier</Link></button>
                                <button onClick={() => { props.deleteClient(client.id) }} className="button">Supprimer</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ElementsClient;
