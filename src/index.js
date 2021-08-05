//DICAAA!!! PARA SABER SE PRECISO EXPORTAR OU IMPORTAR UMA FUNÇÃO PARA O CODIGO BASTA OBSERVAR SE SERÁ INVOCADA
import React from 'react'
import ReactDOM from 'react-dom'

import AppComponent from './App' //todo arquivo .js pode ser omitido o .js
//lembre que o appComponent é a função que manda renderizar tudo, por isso é colocada somente ela aqui (gerar bundle)!!!


ReactDOM.render(             //essa parte é mantida assim mesmo no JSX
    React.createElement(AppComponent),
    document.querySelector('#app')
)