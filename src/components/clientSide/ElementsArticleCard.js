import { useState } from 'react';
import { useShoppingCart } from 'use-shopping-cart';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import './stylee.css';
import { Link } from 'react-router-dom';

const ElementsArticleCard = (props) => {
    const { cartCount, addItem } = useShoppingCart();
    const [search, setSearch] = useState('');

    const addToCart = (product) => {
        const target = {
            id: product.id,
            title: product.reference,
            image: product.imageartpetitf,
            price: product.prixVente,
            qtestock: product.qtestock,
            quantity: 1
        };

        addItem(target);
        console.log('Item added to cart:', target);
    };

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const filteredArticles = props.articles.filter((product) =>
        product.reference.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <AppBar position="static" color="default">
                <Toolbar style={{ justifyContent: 'space-between' }}>
                    <Button color="inherit">
                        <Link to="/cart">
                            {cartCount}
                            <ShoppingCartTwoToneIcon fontSize="large" className="az" />
                        </Link>
                    </Button>
                    <center>
                        <form className="d-flex" role="search">
                            <input
                                type="search"
                                onChange={handleSearch}
                                value={search}
                                placeholder="Recherchez tout ce que vous voulez"
                                aria-label="Search"
                            />
                            <Button color="inherit" className="but">
                                <SearchTwoToneIcon fontSize="large" className="erz" />
                            </Button>
                        </form>
                    </center>
                </Toolbar>
            </AppBar>
            <div className="row">
                {filteredArticles.map((product) => (
                    <article className="col-sm-3" key={product.id}>
                        <div className="card">
                            <img
                                src={product.imageartpetitf}
                                className="card-img-top p-5"
                                alt={product.reference}
                            />
                        </div>
                        <div className="text-center">
                            <div>{product.reference.substr(0, 20)} ... </div>
                            <div>Prix : {product.prixVente} TND </div>
                        </div>
                        <div className="text-center">
                            <button
                                disabled={product.qtestock <= 1}
                                className="button"
                                onClick={() => addToCart(product)}
                            >
                                Ajouter au panier
                            </button>
                        </div>
                    </article>
                ))}
            </div>
        </>
    );
};

export default ElementsArticleCard;
