import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import nconf from 'nconf';

const checkJwtBuilder = (config: nconf.Provider) => (req: Request, res: Response, next: NextFunction) => {
  const tokenName = 'x-access-token';
  const token = <string>req.headers[tokenName];
  const secret = config.get('secret');
  const jwtExpiration = config.get('jwt:expiration');

  if (!token) {
    res.status(500).json({ auth: false, message: 'no token provided' });
    res.end();
  }

  let jwtPayload;

  try {
    jwtPayload = <any>jwt.verify(token, secret);
    res.locals.jwtPayload = jwtPayload;
  } catch {
    res.status(401).json({ auth: false, message: 'token authentication failed' });
    res.end();
  }

  const { playerId } = jwtPayload;
  const newToken = jwt.sign({ playerId }, secret, {
    expiresIn: jwtExpiration,
  });
  res.append(tokenName, newToken);

  next();
};

export default checkJwtBuilder;
