import cx from 'classnames';
import { Heading } from '@driponfleek/bankai-ui-typography';

// Constants
import { SB_BASE_CLS_PREFIX } from '../../const/baseClsConst';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 */
const SectionTitle = (props) => {
    const { contextCls, ...rest } = props;
    const baseCls = `${SB_BASE_CLS_PREFIX}section-title`;

    return <Heading contextCls={cx(baseCls, contextCls)} {...rest} />;
};

export default SectionTitle;
