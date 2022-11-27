import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

//montar funcio para inicial la app
const mount = (el) => {
  ReactDom.render(
    <App />,
    el
  );
};

//si estamos en dev o aislado llamamos mount
if (process.env.NODE_ENV === 'development'){
  const devRoot = document.querySelector('#_marketing-dev-root');

  if (devRoot){
    mount(devRoot);
  }
}

//estamos corriendo en el contenedor
export { mount };