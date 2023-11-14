import PropTypes from 'prop-types';
import cx from 'classnames';

// Styles
import './styles/paragraph.scss';

const Paragraph = (props) => {
    const { contextCls, children, ...rest } = props;
    const baseCls = 'bankai-paragraph';

    return (
        <p {...rest} className={cx(baseCls, contextCls)}>
            {children}
        </p>
    );
};

Paragraph.defaultProps = {};

Paragraph.propTypes = {
    contextCls: PropTypes.string,
};

export default Paragraph;
