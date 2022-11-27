/* eslint-disable import/no-relative-packages */
import packageJSON from './package.json';
import configure from '../../../config/rollup.config';

const input = './index.js';

export default configure({
    input,
    packageJSON,
});
