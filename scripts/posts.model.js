class PostsModel {
  endpoint = "/posts";
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }

  get url() {
    return this.apiUrl + this.endpoint;
  }

  // CRUD

  // Create

  create(post) {
    const month = this.prefixZero(post.date.getMonth() + 1);
    const day = this.prefixZero(post.date.getDate());

    post.date = `${post.date.getFullYear()}-${month}-${day}`;
    console.log(month, day);

    return fetch(this.url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(post),
    }).then(this.handleResponse);
  }

  // Read/Retrieve
  //  /posts - o lista de post-uri
  //  /posts/1 - un singur post

  getAll(posts) {
    return fetch(this.url).then(this.handleResponse);
  }

  getById(id) {
    return fetch(`${this.url}/${id}`).then(this.handleResponse);
  }

  // Update

  update(id, post) {
    return fetch(`${this.url}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(post),
    }).then(this.handleResponse);
  }

  // DELETE

  delete(id) {
    return fetch(`${this.url}/${id}`, {
      method: "DELETE",
    }).then(this.handleResponse);
  }

  // Utility Functions

  handleResponse(response) {
    if (!response.ok) {
      throw new Error("Bad answer from server");
    }
    return response.json();
  }

  prefixZero(num) {
    if (num < 10) {
      return `0${num}`;
    }
    return num;
  }
}
