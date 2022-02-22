<script lang="ts" >
	import { onMount }  from 'svelte';
	import Cabecalho    from './components/Cabecalho.svelte';
	import ListaProduto from './components/ListaProduto.svelte';
	
	/*import {Page, Navbar, List, ListItem} from 'framework7-svelte'; */

	let cliente = 'Dhonatan Wesley'
	let vFiltro = '';

</script>

<main>
	<div class="cabecalho">
		<Cabecalho bind:vFiltroDigitado={vFiltro}/>
	</div>
	<div class="listagemproduto">
		<ListaProduto vFiltro={vFiltro}/>
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

	.cabecalho{
        top: 0px;
        left: 0px;
        right: 0px;
	}

	.listagemproduto{
		margin-top: 20px;
		align-items: center;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 50px;
	}

</style>