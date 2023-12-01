
import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import { Product } from './Components/Product';
import Addprod from './Components/Addprod';
import Card from './Components/Card';

function App() {
  const [Produit, setProduit] = useState(Product)
  console.log(Produit)
  const addnewmovie=(x)=>{
    setProduit([...Produit,x])
  }
  return (
    <div className="App">
    <Header />
    <Addprod fnct={addnewmovie}/>
    {Produit.map((el)=><Card data={el}/>)}
      <header className="App-header">


      </header>
    </div>
    )};
export default App;
