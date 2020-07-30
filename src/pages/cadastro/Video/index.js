import React from 'react';
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom';

function CadastroVideo(){
    return(
        <PageDefault>

            <h1>Cadastro de Vídeo</h1>

            <Link as="Button" to="/cadastro/categoria">Categoria</Link>
            <Link as="Button" to="/">Ir para Home</Link>
        </PageDefault>
    )
}

export default CadastroVideo;