<!--{% block admin-panel %}-->
<div class="admin-panel align-items-center">
  <a href="/admin" class="btn btn-outline-info">Admin</a>
  <div class="btn-group">
    <button type="button" class="btn btn-light dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false">Create
    </button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="/post_create_url">Post</a>
      <a class="dropdown-item" href="/tag_create_url">Tag</a>
    </div>
  </div>
</div>
<!--{% if admin_object.author == user %}-->
<!--<a href="{{ admin_object.get_update_url }}" class="btn btn-light edit" style="{% if detail %} display:block; {% endif%}">Edit</a>-->
<!--<a href="{{ admin_object.get_delete_url }}" class="btn btn-danger delete" style="{% if detail %} display:block; {% endif%}">Delete</a>-->
<!--{% endif %}-->
<!--{% endblock %}-->