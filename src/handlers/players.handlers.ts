import { Request, Response } from 'express';
import nconf from 'nconf';

export const signUpAndLogin = (config: nconf.Provider) => async (req: Request, res: Response) => {
  //const { body } = req;

  return res.status(200).json({ message: 'ok' });
};
