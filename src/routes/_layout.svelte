<script>
  import Nav from '../components/Nav.svelte';
  import AdminPanel from '../components/AdminPanel.svelte';
  import cookie from 'js-cookie'
  import {onMount} from 'svelte';
  import {goto, stores} from '@sapper/app';
  import {get, post} from '../library/api';

  let token = cookie.get('token');
  const {session} = stores();

  onMount(async () => {
    console.log("token", token)
    let errors = null;
    if (cookie.get('token')) {
      const response = await post(`authenticate/`, null, token);
      errors = response.errors;
      if (response.token) {
        $session.user = {...response};
      }
    }
  });

  export let segment;
</script>

<style>

</style>

<Nav/>

<main>
  <slot></slot>
</main>

<AdminPanel/>