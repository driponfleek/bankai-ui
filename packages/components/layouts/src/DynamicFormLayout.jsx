import { Children } from 'react';
import PropTypes from 'prop-types';
import FormLayout from './FormLayout';
import FormLayoutActionsContainer from './FormLayoutActionsContainer';
import DynamicFormSection from './DynamicFormSection';

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

DynamicFormLayout.propTypes = {
    contextCls: PropTypes.string,
    renderActions: PropTypes.func,
};

export default DynamicFormLayout;
