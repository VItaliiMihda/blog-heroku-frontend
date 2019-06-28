<script>
	import Nav from '../components/Nav.svelte';
    import AdminPanel from '../components/AdminPanel.svelte';

	export let segment;
</script>

<style>

</style>

<Nav/>

<main>
	<slot></slot>
</main>

<AdminPanel />