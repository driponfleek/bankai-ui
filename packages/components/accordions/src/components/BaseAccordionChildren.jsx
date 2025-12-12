import { Children } from 'react';
import BaseAccordionItem from './BaseAccordionItem';

// Constants
import { ACCORDION_BASE_BASE_CLS } from '../const/baseClsConst';

const BaseAccordionChildren = (props) => {
    const { children, ...rest } = props;

    return Children.toArray(children).map((content = {}) => (
        <BaseAccordionItem
            baseCls={ACCORDION_BASE_BASE_CLS}
            key={content.key}
            content={content}
            {...rest}
        />
    ));
};

export default BaseAccordionChildren;
