import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// Styles
import './styles/typography-list-item.scss';

const TypographyListItem = (props) => {
    const { contextCls, categoryText, fontFamilyName } = props;
    const baseCls = 'bankai-sb-typography-list-item';
    const testRegEx = / /g;
    const modCls = `${baseCls}--${categoryText
        .toLowerCase()
        .replace(testRegEx, '-')}`;

    return (
        <div className={cx(baseCls, modCls, contextCls)}>
            <span className={`${baseCls}__inner`}>
                <span className={`${baseCls}__category`}>{categoryText}</span>
                <span className={`${baseCls}__example`}>Aa</span>
                <span className={`${baseCls}__font-family-name`}>
                    {fontFamilyName}
                </span>
            </span>
        </div>
    );
};

TypographyListItem.defaultProps = {};

TypographyListItem.propTypes = {
    contextCls: PropTypes.string,
    categoryText: PropTypes.string,
    fontFamilyName: PropTypes.string,
};

export default TypographyListItem;
