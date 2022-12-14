import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route 
          path='/' 
          element={<ItemListContainer/>} 
          />
          <Route 
          path='/detalle' 
          element={<ItemDetailContainer/>} 
          />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
