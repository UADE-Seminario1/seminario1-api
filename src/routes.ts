import Router from 'express-promise-router';
import * as players from './handlers/players.handlers';
import getConfig from './utils/config';

const router = Router();
const config = getConfig();

router.post('/api/players/session', players.signUpAndLogin(config));

export default router;
