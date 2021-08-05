import React from 'react'

export default function CarrinhoComponent(props) {
    return (
        <div className='card carrinho__item'>
          <div className='card-body'>
            <h5 className='card-title'>
              {props.produtos.nome}
            </h5>
            <p className='card-text'>
              {`Preço Unidade: R$${props.produtos.preco},00 | Quantidade: ${props.produtos.quantidade}`}
            </p>
            <p className='card-text'>
              {`Valor: R$${(props.produtos.preco * props.produtos.quantidade)},00`}
            </p>
            <button className='btn btn-danger btn-sm btn-remove' onClick={props.onRemoveItemCarrinho.bind(null, props.produtos.id)} >
              Remover
            </button>
          </div>
        </div>
    )
}