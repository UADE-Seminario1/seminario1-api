import { createLightship } from 'lightship';
import app from './app';
import getConfig from './utils/config';

const config = getConfig();
const lightship = createLightship();

const server = app.listen(config.get('PORT'), config.get('HOST'), () => {
  console.log('  App is running at http://localhost:%d in %s mode', config.get('PORT'), config.get('NODE_ENV'));
  console.log('  Press CTRL-C to stop\n');
  lightship.signalReady();
});

export default server;
