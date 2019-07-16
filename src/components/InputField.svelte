<script>
    import { createEventDispatcher } from 'svelte';
    export let placeholder = "";
    export let type = "text";
    export let value;
    const dispatch = createEventDispatcher();
    const change = () => dispatch('change');
    function handleClick(event) {
		return value = event.target.value
	}
    const input = num => () => {
        console.log(num)
        return value += num
    }
</script>
<div class="form-group">
    <input
            class="form-control"
            type={type}
            placeholder={placeholder}
            value={value}
            on:input={handleClick}
    >
</div>
