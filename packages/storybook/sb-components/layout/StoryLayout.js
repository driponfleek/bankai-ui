import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Heading } from '@epr0t0type/bankai-ui-typography';
// import Paragraph from '../content/Paragraph';

// Styles
import './styles/story-layout.scss';

// ==================================================================
// This component represents a page in storybook. You should always
// provide a Title for your pages. When using this to demo
// a component, your title should be the Name of the component
// you are demoing, and your subtitle should be the name of the Story
// you have the component in. For example, if you are demoing
// a checkbox, then the title and subtitle props would be:
// title = Checkbox
// subtitle = Components | Form Elements
// For other pages, the subtitle is optional. Use as needed.
// ==================================================================
class StoryLayout extends PureComponent {
    static propTypes = {
        contextCls: PropTypes.string,
        title: PropTypes.string,
        subTitle: PropTypes.string,
    };

    render() {
        const { title, subTitle, children, contextCls } = this.props;

        return (
            <div className={cx(this.baseCls, contextCls)}>
                <div className={`${this.baseCls}__header`}>
                    <Heading
                        contextCls={`${this.baseCls}__header-title`}
                        headingLvl={1}
                    >
                        {title}
                    </Heading>
                    {subTitle && (
                        <span className={`${this.baseCls}__header-subtitle`}>
                            {subTitle}
                        </span>
                    )}
                </div>
                {children && (
                    <div className={`${this.baseCls}__content`}>{children}</div>
                )}
            </div>
        );
    }

    baseCls = 'bankai-sb-layout';
}

export default StoryLayout;
