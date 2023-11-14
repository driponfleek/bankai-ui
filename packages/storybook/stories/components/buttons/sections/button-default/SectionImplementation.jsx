import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonText, ButtonIcon } from '@driponfleek/bankai-ui-buttons';
import {
    BankaiCirclePlus,
    BankaiChevronRight,
    BankaiCircleDash,
} from '@driponfleek/bankai-ui-icons';
import { Paragraph } from '@driponfleek/bankai-ui-typography';
import {
    StorySection,
    SectionTitle,
    BannerInfo,
} from '@driponfleek/bankai-lib-storybook';
import ComponentPreviewWithCodeBlock from '../../../../../sb-components/docblocks/ComponentPreviewWithCodeBlock';
import CodeBlock from '../../../../../sb-components/docblocks/CodeBlock';
import {
    getDynamicTextCodeStrModifier,
    getBusyIconCodeStrModifier,
    getRenderIconCodeStrModifier,
    getRenderCustomContentCodeStrModifier,
} from '../../utils/guideUtils';

// Utils
import { getLocale } from '../../../../../utils/localeUtils';

const renderCustomBusyIcon = () => (
    <BankaiCircleDash contextCls="bankai-icon-spinner" />
);

const SectionImplementation = (props) => {
    const { text, variant } = props;
    const [isDynamicTextBtnBusy, setIsDynamicTextBtnBusy] = useState(false);
    const handleDynamicTextBtnClick = () => {
        setIsDynamicTextBtnBusy(true);
        setTimeout(() => {
            setIsDynamicTextBtnBusy(false);
        }, 1800);
    };
    const dynamicTextBtnText = isDynamicTextBtnBusy ? 'Busy Doing Stuff' : text;

    return (
        <StorySection>
            <SectionTitle>{getLocale('titles.implementation')}</SectionTitle>
            <StorySection>
                <Paragraph>
                    To use the Button component first you&apos;ll need to import
                    it&#58;
                </Paragraph>
                <CodeBlock codeString="import { Button } from '@driponfleek/bankai-ui-buttons';" />
                <Paragraph>Then to use it&#58;</Paragraph>
                <CodeBlock codeString='<Button text="Button Text" />' />
            </StorySection>
            <StorySection>
                <SectionTitle headingLvl={3}>Rendering an Icon</SectionTitle>
                <StorySection>
                    <ComponentPreviewWithCodeBlock
                        codeStrModifier={getRenderIconCodeStrModifier}
                    >
                        <Button
                            text={text}
                            variant={variant}
                            renderIcon={BankaiCirclePlus}
                        />
                    </ComponentPreviewWithCodeBlock>
                </StorySection>
            </StorySection>
            <StorySection>
                <SectionTitle headingLvl={3}>
                    Rendering a Busy Icon
                </SectionTitle>
                <StorySection>
                    <ComponentPreviewWithCodeBlock
                        codeStrModifier={getBusyIconCodeStrModifier}
                    >
                        <Button
                            text={text}
                            variant={variant}
                            renderBusyIcon={renderCustomBusyIcon}
                            isBusy
                        />
                    </ComponentPreviewWithCodeBlock>
                    <BannerInfo
                        msg={`The spinning animation is not supplied with a custom busy icon. If desired it can be added back using the "bankai-icon-spinner" class. ${getLocale(
                            'designSystemName',
                        )} makes no assumptions about the animation that works best for your icon.`}
                    />
                </StorySection>
            </StorySection>
            <StorySection>
                <SectionTitle headingLvl={3}>
                    Rendering Custom Content
                </SectionTitle>
                <StorySection>
                    <ComponentPreviewWithCodeBlock
                        codeStrModifier={getRenderCustomContentCodeStrModifier}
                    >
                        <Button>
                            <ButtonText>(∩^o^)⊃━☆゜.* Magic!</ButtonText>
                            <ButtonIcon renderIcon={BankaiChevronRight} />
                        </Button>
                    </ComponentPreviewWithCodeBlock>
                </StorySection>
            </StorySection>
            <StorySection>
                <SectionTitle headingLvl={3}>Dynamic Text</SectionTitle>
                <StorySection>
                    <ComponentPreviewWithCodeBlock
                        codeStrModifier={getDynamicTextCodeStrModifier}
                    >
                        <Button
                            text={dynamicTextBtnText}
                            variant={variant}
                            renderIcon={BankaiCirclePlus}
                            renderBusyIcon={renderCustomBusyIcon}
                            isBusy={isDynamicTextBtnBusy}
                            onClick={handleDynamicTextBtnClick}
                            isDynamicText
                        />
                    </ComponentPreviewWithCodeBlock>
                </StorySection>
            </StorySection>
        </StorySection>
    );
};

SectionImplementation.propTypes = {
    text: PropTypes.string,
    variant: PropTypes.string,
};

export default SectionImplementation;
