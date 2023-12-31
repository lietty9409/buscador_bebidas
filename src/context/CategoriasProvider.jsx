import { createContext, useState, useEffect } from "react";
import axios from "axios";

const CategoriasContext = createContext()

const CategoriasProvider = ({children}) => {

    const[categorias,setCategorias] = useState([]) 

    
    useEffect( () => {
        const obtenerCategoria = async() => {
            try {
                const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
    
                const {data} = await axios(url)
                setCategorias(data.drinks)

            } catch (error) {
               console.log(error) 
            }
        }
        obtenerCategoria()
    },[])

    return(
       < CategoriasContext.Provider 
            value={{
                categorias
            }}>
            {children}
       </CategoriasContext.Provider>
    )
}

export default CategoriasContext

export {CategoriasProvider}



