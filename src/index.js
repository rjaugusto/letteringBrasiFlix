import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter,Switch,Route} from "react-router-dom";
import CadastroVideo from './pages/cadastro/Video'
import Home from './pages/Home/App'
import Categoria from './pages/cadastro/Categoria';

const Pagina404 =  function(){
  return(
   <h1>Erro 404</h1>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} exact />
      <Route path="/cadastro/categoria" component={Categoria} exact />
      <Route component={Pagina404} />

    </Switch>     
  </BrowserRouter>,
  document.getElementById('root')
);


