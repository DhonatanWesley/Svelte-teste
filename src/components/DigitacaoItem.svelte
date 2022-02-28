<script lang="ts">
    import { createEventDispatcher, onDestroy } from 'svelte';
    import ProdutoStore from '../stores/ProdutoStore';
    import { listaItemCarrinho } from '../stores/CarrinhoStore';
    //import { itemCarrinhoBean } from '../stores/CarrinhoStore';

    export let id;

    /* Controle Modal */
    const dispatch = createEventDispatcher();
    const close = () => dispatch('close');

    let modal;

    const handle_keydown = e => {
        if (e.key === 'Escape') {
            close();
            return;
        }
    };  

    /* Lista Produtos - Popula Lista */
    let produtos = [];
	ProdutoStore.subscribe(data => {
		produtos = data;
	});
    
    /* Calcula o valor total */
    let qtdVenda: number = 1;
    $: valorTotal = ( produtos[id].valor * qtdVenda)

    function somaQtd(): void{
        qtdVenda = qtdVenda + 1
    }
    function subtraiQtd(){
        if (qtdVenda > 1){
            qtdVenda = qtdVenda - 1
        } 
    }

    /* Carrinho */
    const adicionarCarrinho = () => {
        
        let itemCarrinho =  { id: id, quantidade: qtdVenda.toString(), valortotal: valorTotal.toString() }; //new itemCarrinhoBean(id, qtdVenda, valorTotal);
        $listaItemCarrinho = [...$listaItemCarrinho, itemCarrinho ];
        close();
    }

</script>

<svelte:window on:keydown={handle_keydown}/>
<div class="modal-background" on:click={close}></div>
<div class="modal" role="dialog" aria-modal="true" bind:this={modal}>
	<h1>Produto: {produtos[id].codigo} </h1>
	<hr>
	<div class="DigitaItem">
        <img class="ImgProduto" src={produtos[id].src} alt={produtos[id].codigo}/>
        <div class="InfoProdutos">
            <p>{produtos[id].nome}</p>
            <p>{produtos[id].un}</p>
            <div class="InfoVenda">
                <div class="infoQtd">
                    <p><b>Valor Unitário:  R$ {produtos[id].valor.toFixed(2)}</b></p>
                    <p class="txtQtdTotalD"><b>Quantidade:</b></p>
                    <div class="DigitaQtd">
                        <button class="btnSubtrai" on:click="{() => subtraiQtd()}"><b>-</b></button>
                        <input  class="inputQtd" type="number" bind:value={qtdVenda}/>
                        <button class="btnSoma" on:click="{() => somaQtd() }"><b>+</b></button>
                    </div>
                </div>
                <div class="infoValorTotal">
                    <p class="txtVlrTotalD" ><b>Total:</b></p>
                    <h2 class="txtVlrTotalV" ><b>R$ {valorTotal.toFixed(2)}</b></h2>
                </div>
            </div>
        </div>
    </div>
	<hr>

	<div class="rodape">
		<button class="btnCancelar" on:click={close}>Cancelar</button>
		<button class="btnAdicionar" on:click={adicionarCarrinho}>Adicionar ao Pedido</button>
	</div>
</div>

<style>
    /* Controle MOdal Modal */
    .modal-background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.3);
	}
	.modal {
		position: absolute;
		left: 50%;
		top: 50%;
		width: calc(100vw - 4em);
		max-width: 1000px;
		max-height: calc(100vh - 4em);
		overflow: auto;
		transform: translate(-50%,-50%);
		padding: 1em;
		border-radius: 0.5em;
		background: white;
    }

    .DigitaItem{
        display: flex;
        flex-direction: row;
    }
    .ImgProduto{
        height: 500px;
        width: 500px;
        margin-left: 20px;
        flex-basis: 50%;
    }
    .InfoProdutos{
        flex-basis: 50%;
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-left: 20px;
        margin-right: 20px;
    }
    .InfoVenda{
        display: flex;
        align-items: flex-end;
        width: 100%;
        height: 100%;
    }
    .infoQtd{
        flex-direction: column;
        align-items: flex-end;
        flex-basis: 50%;
    }
    .DigitaQtd{
        display: flex;
        align-items: flex-end;
        width: 100%;
        height: 100%;
    }
    .txtQtdTotalD{
        margin-bottom: 15px;
    }
    .btnSubtrai{
        width: 35px;
    }
    .btnSoma{
        width: 35px;
    }
    .inputQtd{
        width: 80px;        
        text-align: right;
        margin-left: 5px;
        margin-right: 5px;
    }
    .infoValorTotal{
        flex-basis: 50%;
        display: flex;
        justify-content: flex-end;
        flex-direction: column;
        align-items: flex-end;
        width: 50%;
        height: 100%;
    }
    .txtVlrTotalV{
        margin-bottom: 10px;
        margin-top: 0px;
    }

    /* Rodapé */
	.rodape{
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
	.btnCancelar {
		display: block;
		width: 200px;
		margin: 5px;
		background-color: var(--vermelho);
        color: white;
        font: bold;
	}
	.btnAdicionar {
		display: block;
		width: 200px;
		margin: 5px;
		background-color: var(--verde-principal);
        color: white;
        font: bold;
	}
</style>