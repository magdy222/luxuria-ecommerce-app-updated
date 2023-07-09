
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import "react-toastify/dist/ReactToastify.css"
import ProductDetails from './components/content/ProductDetails';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import CartPage from './components/navs/CartPage';
import Login from './components/navs/LoginPage';
import NavBar from './components/navs/NavBar';
import SignUp from './components/navs/RegisterPage';
import {ToastContainer} from 'react-toastify'
import { useTranslation } from 'react-i18next';
import { useAuth } from './firebase';






function App() {
  
  const { t } = useTranslation()

  const currentUser = useAuth()

  console.log(currentUser)

  return (
  
    <BrowserRouter>
      <div className="App" style={{ direction: t('dir') }}>
      <ToastContainer/>
        <NavBar/>
      <Routes>
          <Route path='/register' element={<SignUp/>}/>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/cart' element={<CartPage/>}/>
          <Route path='/register' element={<SignUp/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='product/:productId' element={<ProductDetails/>}/>
      </Routes>
        
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
