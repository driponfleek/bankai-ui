import { Children } from 'react';
import FormLayoutSection from './FormLayoutSection';
import DynamicFormRow from './DynamicFormRow';

const DynamicFormSection = (props) => {
    const { children } = props;
    const mainContent = Children.toArray(children).map((content) => {
        if (content.props.shouldRetainLayout) {
            return content;
        }

        return <DynamicFormRow key={content?.key}>{content}</DynamicFormRow>;
    });

    return <FormLayoutSection {...props}>{mainContent}</FormLayoutSection>;
};

export default DynamicFormSection;
