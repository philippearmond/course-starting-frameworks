import React from 'react'

import mock from './mock'
import ProdutoComponent from './Components/Produto'
import ListaCarrinhoComponent from './Components/ListaCarrinho'
import ListaProdutosComponent from './Components/ListaProdutos'
import CarrinhoComponent from './Components/Carrinho'



export default function AppComponent() { //posso usar assim, ou export default function() {} ou export default () => {}

    const [carrinhoItens, addItemCarrinho] = React.useState({})   //ela que vai re-renderizar a tela a cada mudança de interface(carrinhoItens)

    function addCarrinho(produto) { //graças ao bind la em cima consigo acesso aos produtos
        if (!carrinhoItens[produto.id]) {  //lembre da estruturaçao do objeto, cada chave do obj carrinho itens é o proprio id de cada obj produto
            addItemCarrinho({
                ...carrinhoItens,                 //os itens que ja estao no carrinhoItens + abaixo
                [produto.id]: {
                    ...produto,
                    quantidade: 1
                }
            })
        } else {
            addItemCarrinho({
                ...carrinhoItens,
                [produto.id]: {
                    ...produto,
                    quantidade: ++carrinhoItens[produto.id].quantidade
                }
            })
        }
    }

    function removeItemCarrinho(produtoId) {
        if (carrinhoItens[produtoId].quantidade <= 1) {
            delete carrinhoItens[produtoId]
            addItemCarrinho({ ...carrinhoItens })
        } else {
            addItemCarrinho({
                ...carrinhoItens,
                [produtoId]: {
                    ...carrinhoItens[produtoId],   // se eu retirar essa linha da erro
                    quantidade: --carrinhoItens[produtoId].quantidade
                }
            })
        }
        console.log(carrinhoItens)
    }

    return (
        <React.Fragment>
            <div className="col-sm-8">
                <ListaProdutosComponent>
                    {mock.map(function (itens, index) {
                        return <ProdutoComponent mock={itens} onAddCarrinho={addCarrinho} key={`lista-produtos${index}`} /> ////a propriedade key é extremamente importante ser add a items que sao renderizados + de um igual(listas) pois, auxilia o algoritmo de diff
                        //..... a identificar através da comparação, se algo mudou de estado e precisa renderizar ou se apenas mudou de lugar e nao precisa renderizar
                    })}
                </ListaProdutosComponent>
            </div>
            <div className="col-sm-4">
                <ListaCarrinhoComponent produtos={carrinhoItens}>
                    {Object.keys(carrinhoItens).map(function (produtoId, index) { //uso o object.keys ou values pq preciso de um array pra percorrer com map, reduce, filter... o object transforma em um array
                        return <CarrinhoComponent produtos={carrinhoItens[produtoId]} onRemoveItemCarrinho={removeItemCarrinho} key={`lista-carrinho${index}`} />
                    })}
                </ListaCarrinhoComponent>
            </div>
        </React.Fragment>
    )
}