import React, { useState } from 'react';

function Form(){
  const [text, setText] = useState(null)

  return(
    <div className='Fomr'>
        <form className="form-add-item" >
        <fieldset>
          <div className="form-group mb-3">
            <label htmlFor="item">Adicionar Novo Item na Lista:</label>
            <input
              type="text"
              className="form-control" 
              id="item"
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <button 
            type="button"
            className="btn btn-primary"
            onClick={() => console.log(text)}
          >
            Adicionar
          </button>
        </fieldset>
      </form>
    </div>
  )
}

export default Form;