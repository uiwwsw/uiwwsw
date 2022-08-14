<script lang="ts">
</script>

<header>
	<h1>ddd</h1>
	<h1>ddd</h1>
	<h1>ddd</h1>
	<h1>ddd</h1>
	<h1>ddd</h1>
	<h1>ddd</h1>
</header>
<main>
	<slot />
</main>
<footer>푸터푸터</footer>

<style lang="scss">
	:global(body) {
		display: flex;
		flex-direction: column;
		margin: 0;
		padding: 0;
		font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
		min-height: 100vh;
	}
	header {
		position: sticky;
		top: 0;
	}
	main{
		flex: auto;
	}
</style>
