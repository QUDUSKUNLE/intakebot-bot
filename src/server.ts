import express from 'express';
import bodyParser from 'body-parser';
import * as dotenv from 'dotenv';

import Routes from './routes';

dotenv.config();


class App {
  public app: express.Application;
  public appRoutes: Routes = new Routes();

  constructor() {
    this.app = express();
    this.config();
    this.appRoutes.routes(this.app);
  }

  private config(): void {
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(bodyParser.json());
  }
}

export default App;
