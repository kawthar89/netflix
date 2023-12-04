
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
  const [search, setsearch] = useState("")
  
  return (
    <div className ="App">
    <div>
    <Header />
    <input type='texte' placeholder='search' onChange={(e)=>setsearch(e.target.value)}></input>
    </div>
   <div className='add'>
    <Addprod fnct={addnewmovie}/>
    </div>
  
    <div className="carddata">
    {Produit.filter((e)=>e.name.toLowerCase().includes(search.toLowerCase())).map((el)=><Card data={el}/>)}
    {Produit.filter((e)=>e.rating.toLowerCase().includes(search.toLowerCase())).map((el)=><Card data={el}/>)}
    </div>
      <header className="App-header">


      </header>
    </div>
    )};
export default App;
