import cx from 'classnames';

// Constants
import baseCls from '../const/baseClsConst';

const classNameUtil = (contextCls, className, iconCls) =>
    cx(baseCls, className, iconCls, contextCls);

export default classNameUtil;
