import PropTypes from 'prop-types';
import cx from 'classnames';

// Utils
import { genSBBaseCls } from '../../../utils/storiesConfigUtils';

// Styles
import './styles/code-tag.scss';

const CodeTag = (props) => {
    const { contextCls, children } = props;
    const baseCls = genSBBaseCls('code-tag');

    return (
        <code className={cx(baseCls, contextCls)}>
            <span className={`${baseCls}__content`}>{children}</span>
        </code>
    );
};

CodeTag.propTypes = {
    contextCls: PropTypes.string,
};

export default CodeTag;
