import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Accordion } from '@epr0t0type/bankai-ui-accordions';
import { Hyperlink } from '@epr0t0type/bankai-ui-typography';
import packageJSON from '@epr0t0type/bankai-ui-accordions/package.json';
import { v4 as uuidv4 } from 'uuid';
import MockAccordionContent from './components/MockAccordionContent';
import CustomAccordion from './components/CustomAccordion';
import CustomTrigger from './components/CustomTrigger';
import {
    usageCodeStr,
    customTriggerExampleCodeStr,
    customAccordionExampleCodeStr,
} from './codeStr/codeStrAccordion';
import CalloutBannerInfo from '../../../../sb-components/callouts/CalloutBannerInfo';
import StoryLayout from '../../../../sb-components/layout/StoryLayout';
import StorySection from '../../../../sb-components/layout/StorySection';
import SectionTitle from '../../../../sb-components/content/SectionTitle';
import ComponentPreview from '../../../../sb-components/content/ComponentPreview';
import ComponentPreviewWithCodeBlock from '../../../../sb-components/content/ComponentPreviewWithCodeBlock';
import Paragraph from '../../../../sb-components/content/Paragraph';
import List from '../../../../sb-components/content/List';
import ListItem from '../../../../sb-components/content/ListItem';
// import CodeBlock from '../../../../sb-components/content/CodeBlock';
import CodeTag from '../../../../sb-components/content/CodeTag';
import strings from '../../../../i18n/strings.json';

// Utils
import { getComponentsTitle } from '../../../../utils/storiesConfig';

// Styles
// import './styles/guide-avatar.scss';

const { bankaiUI: locale } = strings;

class GuideAccordion extends PureComponent {
    static defaultProps = {
        shouldAllowMultipleExpanded: false,
        shouldAllowZeroExpanded: true,
    };

    static propTypes = {
        contextCls: PropTypes.string,
        headingLvl: PropTypes.number,
        shouldAllowMultipleExpanded: PropTypes.bool,
        shouldAllowZeroExpanded: PropTypes.bool,
        preExpanded: PropTypes.array,
        renderCustomTrigger: PropTypes.func,
        renderTriggerIcon: PropTypes.func,
        onChange: PropTypes.func,
    };

    static displayName = locale.stories.components.accordions.accordion.title;

    render() {
        return (
            <StoryLayout
                contextCls={this.baseCls}
                packageVer={packageJSON.version}
                title={locale.stories.components.accordions.accordion.title}
                subTitle={getComponentsTitle(
                    locale.stories.components.accordions.categoryTitle,
                )}
            >
                {this.renderDemo()}
                {this.renderUsage()}
                {this.renderAccordionContentComposer()}
                {this.renderCustomTriggerExample()}
                {this.renderCustomAccordionExample()}
            </StoryLayout>
        );
    }

    renderDemo() {
        return (
            <StorySection>
                <ComponentPreview shouldCheckA11Y>
                    {this.renderAccordion(true)}
                </ComponentPreview>
                <Paragraph>
                    Accordions are sections of content that can be exapnded and
                    collapsed by users. Consider using an accordion as a way to
                    hide optional content on long pages and reduce scroling.
                </Paragraph>
                <Paragraph>
                    A good example would be if there is supplemental content
                    that is not always necessary to the user. If it makes sense
                    to let the user decide if they want to skip this content or
                    read it, an Accordion is a good option.
                </Paragraph>
                <CalloutBannerInfo>
                    {locale.designSystemName}&apos;s Accordion uses{' '}
                    <Hyperlink
                        href="https://github.com/springload/react-accessible-accordion"
                        shouldOpenInNewWindow
                    >
                        react-accessible-accordion
                    </Hyperlink>{' '}
                    behind the scenes. We&apos;ve created a central component to
                    simplify the implementation and also export all the
                    componenents necessary for composing your own custom
                    implementations.
                </CalloutBannerInfo>
            </StorySection>
        );
    }

    renderUsage = () => {
        // const data = getAccordionTokenData();

        return (
            <StorySection>
                <SectionTitle>Usage</SectionTitle>
                <ComponentPreviewWithCodeBlock
                    contextCls={`${this.baseCls}__examples-preview`}
                    codeString={usageCodeStr}
                >
                    {this.renderAccordion()}
                </ComponentPreviewWithCodeBlock>
                {/* <CollapsibleDesignTokensSection tokens={data} /> */}
            </StorySection>
        );
    };

