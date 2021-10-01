import React,{useState} from 'react'
import Comida from './comida/Comida'

const Home = () => {

        const [comidas,setComidas] = useState([
            {nombre:'Pizza',precio:15},
            {nombre:'Hamburguesa',precio:20},
            {nombre:'Perro',precio:12},
            {nombre:'Salchipapa',precio:13}
        ])
        const [carrito,setCarrito] = useState([])


        //funciones
        const comprar = (plato) =>{
            setCarrito([...carrito,plato])
        }

    
    return ( 
        <div className='row'>
            {
                comidas.map((comida) =>{
                    return(
                        <Comida 
                            plato={comida}
                            comprar={comprar}
                        />  
                    )
                })
            }

            {
                carrito.map((elem)=>{
                    return(
                        <h1 className='text-center'>{elem.nombre}</h1>
                    )
                })
            }
        </div>
     );
}
 
export default Home;