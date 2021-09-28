import cx from 'classnames';
import baseCls from '../const/baseClsConst';

const classNameUtil = (contextCls, className, iconCls) =>
    cx(baseCls, className, iconCls, contextCls);

export default classNameUtil;
