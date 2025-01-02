import PropTypes from 'prop-types';
import cx from 'classnames';
import { Heading } from '@driponfleek/bankai-ui-typography';

// Constants
import { SB_BASE_CLS_PREFIX } from '../../const/baseClsConst';

const SectionTitle = (props) => {
    const { contextCls, ...rest } = props;
    const baseCls = `${SB_BASE_CLS_PREFIX}section-title`;

    return <Heading contextCls={cx(baseCls, contextCls)} {...rest} />;
};

SectionTitle.propTypes = {
    contextCls: PropTypes.string,
};

export default SectionTitle;
