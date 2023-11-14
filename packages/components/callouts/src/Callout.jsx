import PropTypes from 'prop-types';
import cx from 'classnames';
import CalloutIcon from './components/CalloutIcon';
import MainContent from './components/MainContent';

// Utils
import { getCalloutVariantModCls } from './utils/calloutUtils';

// Styles
import './styles/callout.scss';

const Callout = (props) => {
    const {
        contextCls,
        renderIcon,
        variant,
        title,
        headingLvl,
        msg,
        children,
    } = props;
    const baseCls = 'bankai-callout';
    const shouldRenderIcon = !!renderIcon || !!variant;
    const modCls = getCalloutVariantModCls(variant, baseCls);

    return (
        <div className={cx(baseCls, modCls, contextCls)}>
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

Callout.defaultProps = {
    headingLvl: 2,
};

Callout.propTypes = {
    contextCls: PropTypes.string,
    msg: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    variant: PropTypes.string,
    headingLvl: PropTypes.number,
    renderIcon: PropTypes.func,
};

export default Callout;
