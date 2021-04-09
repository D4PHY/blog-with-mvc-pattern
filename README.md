# Model View Controler Pattern - Create a Simple Blog!

## In MVC, we have different files for diferent logic:

- posts.model.js will handle the data logic
- posts.view.js will handle the view (HTML) logic
- posts.controller.js will connect data logic with view logic (the view needs data but we don't want the view to access the model directly)
  and the controller can also hold the configuration logic that we need to inject into the model \*/
