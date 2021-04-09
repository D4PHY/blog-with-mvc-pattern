class PostsView {
  outputSelector = "#root";
  listTemplate = document.querySelector("[data-template='posts']");
  addPostForm = document.querySelector("[data-add-post-form]");

  constructor(createPostHandler) {
    if (createPostHandler) {
      this.addPostForm.addEventListener("submit", createPostHandler);
    }
  }

  getTemplate() {
    const clone = this.listTemplate.content.cloneNode(true);
    return clone;
  }

  createPostsList(posts) {
    const postsList = document.createDocumentFragment();

    for (const post of posts) {
      const template = this.getTemplate();

      const title = template.querySelector("a");
      const date = template.querySelector("span");
      const author = template.querySelector("em");

      title.innerText = post.title;
      title.href = `postDetails.html?id=${post.id}`;
      date.innerText = post.date;
      author.innerText = post.author;

      postsList.appendChild(template);
    }

    return postsList;
  }

  display(what) {
    document.querySelector(this.outputSelector).appendChild(what);
  }

  renderPostsList(posts) {
    const html = this.createPostsList(posts);
    this.display(html);
  }

  getNewPostData() {
    const inputs = this.addPostForm.elements;
    const postTitle = inputs.postTitle.value;
    const postAuthor = inputs.postAuthor.value;
    const postBody = inputs.postBody.value;
    const postDate = inputs.postDate.valueAsDate;

    return {
      title: postTitle,
      date: postDate,
      body: postBody,
      author: postAuthor,
    };
  }

  resetForm() {
    this.addPostForm.reset();
  }

  renderPostDetails(post) {
    document.body.querySelector("h1").innerText = post.title;
    document.body.querySelector("strong").innerText = post.author;
    document.body.querySelector("em").innerText = post.date;
    document.body.querySelector("p").innerText = post.body;
  }
}
