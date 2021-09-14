import Controller from '../controllers';
import Validate from '../middleware/index';


export default class Routes {
  private readonly controller: Controller = new Controller();
  private readonly validation: Validate = new Validate();

  public routes(app: any): void {
    app.route('/')
      .get(this.controller.home);

    app.route('/users')
      .patch(this.controller.patch);
  }
}
