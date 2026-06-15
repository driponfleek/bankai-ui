import cx from 'classnames';

// Styles
import './styles/story-section.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 */
const StorySection = (props) => {
    const { children, contextCls } = props;
    const sectionBaseCls = 'bankai-sb-section';

    return (
        <section className={cx(sectionBaseCls, contextCls)}>{children}</section>
    );
};

export default StorySection;
