import { Request, Response } from 'express';

import { StatusCodes } from '../utils/index';


export default class AppController {
  public home(req: Request, res: Response) {
    res.status(StatusCodes.success).json({
      Home: 'Welcome to VisaLaw',
      success: true,
    });
  }

  public patch(req: Request, res: Response): void {
    res.status(StatusCodes.success).json({
      PATCH: 'PATCH REQUEST IS SUCCESSFUL',
      success: true,
    });
  }
}