    renderAccordionContentComposer = () => {
        return (
            <StorySection>
                <SectionTitle headingLvl={3}>
                    Accordion Content Composer
                </SectionTitle>
                <Paragraph>
                    In order for the accordion to provide the accessibility and
                    functionality needed, there are 2 props that should always
                    be added to the content&#58;
                </Paragraph>
                <List>
                    <ListItem>
                        <CodeTag>accItemProps.id</CodeTag> - Used to set the{' '}
                        <strong>id</strong> of the accordion content and
                        associate it to its trigger for accessibility purposes.
                    </ListItem>
                    <ListItem>
                        <CodeTag>accTriggerProps.children</CodeTag> - Used to
                        customize the content inside the Accordion item&apos;s
                        trigger. Any additional trigger props will be passed to
                        the Accordion Trigger component.
                    </ListItem>
                </List>
                <Paragraph>
                    For this reason, {locale.designSystemName} provides an{' '}
                    <CodeTag>AccordionContentComposer</CodeTag> to safeguard
                    against these props being passed to your actual content.
                </Paragraph>
                <Paragraph>
                    The <strong>AccordionContentComposer</strong> is a
                    higher-order component that takes two arguments&#58;
                </Paragraph>
                <List>
                    <ListItem>
                        The component to be wrapped &#40;
                        <abbr title="Also Known As">a.k.a.</abbr> your accordion
                        content&#41;.
                    </ListItem>
                    <ListItem>
                        An object to set <CodeTag>shouldPadContent</CodeTag> and{' '}
                        <CodeTag>contextCls</CodeTag>.
                        <List>
                            <ListItem>
                                <strong>shouldPadContent</strong> - used to
                                enable the padding of content. Its default value
                                is <CodeTag>false</CodeTag>.
                            </ListItem>
                            <ListItem>
                                <strong>contextCls</strong> -{' '}
                                {locale.shared.propDesc.contextCls}
                            </ListItem>
                        </List>
                    </ListItem>
                </List>
            </StorySection>
        );
    };

    renderCustomTriggerExample = () => {
        return (
            <StorySection>
                <SectionTitle>Custom Accordion Triggers</SectionTitle>
                <ComponentPreviewWithCodeBlock
                    contextCls={`${this.baseCls}__examples-preview`}
                    codeString={customTriggerExampleCodeStr}
                >
                    {this.renderAccordion({
                        renderTrigger: this.renderCustomTrigger,
                    })}
                </ComponentPreviewWithCodeBlock>
            </StorySection>
        );
    };

    renderCustomTrigger = (accTriggerProps) => {
        const { children, headingProps, ...rest } = accTriggerProps || {};
        const { headingLvl: hpHeadingLvl } = headingProps || {};
        const hProps = {
            ...headingProps,
            headingLvl: hpHeadingLvl,
        };

        return (
            <CustomTrigger
                contextCls="bankai-accordion-item-trigger"
                headingProps={hProps}
                {...rest}
            >
                {children}
            </CustomTrigger>
        );
    };

    renderCustomAccordionExample = () => {
        return (
            <StorySection>
                <SectionTitle>Custom Accordions</SectionTitle>
                <Paragraph>
                    {locale.designSystemName} provides a minimally-styled
                    Accordion to reduce the CSS needed to start from scratch
                    when creating your own accordion style.
                </Paragraph>
                <ComponentPreviewWithCodeBlock
                    contextCls={`${this.baseCls}__examples-preview`}
                    codeString={customAccordionExampleCodeStr}
                >
                    <CustomAccordion />
                </ComponentPreviewWithCodeBlock>
            </StorySection>
        );
    };

    renderAccordion = (params = {}) => {
        const { isDemo, renderTrigger } = params;
        const props = {
            ...(isDemo && this.props),
            headingLvl: 2,
            ...(renderTrigger && { renderTrigger }),
        };

        return (
            <Accordion {...props}>
                <MockAccordionContent
                    accItemProps={{
                        id: `item-${uuidv4()}`,
                    }}
                    accTriggerProps={{
                        children: 'Accordion Item 1',
                    }}
                >
                    {this.renderParagraph(isDemo)}
                </MockAccordionContent>
                <MockAccordionContent
                    accItemProps={{
                        id: `item-${uuidv4()}`,
                    }}
                    accTriggerProps={{
                        children: 'Accordion Item 2',
                    }}
                >
                    {this.renderParagraph(isDemo)}
                </MockAccordionContent>
                <MockAccordionContent
                    accItemProps={{
                        id: `item-${uuidv4()}`,
                    }}
                    accTriggerProps={{
                        children: 'Accordion Item 3',
                    }}
                >
                    {this.renderParagraph(isDemo)}
                </MockAccordionContent>
            </Accordion>
        );
    };

    renderParagraph = (isDemo) => {
        const longText =
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum turpis at metus tristique, sed euismod diam rhoncus. Phasellus rutrum diam ac nibh egestas dapibus. Maecenas velit neque, finibus quis mattis volutpat, ultrices eget tellus. Etiam tempor dui ut lacus cursus tincidunt. Cras erat mauris, suscipit et metus interdum, varius semper mauris. Quisque orci lectus, iaculis id tellus ac, viverra vestibulum lorem. Pellentesque placerat nisi in enim efficitur, nec tempor velit porta.';
        const shortText =
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum turpis at metus tristique, sed euismod diam rhoncus.';
        const text = isDemo ? longText : shortText;

        return <Paragraph>{text}</Paragraph>;
    };

    // renderExamples = () => {
    //     return (
    //         <StorySection>
    //             <SectionTitle>Examples</SectionTitle>
    //             <ComponentPreviewWithCodeBlock
    //                 contextCls={`${this.baseCls}__examples-preview`}
    //                 codeString={examplesCodeStr}
    //             >
    //                 <Button text="Primary Button" isPrimary />
    //                 <Button text="Secondary Button" isSecondary />
    //                 <Button
    //                     text="Primary Destructive Button"
    //                     isDestructive
    //                     isPrimary
    //                 />
    //                 <Button
    //                     text="Secondary Destructive Button"
    //                     isDestructive
    //                     isSecondary
    //                 />
    //             </ComponentPreviewWithCodeBlock>
    //         </StorySection>
    //     );
    // };

    baseCls = 'bankai-sb-guide-accordion';
}

export default GuideAccordion;
