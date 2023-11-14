import PropTypes from 'prop-types';
import cx from 'classnames';
import Tippy from '@tippyjs/react';

// Utils
import { getSanatizedProps } from './utils/tootlipUtils';

// Constants
import { POSITIONS, TRIGGERS } from './const/tooltipConst';

// Styles
import './styles/tooltip.scss';

const Tooltip = (props) => {
    const {
        ariaLabel,
        contextCls,
        ttContextCls,
        content,
        isDisabled,
        children,
    } = props;
    const baseCls = 'bankai-tooltip';
    const ttProps = getSanatizedProps(props);
    const renderTooltipContent = () => {
        return (
            <div className={cx(`${baseCls}__content-container`, ttContextCls)}>
                {content}
            </div>
        );
    };

    return (
        <Tippy
            {...ttProps}
            className={cx(baseCls, contextCls)}
            theme="bankai"
            content={renderTooltipContent()}
        >
            <button
                className={`${baseCls}__trigger`}
                aria-label={ariaLabel}
                type="button"
                disabled={isDisabled}
            >
                {children}
            </button>
        </Tippy>
    );
};

Tooltip.defaultProps = {
    position: POSITIONS.TOP,
    trigger: `${TRIGGERS.MOUSE_ENTER} ${TRIGGERS.FOCUS}`,
    delay: 0,
    duration: [300, 250],
    offset: [0, 10],
    isDisabled: false,
    isInteractive: false,
    sticky: false,
    touch: true,
    shouldEnableInertia: false,
    shouldEnableInlinePositioning: false,
    shouldHideOnClick: false,
    shouldShowOnCreate: false,
    onAfterUpdate: () => Promise.resolve,
    onBeforeUpdate: () => Promise.resolve,
    onClickOutside: () => Promise.resolve,
    onCreate: () => Promise.resolve,
    onDestroy: () => Promise.resolve,
    onHide: () => Promise.resolve,
    onHidden: () => Promise.resolve,
    onMount: () => Promise.resolve,
    onShow: () => Promise.resolve,
    onShown: () => Promise.resolve,
    onTrigger: () => Promise.resolve,
    onUntrigger: () => Promise.resolve,
};

Tooltip.propTypes = {
    ariaLabel: PropTypes.string,
    contextCls: PropTypes.string,
    position: PropTypes.string,
    trigger: PropTypes.string,
    ttContextCls: PropTypes.string,
    delay: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
    duration: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
    offset: PropTypes.array,
    isDisabled: PropTypes.bool,
    isInteractive: PropTypes.bool,
    isOpen: PropTypes.bool,
    shouldEnableInertia: PropTypes.bool,
    shouldEnableInlinePositioning: PropTypes.bool,
    shouldHideOnClick: PropTypes.bool,
    shouldShowOnCreate: PropTypes.bool,
    popperOptions: PropTypes.object,
    aria: PropTypes.shape({
        content: PropTypes.string,
        expanded: PropTypes.string,
    }),
    appendTo: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.func,
    ]),
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    sticky: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    touch: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
        PropTypes.array,
    ]),
    onAfterUpdate: PropTypes.func,
    onBeforeUpdate: PropTypes.func,
    onClickOutside: PropTypes.func,
    onCreate: PropTypes.func,
    onDestroy: PropTypes.func,
    onHide: PropTypes.func,
    onHidden: PropTypes.func,
    onMount: PropTypes.func,
    onShow: PropTypes.func,
    onShown: PropTypes.func,
    onTrigger: PropTypes.func,
    onUntrigger: PropTypes.func,
};

export default Tooltip;
