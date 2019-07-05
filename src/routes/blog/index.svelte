<script context="module">
  export function preload({params, query}) {
    return this.fetch(`${process.env.HOST}/api/v1/blog/`).then(r => r.json()).then(posts => {
      return {posts};
    });
  }
</script>

<script>
  export let posts;
</script>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>


<div class="container pt-5 pb-5">
  <h1>Recent posts</h1>

  <div class="list-group">
    {#each posts as post}

      <div class="card mb-4">
        <div class="card-header">
          { post.date_pub }
        </div>
        <div class="card-body">
          <h5 class="card-title">{ post.title }</h5>
          <p class="card-text">{ post.body }</p>
          <a rel='prefetch' href="blog/{post.slug}" class="btn btn-light">Read</a>
        </div>
        <div class="card-footer text-muted">
          <div class="row">
            <div class="col-md-8">
              Tags:
              {#each post.tags as tag}
                <a href="/{tag.slug}">{tag.title}</a>
              {/each}
            </div>
            <div class="col-md-4 text-right">{ post.author_name }</div>
          </div>
        </div>
      </div>



    <!-- we're using the non-standard `rel=prefetch` attribute to
                  tell Sapper to load the data for the page as soon as
                  the user hovers over the link or taps it, instead of
                  waiting for the 'click' event -->
    {/each}
  </div>
</div>