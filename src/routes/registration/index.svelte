<script>
  import {goto, stores} from '@sapper/app';
  import ListErrors from '../../components/ListErrors.svelte';
  import {post} from '../../library/api';
  import cookie from 'js-cookie'

  const {session} = stores();

  let username = null;
  let password = null;
  let first_name = null;
  let last_name = null;
  let email = null;
  let errors = [];

  async function submit(event) {
    const response = await post(`auth/registration/`, {username, password, first_name, last_name, email});

    if (response.status_code !== 200 || response.status_code !== 201){
        errors = {...response};
        delete errors.status_code;
    }
    if (response.token) {
      $session.user = {...response};
      cookie.set('token', response.token);
      goto('/');
    }
  }
</script>

<svelte:head>
  <title>Sign up • Conduit</title>
</svelte:head>

<div class="auth-page">
  <div class="container page pt-5">
    <div class="row">
      <div class="col-md-6 offset-md-3 col-xs-12">
        <h1 class="text-xs-center">Sign Up</h1>
        <p class="text-xs-center">
            <a href="/login">Do you have an account?</a>
        </p>

        <ListErrors {errors}/>

        <form on:submit|preventDefault={submit}>
          <div class="form-group">
            <input class="form-control" type="text" placeholder="username" bind:value={username}>
          </div>
           <div class="form-group">
            <input class="form-control" type="text" placeholder="first name" bind:value={first_name}>
          </div>
          <div class="form-group">
            <input class="form-control" type="text" placeholder="last name" bind:value={last_name}>
          </div>
          <div class="form-group">
            <input class="form-control" type="text" placeholder="email" bind:value={email}>
          </div>
          <div class="form-group">
            <input class="form-control" type="password" placeholder="Password" bind:value={password}>
          </div>
          <button class="btn btn-primary pull-xs-right" type="submit" disabled='{!username || !password}'>
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</div>