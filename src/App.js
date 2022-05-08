
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Homes/Home/Home';
import About from './Pages/About/About';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import ItemDetails from './Pages/ItemsDetails/ItemDetails';



function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/inventory/:InventoryId' element={<ItemDetails></ItemDetails>}></Route>
        <Route path='/about' element={<About></About>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
