import ListArticles from './components/ListArticles';
import AddArticle from './components/AddArticle';
import EditArticle from './components/EditArticle';
import Menu from './Menu';
import Main from './components/main';
import ListClient from './components/ListClient';
import AddClient from './components/AddClient';
import EditClient from './components/EditClient';
import ListCards from './components/clientSide/ListCards';
import { CartProvider } from "use-shopping-cart";
import Cart from "./components/clientSide/Cart";
import Login from './components/login';
import Admin from "./components/Admin";
import PdfCart from "./components/clientSide/PdfCart";
import Signup from "./components/authentificationClient/Signup";
import Loginclient from './components/authentificationClient/loginClient';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
function App() {
  return(
    <>
    {/*<ListArticles />*/}
    <CartProvider>
     <Router>
      <Menu/>
      <Routes>
        <Route path='/articles' element={<ListArticles/>}/>
        <Route path='/AddArticle' element={<AddArticle/>}/>
        <Route path='/editArticle/:id' element={<EditArticle/>}/>
        <Route path='/Listarticle' element={<ListArticles/>}/>
        <Route path='/' element={<Main/>}/>
        <Route path='/main' element={<Main/>}/>
        <Route path='/client' element={<ListClient/>}/>
        <Route path='/addclient' element={<AddClient/>}/>
        <Route path='/EditClient/:id' element={<EditClient/>}/>
        <Route path='/' element={<ListClient/>}/>
        <Route path='/ListCards' element={<ListCards/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/Admin' element={<Admin/>}/>
        <Route path='/pdfCart' element={<PdfCart/>}/>
        <Route path="/signup" exact element={<Signup/>}/>
        <Route path="/loginclient" exact element={<Loginclient/>}/>
      </Routes>
      </Router>
      </CartProvider>
    </>
  );

}
export default App;
