import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Heading } from '@epr0t0type/bankai-ui-typography';

// Styles
import './styles/section.scss';

class Section extends Component {
    static defaultProps = {
        headingLvl: 2,
        shouldPadContent: true,
    };

    static propTypes = {
        contextCls: PropTypes.string,
        headingText: PropTypes.string,
        headingLvl: PropTypes.number,
        shouldPadContent: PropTypes.bool,
        renderHeading: PropTypes.func,
    };

    render() {
        const { contextCls, shouldPadContent, renderHeading, children } =
            this.props;
        const shouldRenderHeading = this.getShouldRenderHeading();
        const headingCls = `${this.baseCls}__heading`;
        const modCls = {
            [`${this.baseCls}--pad-content`]: shouldPadContent,
        };

        return (
            <div className={cx(this.baseCls, modCls, contextCls)}>
                {shouldRenderHeading && (
                    <div className={`${this.baseCls}__heading-container`}>
                        {renderHeading
                            ? renderHeading(headingCls)
                            : this.renderHeading(headingCls)}
                    </div>
                )}
                {children && (
                    <div className={`${this.baseCls}__content-container`}>
                        <div
                            className={`${this.baseCls}__content-container-inner`}
                        >
                            {children}
                        </div>
                    </div>
                )}
            </div>
        );
    }

    renderHeading = (headingCls) => {
        const { headingText, headingLvl } = this.props;

        return (
            <Heading headingLvl={headingLvl} contextCls={headingCls}>
                {headingText}
            </Heading>
        );
    };

    getShouldRenderHeading = () => {
        const { headingText, renderHeading } = this.props;

        return !!headingText || !!renderHeading;
    };

    baseCls = 'bankai-section';
}

export default Section;
