import PropTypes from 'prop-types';
import {
    BankaiChevronDown,
    BankaiSettings,
} from '@driponfleek/bankai-ui-icons';
import {
    ButtonSecondary,
    ButtonText,
    ButtonIcon,
} from '@driponfleek/bankai-ui-buttons';
import {
    StorySection,
    SectionTitle,
    CompPreviewWithBanner,
} from '@driponfleek/bankai-lib-storybook';

// Styles
import './styles/section-icon-placement.scss';

const SectionIconPlacement = (props) => {
    const { baseCls } = props;
    const leftOfTextBannerProps = {
        msg: (
            <>
                <strong>Left Side&#58;</strong> The most common use case. Place
                icons to the left of the button text when the icon&apos;s role
                is crucial to understanding the primary action or when the icon
                serves as a visual cue for quick recognition.
            </>
        ),
    };
    const rightOfTextBannerProps = {
        msg: (
            <>
                <strong>Right Side&#58;</strong> Position icons to the right of
                the button text when the icon is secondary or supportive and
                doesn&apos;t play a crucial role in immediate recognition.
            </>
        ),
    };

    return (
        <StorySection contextCls={`${baseCls}__icon-placement`}>
            <SectionTitle headingLvl={3}>Icon Placement</SectionTitle>
            <StorySection>
                <CompPreviewWithBanner
                    bannerProps={leftOfTextBannerProps}
                    shouldRenderIcon={false}
                >
                    <ButtonSecondary
                        text="Settings"
                        renderIcon={BankaiSettings}
                    />
                </CompPreviewWithBanner>
                <CompPreviewWithBanner
                    bannerProps={rightOfTextBannerProps}
                    shouldRenderIcon={false}
                >
                    <ButtonSecondary>
                        <ButtonText>Menu</ButtonText>
                        <ButtonIcon renderIcon={BankaiChevronDown} />
                    </ButtonSecondary>
                </CompPreviewWithBanner>
            </StorySection>
        </StorySection>
    );
};

SectionIconPlacement.propTypes = {
    baseCls: PropTypes.string,
};

export default SectionIconPlacement;
