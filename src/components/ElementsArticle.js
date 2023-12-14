import './style.css';
import {Link } from "react-router-dom";
function ElementsArticle(props) {
    return ( 
        <div className="container">
          <div className="row">
        {
        props.articles.map(article =>{
        return(
        <div key={article.id} className="col-sm-4">
        <div className="card" style={{"width": "18rem"}}>
          <img src={article.imageartpetitf} className="card-img-top" alt={article.reference}/>
          <div className="card-body">
            <p className="card-text">{article.marque}</p>
            <hr></hr>
            <p className="card-text">{article.reference}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{article.prixVente} TND</li>
          </ul>
          <div className="card-body">
          <button className="button"><Link exact to={`/editArticle/${article.id}`} >Modifier</Link></button>
          <button onClick={()=>{props.deleteProd(article.id)}} className="button">Supprimer</button>
          </div>
        </div>
                            </div>
                        )
                    })
                }
        </div>
        </div>
             );
        }
        
        export default ElementsArticle;
        