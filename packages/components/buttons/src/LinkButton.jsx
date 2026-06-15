import cx from 'classnames';
import MainContent from './components/MainContent';

// Utils
import { getLinkBtnExtantProps } from './utils/buttonUtils';

// Styles
import './styles/link-button.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {string} [props.text] - Text label for the button
 * @param {Object} [props.data] - Arbitrary data passed to event handler callbacks
 * @param {Function} [props.onClick] - Callback fired on button click
 * @param {Function} [props.renderIcon] - Render function for the button icon
 */
const LinkButton = (props) => {
    const {
        contextCls,
        text,
        data,
        onClick = LinkButton.onClick,
        renderIcon,
        children,
    } = props;
    const baseCls = 'bankai-link-button';
    const sanitizedProps = getLinkBtnExtantProps(props);
    const handleClick = (e) => {
        onClick({ e, ...(data && { data }) });
    };

    return (
        <button
            {...sanitizedProps}
            className={cx(baseCls, contextCls)}
            type="button"
            onClick={handleClick}
        >
            <MainContent baseCls={baseCls} text={text} renderIcon={renderIcon}>
                {children}
            </MainContent>
        </button>
    );
};

LinkButton.onClick = () => Promise.resolve();

export default LinkButton;
