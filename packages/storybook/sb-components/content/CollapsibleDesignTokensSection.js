/* eslint-disable react/no-multi-comp */
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {
    Accordion,
    AccordionContentComposer,
} from '@epr0t0type/bankai-ui-accordions';
import SBDesignTokensTable from '../tables/SBDesignTokensTable';
import strings from '../../i18n/strings.json';

// Styles
import './styles/collapsible-design-tokens-section.scss';

const { bankaiUI: locale } = strings;
const baseCls = 'bankai-sb-collapsible-dt-section';
const ContentContainer = ({ children }) => (
    <div className={`${baseCls}__content-container`}>{children}</div>
);
const ComposedContentContainer = AccordionContentComposer(ContentContainer);

const CollapsibleDesignTokensSection = (props) => {
    const { contextCls, tokens, children } = props;

    return (
        <Accordion contextCls={cx(baseCls, contextCls)}>
            <ComposedContentContainer
                accItemProps={{
                    id: '001',
                }}
                accTriggerProps={{
                    children: locale.shared.designTokens.title,
                }}
            >
                {children}
                <SBDesignTokensTable data={tokens} />
            </ComposedContentContainer>
        </Accordion>
    );
};

CollapsibleDesignTokensSection.defaultProps = {
    tokens: [],
};

CollapsibleDesignTokensSection.propTypes = {
    contextCls: PropTypes.string,
    tokens: PropTypes.arrayOf(PropTypes.object),
};

export default CollapsibleDesignTokensSection;
