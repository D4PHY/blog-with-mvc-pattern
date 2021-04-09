class postDetailsController {
  model = new PostsModel("http://localhost:3000");
  view = new PostsView();
  postId = postDetailsController.getUrlParam("id");

  constructor() {}

  async renderPostDetails() {
    const post = await this.model.getById(this.postId);
    this.view.renderPostDetails(post);
  }

  static getUrlParam(name) {
    const search = location.search.substr(1);

    const keyValuePairs = search.split("&");

    for (const pair of keyValuePairs) {
      const [key, value] = pair.split("=");

      if (key === name) {
        return value;
      }
    }

    console.warn(
      'the query parameter you tries to get: "%s" is not available in the url',
      name
    );

    return undefined;
  }
}

const controller = new postDetailsController();
controller.renderPostDetails();
