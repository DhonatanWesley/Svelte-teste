<script lang="ts" >
	import { onMount } from 'svelte';
	import DigitacaoItem from './DigitacaoItem.svelte';
	import ProdutoStore from '../stores/ProdutoStore.js';
	
	export let vFiltro = "";
	let showModal = false;

	let produtos = [];

	ProdutoStore.subscribe(data => {
		produtos = data;
	});

	/*
	onMount(async () => {
		const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=60`);
		produtos = await res.json();
	});
	*/

	let id_produto;

    function ClickItem( i ){
        id_produto = ( i );
		showModal  = true
    }

</script>

<div class="produtoLista">
	{#each produtos as produto}

	    {#if  produto.nome.toUpperCase().includes(vFiltro.toUpperCase()) }

	    	<figure class="produtoItemLista" on:click="{() => ClickItem(produto.id) }" >
				<img src={produto.src} alt={produto.codigo}/>
				<div class="DadosProduto">
					<p><b>{produto.codigo}</b></p>
					<p>{produto.nome}</p>
					<p>{produto.un}</p>
            		<p><b>{produto.valor.toFixed(2)}</b></p>
				</div>
			</figure>

		{/if}
		
	{:else}
		<!-- this block renders when photos.length === 0 -->
		<p>loading...</p>
	{/each}

</div>

{#if showModal}
	<DigitacaoItem on:close="{() => showModal = false}" id = {produtos[id_produto].id} />
<!--
	<Modal on:close="{() => showModal = false}">
		<h2 slot="header">Produto: {produtos[id_produto].codigo}</h2>

		<DigitacaoItem id = {produtos[id_produto].id}/>
		
	</Modal>
-->
{/if}

<style>
	.produtoLista {
		width: 800px;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-gap: 30px;
	}

	.produtoItemLista {
		width: 100%;
		margin: 0;
		cursor: pointer;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border: 5px;
		border-radius: 5px;
		box-shadow: 1px 1px 1px 1px var(--cinza-3);
	}

	img {
		width: 150px;
		height: 150px;
		margin-top: 5px;
	}

    p {
        margin: auto;
        text-align: center;
    }

	.DadosProduto {
        margin-top: 15px;
		margin-bottom: 10px;
        text-align: center;
    }
</style>
