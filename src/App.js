
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Homes/Home/Home';
import About from './Pages/About/About';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import ItemDetails from './Pages/ItemsDetails/ItemDetails';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Login from './Pages/Homes/Login/Login/Login';
import Register from './Pages/Homes/Login/Register/Register';



function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/inventory/:InventoryId' element={<ItemDetails></ItemDetails>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
