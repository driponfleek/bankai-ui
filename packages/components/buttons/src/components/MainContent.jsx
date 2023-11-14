import PropTypes from 'prop-types';
import cx from 'classnames';
import ButtonIcon from './ButtonIcon';
import ButtonText from './ButtonText';

const MainContent = (props) => {
    const { baseCls, contextCls, text, renderIcon, children } = props;

    return (
        <span className={cx(`${baseCls}__content-container`, contextCls)}>
            {!children && (
                <>
                    {!!renderIcon && (
                        <ButtonIcon baseCls={baseCls} renderIcon={renderIcon} />
                    )}
                    {!!text && (
                        <ButtonText baseCls={baseCls}>{text}</ButtonText>
                    )}
                </>
            )}
            {children}
        </span>
    );
};

MainContent.propTypes = {
    baseCls: PropTypes.string.isRequired,
    contextCls: PropTypes.string,
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    renderIcon: PropTypes.func,
};

export default MainContent;
