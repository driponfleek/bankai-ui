import autoprefixer from 'autoprefixer';
import postcssReporter from 'postcss-reporter';
import postcssURL from 'postcss-url';

export default {
    extensions: ['.scss', '.css'],
    sourceMap: true,
    inject: true,
    plugins: [postcssReporter(), postcssURL({ url: 'inline' }), autoprefixer()],
};
