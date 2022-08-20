<script context="module" lang="ts">
	import { browser, dev, prerendering } from '$app/env';
</script>

<script lang="ts">
	import { onMount, onDestroy, createEventDispatcher } from 'svelte';

	export let threshold = 0;
	export let horizontal = false;
	export let hasMore = true;

	const dispatch = createEventDispatcher();
	let isLoadMore = false;
	let component: HTMLElement;

	const onScroll = (e: Event) => {
		const element = e.target;
		console.log(element, component);
		if (!element) return;
		// const offset = horizontal
		//   ? element.scrollWidth - element.clientWidth - element.scrollLeft
		//   : element.scrollHeight - element.clientHeight - element.scrollTop;

		// if (offset <= threshold) {
		//   if (!isLoadMore && hasMore) {
		//     dispatch("loadMore");
		//   }
		//   isLoadMore = true;
		// } else {
		//   isLoadMore = false;
		// }
	};

	onMount(() => {
		console.log(component);
		if (browser) {
			component.addEventListener('scroll', onScroll);
			component.addEventListener('resize', onScroll);
		}
	});

	//   onDestroy(() => {
	//       component.removeEventListener("scroll", onScroll);
	//       component.removeEventListener("resize", onScroll);
	//   });
</script>

<div bind:this={component} />
