import { ButtonSecondary } from '@driponfleek/bankai-ui-buttons';
import { BankaiCircleDash } from '@driponfleek/bankai-ui-icons';
import {
    BannerInfo,
    CodeTag,
    ComponentPreviewWithCodeBlock,
    StorySection,
    SectionTitle,
} from '@driponfleek/bankai-lib-storybook';
import { getBusyIconCodeStrModifier } from '../../utils/storyUtils';

// Utils
import { getLocale } from '../../../../../utils/localeUtils';

const renderCustomBusyIcon = () => (
    <BankaiCircleDash contextCls="bankai-icon-spinner" />
);

const SectionRenderingCustomBusyIcons = () => {
    return (
        <StorySection>
            <SectionTitle headingLvl={3}>
                Rendering a Custom Busy Icon
            </SectionTitle>
            <StorySection>
                <ComponentPreviewWithCodeBlock
                    codeStrModifier={getBusyIconCodeStrModifier}
                    shouldShowCopy={false}
                >
                    <ButtonSecondary
                        text="Saving"
                        renderBusyIcon={renderCustomBusyIcon}
                        isBusy
                    />
                </ComponentPreviewWithCodeBlock>
                <BannerInfo
                    msg={
                        <>
                            {getLocale('designSystemName')} makes no assumptions
                            about the animation that works best for your icon.
                            The default spinning animation can be added to your
                            icon by using the{' '}
                            <CodeTag>bankai-icon-spinner</CodeTag> class.
                        </>
                    }
                />
            </StorySection>
        </StorySection>
    );
};

export default SectionRenderingCustomBusyIcons;
