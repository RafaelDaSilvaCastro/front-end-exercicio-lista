import React, { useState } from 'react';
import Form from './Form'

function List(){

  return(
    <div className="App">
      <header>
        <h2>Lista de Compras:</h2>
      </header>
      <div className="lista-compras-container">
        <ul className="lista-items">
        </ul>
      </div>
    </div>  
  )
}

export default List;