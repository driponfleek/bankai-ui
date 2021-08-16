// Make sure to fix the path to the base config!
import baseConfig from '../../config/rollup.config';
import packageJSON from './package.json';

const input = './index.js';

export default baseConfig({
    input,
    packageJSON,
});
