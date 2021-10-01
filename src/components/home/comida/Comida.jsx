import React from 'react'


const Comida = ({plato,comprar}) => {
    return ( 
        <div className='col-md-4 m-3 p-2'>
            <div class="card" style={{width: '18rem'}}>
                <div class="card-body">
                    <h5 class="card-title">{plato.nombre}</h5>
                    <p>{plato.precio}</p>
                    <button onClick={() => comprar(plato)} class="btn btn-primary w-100">Comprar</button>
                </div>
            </div> 
        </div>
     );
}
 
export default Comida;