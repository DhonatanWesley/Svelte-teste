<script lang="ts" >
	import { onMount } from 'svelte';
	import Modal from './Modal.svelte';
	export let vFiltro = "";
	let showModal = false;
	
	let produtos = [
		{id: '0', codigo: 'DW000', nome: 'Agua com gás Crystal 500ml',            un: 'UN', valor: '3,00',      src: 'https://www.drogariaminasbrasil.com.br/media/product/e35/agua-mineral-crystal-natural-com-gas-500ml-e28.jpg'},
		{id: '1', codigo: 'DW001', nome: 'Sprite Lemon Fresh 510ml',              un: 'UN', valor: '4,50',      src: 'https://www.drogariaminasbrasil.com.br/media/product/e7a/refrigerante-sprite-lemon-fresh-510ml-2ca.jpg'},
		{id: '2', codigo: 'DW002', nome: 'Caneta BIC Azul',                       un: 'CX', valor: '40,69',     src: 'https://commerceplus.com.br/uploads/produto_fotos/20200122165954_bicazul.jpg'},
		{id: '3', codigo: 'DW003', nome: 'Caneta BIC Preta',                      un: 'CX', valor: '40,69',     src: 'https://farmaciaindiana.vteximg.com.br/arquivos/ids/214056/70330181120.jpg?v=636906725361830000'},
		{id: '4', codigo: 'DW004', nome: 'Smartphone Iphone 13 GOLD',             un: 'UN', valor: '5.500,00',  src: 'https://m.media-amazon.com/images/I/619m8rLBQSL._AC_SX522_.jpg'},
		{id: '5', codigo: 'DW005', nome: 'Smartphone Iphone 13 SPACE GRAY',       un: 'UN', valor: '6.000,00',  src: 'https://www.pontofrio-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1925070974'},
		{id: '6', codigo: 'DW006', nome: 'Smartphone Iphone XR Preto',            un: 'UN', valor: '3.100,00',  src: 'https://www.extra-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1469097635'},
		{id: '7', codigo: 'DW007', nome: 'Guitarra Michael GM750n Gold Top',      un: 'UN', valor: '1.850,00',  src: 'https://http2.mlstatic.com/D_NQ_NP_805538-MLB43401924093_092020-O.jpg'},
		{id: '8', codigo: 'DW008', nome: 'Monitor Gamer Curvo 29 Polegadas',      un: 'UN', valor: '4.600,00',  src: 'https://images.kabum.com.br/produtos/fotos/157553/monitor-lg-led-29-ultrawide-ips-hdmi-displayport-hdr-com-vesa-e-alto-falante-amd-radeon-freesync-29wl500_1620660434_g.jpg'},
		{id: '9', codigo: 'DW009', nome: 'Macbook Pro Chip M1 32Gb Ran 512Gb HD', un: 'UN', valor: '37.900,00', src: 'https://appledicas.com/wp-content/uploads/2020/11/Apple_new-macbookpro-wallpaper-screen_11102020_big.jpg.large_.jpg'}
	];

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

	    {#if  produto.nome.includes(vFiltro) }

	    	<figure class="produtoItemLista" on:click="{() => ClickItem(produto.id) }" >
				<img src={produto.src} alt={produto.codigo}/>
				<h3>{produto.codigo}</h3>
				<p>{produto.nome}</p>
				<p>{produto.un}</p>
            	<p><b>{produto.valor}</b></p>
			</figure>

		{/if}
		
	{:else}
		<!-- this block renders when photos.length === 0 -->
		<p>loading...</p>
	{/each}

</div>

{#if showModal}
	<Modal on:close="{() => showModal = false}">
		<h2 slot="header">
			<small>{produtos[id_produto].nome}</small>
		</h2>

		<img class="ImgModal" src={produtos[id_produto].src} alt={produtos[id_produto].codigo}/>

		<p>{produtos[id_produto].codigo}</p>
		<p>{produtos[id_produto].nome}</p>
		<p>{produtos[id_produto].un}</p>
		<p>{produtos[id_produto].valor}</p>
		
	</Modal>
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
	}

	img {
		width: 150px;
		height: 150px;
	}

    p {
        margin: auto;
        text-align: center;
    }

	h3 {
        margin-top: 10px;
		margin-bottom: 0px;
        text-align: center;
    }

	.ImgModal{
		width: 100%;
		height: 100%;
	}
</style>
