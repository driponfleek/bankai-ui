import PropTypes from 'prop-types';
import { Callout, VARIANTS } from '@driponfleek/bankai-ui-callouts';
import {
    BankaiCalendar,
    BankaiCircleCheck,
    BankaiCircleInfo,
    BankaiTriangleAlert,
} from '@driponfleek/bankai-ui-icons';
import {
    StorySection,
    ComponentPreview,
} from '@driponfleek/bankai-lib-storybook';

const { AFFIRMATIVE, CAUTIONARY, DANGER, INFO } = VARIANTS;

const getIcon = (variant) => {
    switch (variant) {
        case AFFIRMATIVE:
            return BankaiCircleCheck;
        case CAUTIONARY:
        case DANGER:
            return BankaiTriangleAlert;
        case INFO:
            return BankaiCircleInfo;
        default:
            return BankaiCalendar;
    }
};

const SectionCalloutPlayground = (props) => {
    const { variant } = props;
    const Icon = getIcon(variant);
    const renderIcon = ({ contextCls }) => <Icon contextCls={contextCls} />;
    const compProps = {
        ...props,
        renderIcon,
    };

    return (
        <StorySection>
            <ComponentPreview shouldCheckA11Y>
                <Callout {...compProps} />
            </ComponentPreview>
        </StorySection>
    );
};

SectionCalloutPlayground.propTypes = {
    variant: PropTypes.string,
};

export default SectionCalloutPlayground;
