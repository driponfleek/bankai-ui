import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Heading } from '@epr0t0type/bankai-ui-typography';

// Styles
import './styles/section-title.scss';

const SectionTitle = (props) => {
    const { contextCls } = props;
    const headingProps = { ...props };
    const titleCls = cx('bankai-sb-section-title', contextCls);
    delete headingProps.contextCls;

    return <Heading contextCls={titleCls} {...headingProps} />;
};

SectionTitle.propTypes = {
    contextCls: PropTypes.string,
};

export default SectionTitle;
