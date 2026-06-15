import cx from 'classnames';
import { genSBBaseCls } from '@driponfleek/bankai-lib-storybook';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the panel content wrapper
 */
const TabPanelContent = (props) => {
    const { children, contextCls } = props;

    return (
        <div
            className={cx(genSBBaseCls('tabs-demo-panel-content'), contextCls)}
        >
            {children}
        </div>
    );
};

export default TabPanelContent;
