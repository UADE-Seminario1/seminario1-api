import Router from 'express-promise-router';
import getConfig from './utils/config';
import checkJwtBuilder from './middlewares/checkJwt';
import * as players from './handlers/players.handlers';
import * as bins from './handlers/bins.handlers';

const router = Router();
const config = getConfig();
const checkJwt = checkJwtBuilder(config);

router.post('/api/players/session', players.signUpAndLogin(config));
router.post('/api/bins/connections', [checkJwt], bins.createBinConnection(config));
router.put('/api/bins/connections/:connectionId/end', bins.endBinConnection(config));

export default router;
