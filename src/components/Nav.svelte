<script context="module">

</script>
<script>
  import {stores} from '@sapper/app';

  const {page, session} = stores();
  console.log("$session", $session)
  export let segment;
</script>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a class="navbar-brand" href="/">Brand</a>
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link {segment === undefined ? 'selected' : ''}" href="/blog">Posts</a>
      </li>
      <li class="nav-item">
        <a class="nav-link {segment === undefined ? 'selected' : ''}" href="/tags_list_url">Tags</a>
      </li>
    </ul>
    <div class="form-inline">
		{#if $session.user}
          <a class="btn btn-success mx-2" type="button" href="/profile">Profile</a>
          <a class="btn btn-danger mx-2" type="button" href="/logout">Logout</a>
		{:else}
          <a class="btn btn-warning mx-2" type="button" href="/registration">Registration</a>
          <a class="btn btn-info mx-2" type="button" href="/login">Login</a>
		{/if}
    </div>
	  {#if $session.user}
        <div class="media ml-2 pr-2">
          <img src={process.env.HOST}{$session.user.avatar} class="bd-placeholder-img mr-2 rounded" width="38"
               height="38"
               alt="...">
          <div class="media-body">
            <h5 class="mt-0 mb-1">{$session.user.username}</h5>
          </div>
        </div>
	  {/if}
      <!--    action="{% url 'posts_list_url' %}"-->
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" name="search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>

  </div>
</nav>

<!--<nav>-->
<!--  <ul>-->
<!--    <li><a class='{segment === undefined ? "selected" : ""}' href='.'>home</a></li>-->
<!--    <li><a class='{segment === "about" ? "selected" : ""}' href='about'>about</a></li>-->

<!--		&lt;!&ndash; for the blog link, we're using rel=prefetch so that Sapper prefetches-->
<!--		     the blog data when we hover over the link or tap it on a touchscreen &ndash;&gt;-->
<!--    <li><a rel=prefetch class='{segment === "blog" ? "selected" : ""}' href='blog'>blog</a></li>-->
<!--  </ul>-->
<!--</nav>-->