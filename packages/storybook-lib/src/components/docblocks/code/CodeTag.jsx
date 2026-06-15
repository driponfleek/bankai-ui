import cx from 'classnames';

// Utils
import { genSBBaseCls } from '../../../utils/storiesConfigUtils';

// Styles
import './styles/code-tag.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 */
const CodeTag = (props) => {
    const { contextCls, children } = props;
    const baseCls = genSBBaseCls('code-tag');

    return (
        <code className={cx(baseCls, contextCls)}>
            <span className={`${baseCls}__content`}>{children}</span>
        </code>
    );
};

export default CodeTag;
