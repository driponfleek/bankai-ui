import PropTypes from 'prop-types';
import cx from 'classnames';
import { genSBBaseCls } from '@driponfleek/bankai-lib-storybook';

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

TabPanelContent.defaultProps = {};

TabPanelContent.propTypes = {
    contextCls: PropTypes.string,
};

export default TabPanelContent;
