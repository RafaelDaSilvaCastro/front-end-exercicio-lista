import React, { useState } from 'react';
import Form from './Form';
import List from './List';

function ListaCompras(){
  const [compras, setCompras] = useState([1,2,3])

  console.log(compras)
  

  return(
    <div className='listaCompra'>
      <List>
        {compras.map( (item) => (item))}
      </List>
      <Form/>
    </div>
  )
}


export default ListaCompras;