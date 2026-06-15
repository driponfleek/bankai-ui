import cx from 'classnames';
import Tippy from '@tippyjs/react';

// Utils
import { getSanatizedProps } from './utils/tootlipUtils';

// Constants
import { POSITIONS, TRIGGERS } from './const/tooltipConst';

// Styles
import 'tippy.js/dist/tippy.css';
import './styles/tooltip.scss';

/**
 * @param {Object} props
 * @param {string} [props.ariaLabel] - Accessible label for the tooltip trigger button
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the Tippy root element
 * @param {string} [props.position] - Preferred placement of the tooltip (e.g. "top", "bottom-start")
 * @param {string} [props.trigger] - Event(s) that show the tooltip (e.g. "mouseenter focus")
 * @param {string} [props.ttContextCls] - Additional CSS class name(s) to apply to the tooltip content container
 * @param {number|Array} [props.delay] - Show/hide delay in ms; array form sets [showDelay, hideDelay]
 * @param {number|Array} [props.duration] - Show/hide animation duration in ms; array form sets [showDuration, hideDuration]
 * @param {Array} [props.offset] - [skidding, distance] offset of the tooltip from the trigger
 * @param {boolean} [props.isDisabled] - Whether the tooltip is disabled
 * @param {boolean} [props.isInteractive] - Whether the tooltip content can be interacted with (hovered/clicked)
 * @param {boolean} [props.isOpen] - Controlled open state of the tooltip
 * @param {boolean} [props.shouldEnableInertia] - Whether to enable inertia easing on the transition
 * @param {boolean} [props.shouldEnableInlinePositioning] - Whether to enable inline positioning for text selections
 * @param {boolean} [props.shouldHideOnClick] - Whether clicking the trigger hides the tooltip
 * @param {boolean} [props.shouldShowOnCreate] - Whether to show the tooltip immediately on creation
 * @param {Object} [props.popperOptions] - Options passed directly to Popper.js
 * @param {Object} [props.aria] - ARIA configuration object (supports `content` and `expanded`)
 * @param {string|Element|Function} [props.appendTo] - Element or selector to append the tooltip to
 * @param {string|React.ReactElement} [props.content] - Content rendered inside the tooltip
 * @param {boolean|string} [props.sticky] - Whether to keep the tooltip in view as the reference moves
 * @param {boolean|string|Array} [props.touch] - Touch behavior configuration
 * @param {Function} [props.onAfterUpdate] - Callback fired after the tooltip instance is updated
 * @param {Function} [props.onBeforeUpdate] - Callback fired before the tooltip instance is updated
 * @param {Function} [props.onClickOutside] - Callback fired when clicking outside the tooltip
 * @param {Function} [props.onCreate] - Callback fired when the tooltip instance is created
 * @param {Function} [props.onDestroy] - Callback fired when the tooltip instance is destroyed
 * @param {Function} [props.onHide] - Callback fired when the tooltip begins to hide
 * @param {Function} [props.onHidden] - Callback fired after the tooltip finishes hiding
 * @param {Function} [props.onMount] - Callback fired when the tooltip is mounted to the DOM
 * @param {Function} [props.onShow] - Callback fired when the tooltip begins to show
 * @param {Function} [props.onShown] - Callback fired after the tooltip finishes showing
 * @param {Function} [props.onTrigger] - Callback fired when the trigger event fires
 * @param {Function} [props.onUntrigger] - Callback fired when the untrigger event fires
 */
const Tooltip = (props) => {
    const {
        ariaLabel,
        contextCls,
        ttContextCls,
        position = POSITIONS.TOP,
        trigger = `${TRIGGERS.MOUSE_ENTER} ${TRIGGERS.FOCUS}`,
        delay = 0,
        duration = [300, 250],
        offset = [0, 10],
        content,
        isDisabled = false,
        isInteractive = false,
        shouldEnableInertia = false,
        shouldEnableInlinePositioning = false,
        shouldHideOnClick = false,
        shouldShowOnCreate = false,
        sticky = false,
        touch = true,
        onAfterUpdate = Tooltip.onAfterUpdate,
        onBeforeUpdate = Tooltip.onBeforeUpdate,
        onClickOutside = Tooltip.onClickOutside,
        onCreate = Tooltip.onCreate,
        onDestroy = Tooltip.onDestroy,
        onHide = Tooltip.onHide,
        onHidden = Tooltip.onHidden,
        onMount = Tooltip.onMount,
        onShow = Tooltip.onShow,
        onShown = Tooltip.onShown,
        onTrigger = Tooltip.onTrigger,
        onUntrigger = Tooltip.onUntrigger,
        children,
        ...rest
    } = props;
    const baseCls = 'bankai-tooltip';
    const ttProps = getSanatizedProps({
        ...rest,
        ariaLabel,
        contextCls,
        ttContextCls,
        position,
        trigger,
        delay,
        duration,
        offset,
        content,
        isDisabled,
        isInteractive,
        shouldEnableInertia,
        shouldEnableInlinePositioning,
        shouldHideOnClick,
        shouldShowOnCreate,
        sticky,
        touch,
        onAfterUpdate,
        onBeforeUpdate,
        onClickOutside,
        onCreate,
        onDestroy,
        onHide,
        onHidden,
        onMount,
        onShow,
        onShown,
        onTrigger,
        onUntrigger,
        children,
    });
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

Tooltip.onAfterUpdate = () => Promise.resolve();
Tooltip.onBeforeUpdate = () => Promise.resolve();
Tooltip.onClickOutside = () => Promise.resolve();
Tooltip.onCreate = () => Promise.resolve();
Tooltip.onDestroy = () => Promise.resolve();
Tooltip.onHide = () => Promise.resolve();
Tooltip.onHidden = () => Promise.resolve();
Tooltip.onMount = () => Promise.resolve();
Tooltip.onShow = () => Promise.resolve();
Tooltip.onShown = () => Promise.resolve();
Tooltip.onTrigger = () => Promise.resolve();
Tooltip.onUntrigger = () => Promise.resolve();

export default Tooltip;
