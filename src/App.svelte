<script lang="ts" >
	let cliente = "Dhonatan Wesley"
	import Cabecalho from './components/Cabecalho.svelte';
	import ListaProduto from './components/ListaProduto.svelte';

</script>

<main>
	<Cabecalho/>
	
	<div class="listagemproduto">

		<ListaProduto />

	</div>

</main>

<style>
	:root{
		--verde-principal: #009F4A;
		--cinza-1: #333333;
		--cinza-2: #929292;
		--cinza-3: #D1D1D1;
		--cinza-4: #ECECEC;
	}	
	main {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
	}

	.listagemproduto{
		margin-top: 20px;
		align-items: center;
		display: flex;
		align-items: center;
		justify-content: center;
	}

</style>