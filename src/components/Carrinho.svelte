<script lang="ts">
    import { createEventDispatcher, onDestroy } from 'svelte';
	import DigitacaoItem from './DigitacaoItem.svelte';
    import CarrinhoStore from '../stores/CarrinhoStore';
    import ProdutoStore  from '../stores/ProdutoStore';

    /* Controle Modal */
    const dispatch = createEventDispatcher();
    const close = () => dispatch('close');

    let modal;
	let showModal = false;
	let id_produto;
	let qtdVenda;

    const handle_keydown = e => {
        if (e.key === 'Escape') {
            close();
            return;
        }
    }; 

    /* Lista Itens - Popula Lista */
    let itensCarrinho = [];
	CarrinhoStore.subscribe(data => {
		itensCarrinho = data;
	});

    let listaProduto = [];
    ProdutoStore.subscribe(data => {
        listaProduto = data;
    })

	function editProduto( i, qtd ){
        id_produto = ( i );
		qtdVenda   = qtd;
		showModal  = true
    }

</script>

<!-- HTML -->
<svelte:window on:keydown={handle_keydown}/>
<div class="modal-background" on:click={close}></div>
<div class="modal" role="dialog" aria-modal="true" bind:this={modal}>
	<h1>Carrinho ({itensCarrinho.length})</h1>
	<hr>
    {#each itensCarrinho as itemCarrinho }

		<div class="item">
			<img class="imgProduto"  src="{listaProduto[itemCarrinho.id].src}" alt="imgPorduto" />
			<div class="infoProduto">
				<h3>{listaProduto[itemCarrinho.id].codigo}</h3>
				<p>{listaProduto[itemCarrinho.id].nome} - {listaProduto[itemCarrinho.id].un}</p>
				<p>Valor Unitário R$ {listaProduto[itemCarrinho.id].valor.toFixed(2)}</p>
				<div class="opcoesProdutos">
					<span class="opcao">Excluir</span>
					<span class="opcao" on:click="{() => editProduto(itemCarrinho.id, itemCarrinho.quantidade) }" >Editar</span>
					<span class="opcao">Outra opcao</span>
				</div>				
			</div>
			<div class="vendaProduto">
				<h2 class="infovenda">{itemCarrinho.quantidade.toFixed(2)}</h2>
				<h2 class="infovenda" >R$ <b>{itemCarrinho.valortotal.toFixed(2)}</b></h2>
			</div>
		</div>
		<hr>
    {/each}
	<hr>
	<div class="rodape">
		<button class="btnVoltar" on:click={close}>Continuar Comprando</button>
		<button class="btnFinalizar" >Finalizar Pedido</button>
	</div>
</div>

<!-- Chama Modal Edit Produto -->
{#if showModal}
	<DigitacaoItem on:close="{() => showModal = false}" id = {id_produto} qtdVenda={qtdVenda} />
{/if}

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
		min-height: 600px;
    }

	.item{
		display: flex;
		flex-direction: row;
		margin-left: 5px;
		margin-right: 5px;
	}

	.imgProduto{
		height: 100px;
		width: 100px;
		max-width: 100px;
		max-height: 100px;
	}

	.infoProduto{
		display: flex;
		flex-direction: column;
		flex-basis: 70%;
		justify-content: flex-start;
		align-items: flex-start;
		margin-left: 10px;
		max-height: 100px;

	}
	.vendaProduto {
		display: flex;
		flex-direction: column;
		flex-basis: 30%;
		align-items: flex-end;
		justify-content: flex-start;
		margin-right: 10px;
	}

	.opcoesProdutos{
		margin-top: 5px;
	}

	.opcao{
		margin-right: 10px;
		text-decoration: underline;
		color: blue;
		cursor: pointer;
	}

	.infovenda{
		margin-top: 0;
		margin-bottom: 5px;
	}

	.rodape {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	.btnVoltar{
		display: block;
		width: 200px;
		margin: 5px;
		background-color: var(--vermelho);
		color: white;
	}	

	.btnFinalizar{
		display: block;
		width: 200px;
		margin: 5px;
		background-color: var(--verde-principal);
		color: white;
	}

	h3 {
		margin-top: 0;
		margin-bottom: 5px;
	}

	p {
		margin: 0;
	}
</style>