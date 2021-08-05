//OBS IMPORTANTISSIMAA!!!!!!!!!!!! ESTOU UTILIZANDO O KEYS POIS, ALGUNS NAVEGADORES NAO DAO SUPORTE AO VALUE MAS O VALUE SERIA MAIS FACIL E SIMPLES, EXEMPLO DE COMO SERIA NO TOTAL
//EXISTE UMA 2° FORMA DE FAZER, SE EU COLOCASSE TUDO DENTRO DE 1 SÓ COMPONENTE, NA PARTE DO RETURN ALI DO MAP EU COLOCARIA TODA FUNÇÃO ACIMA E INVEZ DE PROPS.NOME,
//SERIA PROPS.PRODUTOS[PRODUTOID].NOME
import React from 'react'

export default function ListaCarrinhoComponent(props) {
    return (
        <div className='carrinho'>
          <div className='carrinho__itens'>
            {props.children}
          </div>
          <div className='carrinho__total mt-2 p-3'>
            <h6>
              Total
              <strong>
                {`R$:${valorTotalComponent(props.produtos)}`}
              </strong>
            </h6>
          </div>
        </div>
    )
//props.children entrou nessa parte tb, passou la pra baixo pra que eu possa usar composition na chamada do evento remover, se nao fizesse, teria de passar o evento de componente para componente
}

//ex de Object.values aplicado abaixo >> na parte de chamar carrinhoItens[valorAtual].quantidade eu precisaria usar apenas o valorAtual.quantidade
//já que o values já acessa de fato, os valores das chaves
function valorTotalComponent(carrinhoItens) {
  return Object.keys(carrinhoItens).reduce(function(acc, valorAtual) { //o Object.keys vai me retornar um array de chaves
      return acc + (carrinhoItens[valorAtual].quantidade * carrinhoItens[valorAtual].preco)
  }, 0)
}