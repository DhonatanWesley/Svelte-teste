<script lang="ts" >	
	export let vFiltroDigitado = "";
	export let vQtdCarrinho: number = 0;
	let cliente = "Dhonatan Wesley"
</script>

<div class="cabecalho">    
    <div class="logoempresa">
		<img class="imagemLogo" src="images/Logo.png" alt="logo empresa" />
    </div>
	<div class="pesquisa" >
		<input class="inputPesquisa" bind:value={vFiltroDigitado} placeholder="Pesquisar..." />
	</div>
	<div class="clienteLogado">
		<span>Cliente: <b>{cliente}</b> </span>
		{#if vQtdCarrinho > 0 }
		<img class="btnCarrinho" src="images/ic_verde_carrinho.png"  alt="carrinho"/>
	{/if}
	</div>
</div>

<style>
	:root{
		--verde-principal: #009F4A;
		--cinza-1: #333333;
		--cinza-2: #929292;
		--cinza-3: #D1D1D1;
		--cinza-4: #ECECEC;
	}	
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
		justify-content: center;
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
		justify-content: center;
	}

	.btnCarrinho{
		margin-left: 10px;
		height: 30px;
		width: 30px;
	}

</style>