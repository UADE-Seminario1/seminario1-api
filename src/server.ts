import { createLightship } from 'lightship';
import app from './app';
import getConfig from './utils/config';

const config = getConfig();
const lightship = createLightship();

const server = app.listen(config.get('port'), config.get('host'), () => {
  console.log('  App is running at http://localhost:%d in %s mode', config.get('port'), config.get('NODE_ENV'));
  console.log('  Press CTRL-C to stop\n');
  lightship.signalReady();
});

export default server;
