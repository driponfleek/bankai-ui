import { Children } from 'react';
import FormLayoutRow from './FormLayoutRow';
import FormLayoutFieldContainer from './FormLayoutFieldContainer';

/**
 * @param {Object} props
 * @param {React.ReactNode} [props.children] - Child field components; each is wrapped in a FormLayoutFieldContainer unless it has `shouldRetainLayout`
 */
const DynamicFormRow = (props) => {
    const { children } = props;
    const mainContent = Children.toArray(children).map((content) => {
        if (content.props.shouldRetainLayout) {
            return content;
        }

        return (
            <FormLayoutFieldContainer key={content?.key}>
                {content}
            </FormLayoutFieldContainer>
        );
    });

    return <FormLayoutRow {...props}>{mainContent}</FormLayoutRow>;
};

export default DynamicFormRow;
