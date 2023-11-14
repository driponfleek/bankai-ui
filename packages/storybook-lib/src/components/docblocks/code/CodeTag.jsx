import PropTypes from 'prop-types';
import cx from 'classnames';

// Utils
import { genSBBaseCls } from '../../../utils/storiesConfigUtils';

// Styles
import './styles/code-tag.scss';

const CodeTag = (props) => {
    const { contextCls, children } = props;

    return (
        <code className={cx(genSBBaseCls('code-tag'), contextCls)}>
            {children}
        </code>
    );
};

CodeTag.propTypes = {
    contextCls: PropTypes.string,
};

export default CodeTag;
