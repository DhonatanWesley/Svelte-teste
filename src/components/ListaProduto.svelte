<script lang="ts" >
	import { onMount } from 'svelte';

	let produtos = [];


    onMount(async () => {
		const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=10`);
		produtos = await res.json();
	});

    function ClickItem(){
        console.log("Click")
    }

</script>

<div class="photos">
	{#each produtos as produto}
		<figure class="produto" on:click="{() => ClickItem }" >
			<img src={produto.thumbnailUrl} alt={produto.title}>
			<figcaption>{produto.title}</figcaption>
            <figcaption>34,90</figcaption>
		</figure>
	{:else}
		<!-- this block renders when photos.length === 0 -->
		<p>loading...</p>
	{/each}
</div>

<style>
	.photos {
		width: 800px;
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-gap: 10px;
	}

	figure, img {
		width: 100%;
		margin: 0;
	}

    figcaption {
        margin: auto;
        text-align: center;
    }
</style>
