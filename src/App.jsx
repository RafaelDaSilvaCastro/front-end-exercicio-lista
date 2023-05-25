import { useState } from "react";
import "./App.css";

function App() {
  const [itemToAdd,setItemToAdd] = useState();
  const [itens,setItens] = useState([])
  const handleAddItem = (item) => {
    if(item){
      setItens(p => [...p,item])
    }

  }
  return (
    <div className="App">
      <header>
        <h2>Lista de Compras:</h2>
      </header>
      <div className="lista-compras-container">
        <ul className="lista-items">
          {itens.map((item,index)=> {
            return <li key={index}>{item}</li>
          })}
        </ul>
      </div>
      <fieldset>
          <div className="form-group mb-3">
            <label htmlFor="item">Adicionar Novo Item na Lista:</label>
            <input type="text" className="form-control" id="item" onChange={(e)=> setItemToAdd(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-primary" onClick={()=> handleAddItem(itemToAdd)}>
            Adicionar
          </button>
        </fieldset>
    </div>
  );
}

export default App;
