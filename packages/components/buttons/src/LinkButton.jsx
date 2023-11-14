import PropTypes from 'prop-types';
import cx from 'classnames';
import MainContent from './components/MainContent';

// Utils
import { getLinkBtnExtantProps } from './utils/buttonUtils';

// Styles
import './styles/link-button.scss';

const LinkButton = (props) => {
    const { contextCls, text, data, onClick, renderIcon, children } = props;
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

LinkButton.defaultProps = {
    onClick: () => Promise.resolve(),
};

LinkButton.propTypes = {
    contextCls: PropTypes.string,
    text: PropTypes.string,
    data: PropTypes.object,
    onClick: PropTypes.func,
    renderIcon: PropTypes.func,
};

export default LinkButton;
