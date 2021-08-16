import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// Styles
import './styles/story-section.scss';

const StorySection = (props) => {
    const { children, contextCls } = props;
    const sectionBaseCls = 'bankai-sb-section';

    return (
        <section className={cx(sectionBaseCls, contextCls)}>{children}</section>
    );
};

StorySection.propTypes = {
    contextCls: PropTypes.string,
};

export default StorySection;
