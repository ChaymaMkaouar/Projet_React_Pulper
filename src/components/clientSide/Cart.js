import React from 'react';
import './stylee.css';
import { useShoppingCart } from 'use-shopping-cart';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Minus from '@mui/icons-material/RemoveCircle';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import StripeCheckout from 'react-stripe-checkout';
const Cart = () => {
    const imprimer = () => {
        navigate('/pdfCart');
        };
const { cartDetails, removeItem , clearCart, totalPrice,
cartCount,incrementItem,decrementItem } = useShoppingCart();
const navigate = useNavigate();
const [payment, setpayment] = React.useState(false);
const onToken = (token) => {
// pour finaliser la transaction vous pouvez aussi envoyer le token au


console.log(token);
//vider le cart
clearCart();
//naviguer vers la page d'accueil
navigate('/');
};
const commander = async() => {
setpayment(true);
};
const more = () => {
navigate('/ListCards');
};
const clear = () => {
clearCart();
};
if (cartCount === 0) return <h1>Cart Empty  </h1>;
return (
<div>
{payment ? <StripeCheckout
token={onToken}
stripeKey="pk_test_51OGGNzBFhmNlwePUAjwaqUwiFQWLTeOFH2Ca326hgzyPeq7iRNQKv5fNtDttvKGSbQtFudTlW1HDWCwNrUzkQfPx00z7XJlH3p"
           
amount={totalPrice*100} // Montant en centimes
currency="USD" // Devise
/> :null}
<Grid container spacing={2} columns={15} marginTop={10} marginLeft={10}>
<Grid item xs={8}>
{cartDetails && Object.values(cartDetails).map((item) => {
return (
<Grid item xs={8} key={item.id}>
<img
alt={item.title}
style={{ margin: "0 auto", maxHeight: "100px" }}
src={item.image}
className="img-fluid d-block"
/>
<h5>{item.title}</h5>
<p>Prix: {item.price} TND</p>
<p>Qté: {item.quantity}</p>
<button
onClick={() => {
if (item.quantity < item.qtestock) {
incrementItem(item.id);
} else {
alert("Quantité stock indisponible");
}
}}
>
<AddShoppingCartIcon color="success" />
</button>
{item.quantity > 1 && (
<button
onClick={() => decrementItem(item.id)}
>
<Minus color="warning" />
</button>
)}
{item.quantity === 1 && (
<button onClick={() => removeItem(item.id)}>
<RemoveShoppingCartIcon color="error" />
</button>
) }
<hr />
</Grid>
);
})}
</Grid>
<Grid item xs={5}>
<Button  className='bute' variant="outlined" onClick={more}>
Ajouter des articles
</Button>
<p>Total Articles</p>
<h4>{cartCount}</h4>
<p>Total Payement</p>
<h3>{totalPrice.toFixed(3)} TND</h3>
<hr />
<div>
<Button className='buter'  variant="outlined" onClick={commander}>
Commander
</Button>
<Button  className='buterr'  variant="outlined" onClick={clear}>
Annuler
</Button>
<Button className='button' variant="outlined" onClick={imprimer}>
Imprimer PDF
</Button>
</div>
</Grid>
</Grid>
</div>
);
};
export default Cart;