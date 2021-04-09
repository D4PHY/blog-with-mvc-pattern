class PostsController {
  model = new PostsModel("http://localhost:3000");
  view = new PostsView(this.createNewPost.bind(this));

  renderPostsList() {
    this.model.getAll().then((posts) => this.view.renderPostsList(posts));
  }

  async createNewPost(e) {
    e.preventDefault();
    const newPost = this.view.getNewPostData();
    const post = await this.model.create(newPost);
    console.log([post]);
    this.view.renderPostsList([post]);
    this.view.resetForm();
  }
}

const controller = new PostsController();
controller.renderPostsList();
