import { Children } from 'react';
import FormLayout from './FormLayout';
import FormLayoutActionsContainer from './FormLayoutActionsContainer';
import DynamicFormSection from './DynamicFormSection';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {Function} [props.renderActions] - Render function for the form actions area
 */
const DynamicFormLayout = (props) => {
    const { renderActions, contextCls, children } = props;
    const mainContent = Children.toArray(children).map((content) => {
        if (content.props.shouldRetainLayout) {
            return content;
        }

        return (
            <DynamicFormSection key={content?.key}>
                {content}
            </DynamicFormSection>
        );
    });

    return (
        <FormLayout contextCls={contextCls}>
            {mainContent}
            {renderActions && (
                <FormLayoutActionsContainer>
                    {renderActions()}
                </FormLayoutActionsContainer>
            )}
        </FormLayout>
    );
};

export default DynamicFormLayout;
