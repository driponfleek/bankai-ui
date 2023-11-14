import PropTypes from 'prop-types';
import { Banner, VARIANTS } from '@driponfleek/bankai-ui-callouts';
import {
    BankaiCloud,
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
            return BankaiCloud;
    }
};

const SectionBannerPlayground = (props) => {
    const { variant } = props;
    const Icon = getIcon(variant);
    const renderIcon = (iconProps) => {
        console.log('iconProps');

        return <Icon contextCls={iconProps.contextCls} />;
    };
    const compProps = {
        ...props,
        renderIcon,
    };

    return (
        <StorySection>
            <ComponentPreview shouldCheckA11Y>
                <Banner {...compProps} />
            </ComponentPreview>
        </StorySection>
    );
};

SectionBannerPlayground.propTypes = {
    variant: PropTypes.string,
};

export default SectionBannerPlayground;
