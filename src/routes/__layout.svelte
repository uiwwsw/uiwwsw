<script lang="ts">
</script>

<header>
	<h1>
		<a href="/">uiwwsw</a>
	</h1>
	<div>
		<a href="/portfolio">포트폴리오</a>
		<a href="/essay">에쎄이</a>
	</div>
</header>
<main>
	<slot />
</main>
<footer>&copy; uiwwsw</footer>

<style lang="scss">
	:root {
		--solid: #393939;
		--gutter: 22px;
		--background: #fff;
	}
	:global(body) {
		display: flex;
		flex-direction: column;
		margin: 0;
		padding: 0;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif,
			'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
		min-height: 100vh;
		color: var(--solid);
		background: var(--background);
	}
	header {
		position: sticky;
		top: 0;
		display: flex;
		padding: var(--gutter);
		align-items: center;
		justify-content: space-between;
		h1 {
			margin: 0;
			font-size: 20px;
		}
		a {
			color: var(--solid);
		}
	}
	main {
		flex: auto;
		padding: var(--gutter);
	}
	footer {
		padding: var(--gutter);
	}
	@media (prefers-color-scheme: dark) {
		:root {
			--solid: #fafafa;
			--background: #000;
		}
	}
</style>
