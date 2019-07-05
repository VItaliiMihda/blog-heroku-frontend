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
    // photos = await res.json();
  });

  // async function submit(event) {
  //   const response = await post(`auth/login/`, {username, password});
  //
  //   // TODO handle network errors
  //   errors = response.errors;
  //   if (response.token) {
  //     $session.user = {...response};
  //     window.localStorage.setItem('token', response.token);
  //     cookie.set('token', response.token);
  //     goto('/');
  //   }


  export let segment;
</script>

<style>

</style>

<Nav/>

<main>
  <slot></slot>
</main>

<AdminPanel/>