<script lang="ts" >
	let cliente = "Dhonatan Wesley"

</script>

<div class="cabecalho">
    
    <div class="logoempresa">
		<img class="imagemLogo" src="images/Logo_Stormsystem.png" alt="logo empresa" />
    </div>

	<div class="pesquisa" >
		
		<input class="inputPesquisa" placeholder="Pesquisar..." />

		<button class="botaoPesquisar" >
            <img class="imagemPesquisar" src="images/ic_cinza_pesquisa.png" alt="icone pesquisar">
        </button>

	</div>

	<div class="clienteLogado">
		<span>Cliente: <b>{cliente}</b> </span>
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
		height: 30px;
		width: 180px;
		/*margin-right: 10%;*/
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

    .botaoPesquisar{
        max-width: 35px;
		max-height: 35px;
        background-color:var(--cinza-1) ;
    }

	.imagemPesquisar {
		max-width: 100%;
		max-height: 100%;
	}

	.clienteLogado{
		flex-basis: 25%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

</style>