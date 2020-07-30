import React,{useState} from 'react';
import PageDefault from '../../../components/PageDefault';
import{Link} from 'react-router-dom'

function Categoria(){

    const categorias = []

    const valoresIniciais = {
      nome:'Categoria Inicial',
      descricao:'Descrção Inicial',
      cor:'#000'
    }

    let [values,setValues] = useState(valoresIniciais); 

    return(
        <PageDefault>
      <h1>Cadastro de Categoria: {values.nome} {values.descricao} {values.cor}</h1>

      <form onSubmit={function handleSubmit(infosDoEvent){
          infosDoEvent.preventDefault()
        //  setCategorias([...categorias,values]);
      } } >

        <div>
          <label>
            Nome da Categoria:
            <input
              type="text"
              value={values.nome} 
              onChange={
                  (infosDoEvento) => {
                    values.nome = infosDoEvento.target.value
                    
                  }
              }
            />
          </label>
        </div>

        <div>
          <label>
            Descrição:
            <textarea
      
              value={values.descricao} 
              onChange={
                  (infosDoEvento) => {
                    //setDescricao(infosDoEvento.target.value)
                  }
              }
            />
          </label>
        </div>  

        <div>  
          <label>
            Cor:
            <input
              type="color"
              value={values.cor} 
              onChange={
                  (infosDoEvento) => {
                  //  setCor(infosDoEvento.target.value)
                  }
              }
            />
          </label>
        </div>
        <button>
          Cadastrar
        </button>
      </form>

        <ul>
        {categorias.map(
            (categoria,indice) =>{
                return <li key={`${categoria} ${indice}`}> {categoria}</li>
            }
        )}
        </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
        )
        
    
}

export default Categoria;