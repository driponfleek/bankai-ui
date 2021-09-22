import cx from 'classnames';
import baseCls from '../const/baseClsConst';

const classNameUtil = (contextCls, className) =>
    cx(baseCls, contextCls, className);

export default classNameUtil;
