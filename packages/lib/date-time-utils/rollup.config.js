import configure from '../../../config/rollup.config';
import packageJSON from './package.json';

const input = './index.js';

export default configure({
    input,
    packageJSON,
});
