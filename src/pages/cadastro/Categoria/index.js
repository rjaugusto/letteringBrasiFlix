import React from 'react';
import PageDefault from '../../../components/PageDefault';
import{Link} from 'react-router-dom'

function Categoria(){
    return(<PageDefault>

       <h1>Cadastrar Categoria</h1> 

       <Link as="Button" to="/">Ir para Home</Link>


    </PageDefault>)
        
    
}

export default Categoria;