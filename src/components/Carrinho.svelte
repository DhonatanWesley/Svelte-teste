<script lang="ts">
    import CarrinhoStore from '../stores/CarrinhoStore';

    /* Lista Itens - Popula Lista */
    let itensCarrinho = [];
	CarrinhoStore.subscribe(data => {
		itensCarrinho = data;
	});

</script>

{#each itensCarrinho as itemCarrinho }

    <h3> {itemCarrinho.id} - { itemCarrinho.quantidade} - {itemCarrinho.valortotal} </h3>
    
{/each}

<style>

</style>