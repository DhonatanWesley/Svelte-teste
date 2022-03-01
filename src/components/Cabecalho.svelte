<script lang="ts" >	
	import CarrinhoStore from '../stores/CarrinhoStore';
	import listaItemCarrinho from '../stores/CarrinhoStore';
	import Carrinho      from '../components/Carrinho.svelte';

	export let vFiltroDigitado = "";
	export let vQtdCarrinho: number = 0;

	let cliente = "Dhonatan Wesley"
	let showModal = false;

	/* Lista Itens - Popula Lista */
    let itensCarrinho = [];
	CarrinhoStore.subscribe(data => {
		itensCarrinho = data;
		vQtdCarrinho = itensCarrinho.length;
	});
	
	function abreCarrinho(){
		console.log("teste")
		showModal = true
    }

	//itensCarrinho = listaItemCarrinho.subscribe;
</script>

<div class="cabecalho">    
    <div class="logoempresa">
		<img class="imagemLogo" src="images/Logo.png" alt="logo empresa" />
    </div>
	<div class="pesquisa" >
		<input class="inputPesquisa" bind:value={vFiltroDigitado} placeholder="Pesquisar..." />
	</div>
	<div class="clienteLogado">
		<span>Cliente: <b>{cliente}</b></span>
		{#if vQtdCarrinho > 0 }
			<button class="btnCarrinho" alt="carrinho" on:click="{() => abreCarrinho() }">Carrinho <b>({vQtdCarrinho})</b></button>
		{/if}
	</div>
</div>

{#if showModal}
	<Carrinho on:close="{() => showModal = false}"/>
{/if}

<style>
	.cabecalho {
		background-color: var(--cinza-4);
        height: 4rem;
		top: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.logoempresa {
		height: 40px;
		width: 200px;
		flex-basis: 25%;
		display: flex;
		align-items: center;
		justify-content: end;
	}
	.imagemLogo {
		max-width: 100%;
		max-height: 100%;
	}
	.pesquisa {
		display: flex;
		margin-top: 8.5px;
		max-width: 550;
		flex-basis: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.inputPesquisa{
		width: 90%;
	}
	.clienteLogado{
		flex-basis: 25%;
		display: flex;
		align-items: center;
		justify-content: left;
	}

	.btnCarrinho{
		margin-left: 10px;
		margin-top: 5px;
		width: 120px;
		background-color: var(--verde-principal);
		justify-content: center;
		color: white;
	}

</style>