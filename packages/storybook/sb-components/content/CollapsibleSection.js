/* eslint-disable react/no-multi-comp */
import PropTypes from 'prop-types';
import cx from 'classnames';
import {
    Accordion,
    AccordionContentComposer,
} from '@epr0t0type/bankai-ui-accordions';
import { v4 as uuidv4 } from 'uuid';
import CollapsibleSectionContent from './CollapsibleSectionContent';

// Styles
import './styles/collapsible-design-tokens-section.scss';

const baseCls = 'bankai-sb-collapsible-dt-section';
const ComposedContentContainer = AccordionContentComposer(
    CollapsibleSectionContent,
    { shouldPadContent: true },
);
const id = uuidv4();

const CollapsibleSection = (props) => {
    const { contextCls, triggerContent, children } = props;

    return (
        <Accordion contextCls={cx(baseCls, contextCls)}>
            <ComposedContentContainer
                className={`${baseCls}__content-container`}
                accItemProps={{ id }}
                accTriggerProps={{
                    children: triggerContent,
                }}
            >
                {children}
            </ComposedContentContainer>
        </Accordion>
    );
};

CollapsibleSection.propTypes = {
    contextCls: PropTypes.string,
    triggerContent: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default CollapsibleSection;
