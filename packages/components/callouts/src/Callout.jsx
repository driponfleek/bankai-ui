import cx from 'classnames';
import CalloutIcon from './components/CalloutIcon';
import MainContent from './components/MainContent';

// Styles
import './styles/callout.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {string|React.ReactElement} [props.msg] - Body content of the callout
 * @param {string|React.ReactElement} [props.title] - Heading content of the callout
 * @param {string} [props.variant] - Visual variant that determines the status icon (affirmative, cautionary, danger, info)
 * @param {number} [props.headingLvl] - Heading level for the title
 * @param {Function} [props.renderIcon] - Custom render function for the callout icon
 */
const Callout = (props) => {
    const {
        contextCls,
        renderIcon,
        variant,
        title,
        headingLvl = 2,
        msg,
        children,
    } = props;
    const baseCls = 'bankai-callout';
    const shouldRenderIcon = !!renderIcon || !!variant;

    return (
        <div className={cx(baseCls, contextCls)}>
            <div className={`${baseCls}__inner`}>
                {!children && (
                    <>
                        {shouldRenderIcon && (
                            <CalloutIcon
                                baseCls={baseCls}
                                variant={variant}
                                renderIcon={renderIcon}
                            />
                        )}
                        {(title || msg) && (
                            <MainContent
                                baseCls={baseCls}
                                msg={msg}
                                title={title}
                                headingLvl={headingLvl}
                            />
                        )}
                    </>
                )}
                {children}
            </div>
        </div>
    );
};

export default Callout;
