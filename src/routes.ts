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
router.get('/api/bins/:binId/connections/requested', bins.getRequestedBinConnection(config));
router.head('/api/bins/:binId/connections/requested', bins.checkRequestedBinConnection(config));
router.patch('/api/bins/connections/:connectionId/end', bins.endBinConnection(config));
router.patch('/api/bins/connections/:connectionId/accept', bins.acceptBinConnection(config));
router.head('/api/bins/connections/:connectionId/accepted', bins.checkAcceptedBinConnection(config));

export default router;
