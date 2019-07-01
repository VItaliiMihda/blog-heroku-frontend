<script>
  import {goto, stores} from '@sapper/app';
  import ListErrors from '../../components/ListErrors.svelte';
  import {post} from '../../library/api';
  import cookie from 'js-cookie'

  const {session} = stores();

  let username = '';
  let password = '';
  let errors = null;

  async function submit(event) {
    const response = await post(`auth/login/`, {username, password});

    // TODO handle network errors
    errors = response.errors;
    if (response.token) {
      $session.user = {...response};
      window.localStorage.setItem('token', response.token);
      cookie.set('token', response.token);
      goto('/');
    }
  }
</script>

<svelte:head>
  <title>Sign in • Conduit</title>
</svelte:head>

<div class="auth-page">
  <div class="container page pt-5">
    <div class="row">
      <div class="col-md-6 offset-md-3 col-xs-12">
        <h1 class="text-xs-center">Sign In</h1>
        <p class="text-xs-center">
<!--					<a href="/register">Need an account?</a>-->
        </p>

        <ListErrors {errors}/>

        <form on:submit|preventDefault={submit}>
          <fieldset class="form-group">
            <input class="form-control" type="text" placeholder="username" bind:value={username}>
          </fieldset>
          <fieldset class="form-group">
            <input class="form-control" type="password" placeholder="Password" bind:value={password}>
          </fieldset>
          <button class="btn btn-primary pull-xs-right" type="submit" disabled='{!username || !password}'>
            Sign in
          </button>
        </form>
      </div>
    </div>
  </div>
</div>