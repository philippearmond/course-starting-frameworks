import React from 'react'

export default function (props) { //posso aplicar destructure aqui e utilizar somente as propriedades que queira trabalhar!
    return (
        <div className='col-sm-4 mb-3'>
            <div className='card loja__item'>
                <img className='card-img-top' src={props.mock.imagem} />
                <div className='card-body'>
                    <h5 className='card-title'>
                        {props.mock.nome}
                    </h5>
                    <small>
                        {`${props.mock.preco},00`}
                    </small>
                    <p className='card-text'>
                        {props.mock.descricao}
                    </p>
                    <button className='btn btn-primary' onClick={props.onAddCarrinho.bind(null, props.mock)}>
                        Adicionar
              </button>
                </div>
            </div>
        </div>
    )
}
//O BIND É UTILIZADO ACIMA POIS PRECISO PASSAR UM PARAMETRO PARA A FUNÇÃO PARA QUE SEJA RECONHECIDO QUAL PRODUTO ESTOU CLICANDO. SE EU SIMPLESMENTE INVOCAR A FUNÇÃO E PASSAR O PARAMETRO, TODA VEZ QUE A FUNÇÃO PRODUTOCOMPONENTE FOR CHAMADA A FUNÇÃO DE CLICK TB SERIA INVOCADA JUNTO

