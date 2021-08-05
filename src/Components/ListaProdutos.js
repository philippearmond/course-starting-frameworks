//Para ter um componente generico(que posso utilizar novamente em uma situação diferente) devo alterar o nome desse componente para Card
//explicação sobre em 01:00 a 01:35 aula de separação de componentes
import React from 'react'

export default props => (  //vai receber o mock p/ tratamento
    <div className='row loja'>
        {props.children}
    </div>
)
//o props.children integra o filho de listaProdutoComponente, acoplado em AppComponente

//ao passar atributos, esses atributos entrarao como parametro nessa função! Sendo assim, é possivel definir quais valores do objeto quero acessar, caso n queira o objeto todo
//tb é possivel incluir um nó filho, esse exemplo é entitulado como composição, mas para isso preciso definir uma posição onde injetar o filho.