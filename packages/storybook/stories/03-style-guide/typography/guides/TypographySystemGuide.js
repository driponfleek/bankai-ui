import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Heading, Hyperlink } from '@epr0t0type/bankai-ui-typography';
import {
    CORE_TYPOGRAPHY_STYLE_TOKEN_NAMES,
    getCoreFontSizes,
} from '@epr0t0type/bankai-lib-theme-utils';
import { Helmet } from 'react-helmet';
import CalloutBannerInfo from '../../../../sb-components/callouts/CalloutBannerInfo';
import ComponentPreview from '../../../../sb-components/content/ComponentPreview';
import List from '../../../../sb-components/content/List';
import ListItem from '../../../../sb-components/content/ListItem';
import Paragraph from '../../../../sb-components/content/Paragraph';
import StoryLayout from '../../../../sb-components/layout/StoryLayout';
import StorySection from '../../../../sb-components/layout/StorySection';
import SectionTitle from '../../../../sb-components/content/SectionTitle';
import TypographyList from '../../../../sb-components/lists/TypographyList';
import SBDesignTokensTable from '../../../../sb-components/tables/SBDesignTokensTable';
import strings from '../../../../i18n/strings.json';

// Utils
import { getStyleGuideTitle } from '../../../../utils/storiesConfig';

// Constants
import {
    TYPE_RATIO_VALUES,
    TYPE_RATIO_NAMES,
    READABLE_TYPE_RATIO_NAMES,
} from './const/typeRatiosConst';

// Styles
import './styles/typography-system-guide.scss';

const { bankaiUI: locale } = strings;
const { MINOR_THIRD } = TYPE_RATIO_NAMES;
const {
    CORE_TYPOGRAPHY_FONT_SIZE,
    CORE_TYPOGRAPHY_FONT_SIZE_SCALE,
    CORE_TYPOGRAPHY_FOOTNOTE_FONT_SIZE,
    CORE_TYPOGRAPHY_HEADINGS_LEVEL1_FONT_SIZE,
    CORE_TYPOGRAPHY_HEADINGS_LEVEL2_FONT_SIZE,
    CORE_TYPOGRAPHY_HEADINGS_LEVEL3_FONT_SIZE,
    CORE_TYPOGRAPHY_HEADINGS_LEVEL4_FONT_SIZE,
    CORE_TYPOGRAPHY_HEADINGS_LEVEL5_FONT_SIZE,
    CORE_TYPOGRAPHY_SUB_TEXT_FONT_SIZE,
} = CORE_TYPOGRAPHY_STYLE_TOKEN_NAMES;

class TypographySystemGuide extends Component {
    static defaultProps = {
        baseSize: 16,
        scale: `${READABLE_TYPE_RATIO_NAMES[MINOR_THIRD]} (${TYPE_RATIO_VALUES[MINOR_THIRD]})`,
    };

    static propTypes = {
        baseSize: PropTypes.number,
        scale: PropTypes.string,
    };

    render() {
        return (
            <StoryLayout
                contextCls={this.baseCls}
                title={
                    locale.stories.styleGuide.typography.typographySystem.title
                }
                subTitle={getStyleGuideTitle(
                    locale.stories.styleGuide.typography.categoryTitle,
                )}
            >
                {this.renderHelmet()}
                {this.renderIntro()}
                {this.renderDemo()}
                {this.renderHowItWorks()}
                {this.renderBestPractice()}
                {this.renderFurtherReading()}
            </StoryLayout>
        );
    }

    renderHelmet = () => {
        const { baseSize } = this.props;
        const scale = this.getScaleVal();
        const { footnote, formInput, h1, h2, h3, h4, h5, subText } =
            getCoreFontSizes({ baseSize, scale });

        return (
            <Helmet>
                <style>
                    {`.bankai-sb-typography-system-guide .bankai-sb-component-preview {
                        --bankai-core-typography-footnote-font-size: ${this.getFontSizeAsREM(
                            footnote,
                        )};
                        --bankai-core-typography-font-size: ${this.getFontSizeAsREM(
                            baseSize,
                        )};
                        --bankai-core-typography-form-input-font-size: ${this.getFontSizeAsREM(
                            formInput,
                        )};
                        --bankai-core-typography-headings-level1-font-size: ${this.getFontSizeAsREM(
                            h1,
                        )};
                        --bankai-core-typography-headings-level2-font-size: ${this.getFontSizeAsREM(
                            h2,
                        )};
                        --bankai-core-typography-headings-level3-font-size: ${this.getFontSizeAsREM(
                            h3,
                        )};
                        --bankai-core-typography-headings-level4-font-size: ${this.getFontSizeAsREM(
                            h4,
                        )};
                        --bankai-core-typography-headings-level5-font-size: ${this.getFontSizeAsREM(
                            h5,
                        )};
                        --bankai-core-typography-sub-text-font-size: ${this.getFontSizeAsREM(
                            subText,
                        )};
                    }`}
                </style>
            </Helmet>
        );
    };

    renderIntro = () => {
        return (
            <StorySection>
                <Paragraph>
                    {locale.designSystemName} uses a modular typography scale
                    system to create harmonious type sizes that are pleasant for
                    end users and scalable for applications.
                </Paragraph>
            </StorySection>
        );
    };

    renderDemo = () => {
        return (
            <StorySection>
                <div className={`${this.baseCls}__demo`}>
                    {this.renderFontStack()}
                    <ComponentPreview id={`${this.baseCls}-examples`}>
                        {this.renderDemoColumns()}
                    </ComponentPreview>
                </div>
            </StorySection>
        );
    };

    renderFontStack() {
        const fonts = [
            {
                categoryText: 'Headings',
                // fontFamilyName: 'Bankai UI Headings',
                fontFamilyName: 'Alegreya Sans',
            },
            {
                categoryText: 'Body',
                // fontFamilyName: 'Bankai UI Body',
                fontFamilyName: 'Libre Franklin',
            },
        ];

        return (
            <TypographyList
                contextCls={`${this.baseCls}__typography-stack`}
                data={fonts}
            />
        );
    }

    renderDemoColumns = () => {
        return (
            <div className={`${this.baseCls}__demo-columns`}>
                <div className={`${this.baseCls}__demo-columns-left`}>
                    <div className={`${this.baseCls}__demo-text-container`}>
                        <Paragraph
                            contextCls={`${this.baseCls}__type-designation`}
                        >
                            Heading &#40;Level 1&#41;
                        </Paragraph>
                        <Heading headingLvl={1}>
                            {this.renderHeadingText()}
                        </Heading>
                    </div>
                    <div className={`${this.baseCls}__demo-text-container`}>
                        <Paragraph
                            contextCls={`${this.baseCls}__type-designation`}
                        >
                            Heading &#40;Level 2&#41;
                        </Paragraph>
                        <Heading>{this.renderHeadingText()}</Heading>
                    </div>
                    <div className={`${this.baseCls}__demo-text-container`}>
                        <Paragraph
                            contextCls={`${this.baseCls}__type-designation`}
                        >
                            Heading &#40;Level 3&#41;
                        </Paragraph>
                        <Heading headingLvl={3}>
                            {this.renderHeadingText()}
                        </Heading>
                    </div>
                    <div className={`${this.baseCls}__demo-text-container`}>
                        <Paragraph
                            contextCls={`${this.baseCls}__type-designation`}
                        >
                            Heading &#40;Level 4&#41;
                        </Paragraph>
                        <Heading headingLvl={4}>
                            {this.renderHeadingText()}
                        </Heading>
                    </div>
                    <div className={`${this.baseCls}__demo-text-container`}>
                        <Paragraph
                            contextCls={`${this.baseCls}__type-designation`}
                        >
                            Heading &#40;Level 5&#41;
                        </Paragraph>
                        <Heading headingLvl={5}>
                            {this.renderHeadingText()}
                        </Heading>
                    </div>
                </div>
                <div className={`${this.baseCls}__demo-columns-right`}>
                    <div className={`${this.baseCls}__demo-text-container`}>
                        <Paragraph
                            contextCls={`${this.baseCls}__type-designation`}
                        >
                            Sub-Text
                        </Paragraph>
                        <Paragraph contextCls={`${this.baseCls}__sub-text`}>
                            {this.renderDummyText()}
                        </Paragraph>
                    </div>
                    <div className={`${this.baseCls}__demo-text-container`}>
                        <Paragraph
                            contextCls={`${this.baseCls}__type-designation`}
                        >
                            Body &#40;Regular&#41;
                        </Paragraph>
                        <Paragraph contextCls={`${this.baseCls}__paragraph`}>
                            {this.renderDummyText()}
                        </Paragraph>
                    </div>
                    <div className={`${this.baseCls}__demo-text-container`}>
                        <Paragraph
                            contextCls={`${this.baseCls}__type-designation`}
                        >
                            Footnote
                        </Paragraph>
                        <Paragraph contextCls={`${this.baseCls}__footnote`}>
                            {this.renderDummyText()}
                        </Paragraph>
                    </div>
                </div>
            </div>
        );
        // return (
        //     <StorySection>
        //         {/* <SectionTitle>Bankai Typography Scaling System</SectionTitle> */}
        //         <ComponentPreview id={`${this.baseCls}-examples`}>
        //             <Heading headingLvl={1}>H1: A Dynamic Type Scale</Heading>
        //             <Heading>H2: A Dynamic Type Scale</Heading>
        //             <Heading headingLvl={3}>H3: A Dynamic Type Scale</Heading>
        //             <Heading headingLvl={4}>H4: A Dynamic Type Scale</Heading>
        //             <Heading headingLvl={5}>H5: A Dynamic Type Scale</Heading>
        //             <Paragraph contextCls={`${this.baseCls}__sub-text`}>
        //                 Sub-Text Example
        //             </Paragraph>
        //             <Paragraph contextCls={`${this.baseCls}__paragraph`}>
        //                 <strong>Body Text: </strong> Lorem ipsum dolor sit amet,
        //                 consectetur adipiscing elit. Maecenas imperdiet lectus
        //                 non nisi aliquam, a condimentum mi convallis. Nullam ac
        //                 molestie neque. Ut tincidunt, felis eget iaculis ornare,
        //                 dui velit eleifend velit, a maximus nunc tellus vel
        //                 quam. Quisque vitae venenatis ligula, a dictum sapien.
        //             </Paragraph>
        //             <Paragraph contextCls={`${this.baseCls}__footnote`}>
        //                 Footnote example. Commonly used for things like
        //                 fine-print, disclaimers etc.
        //             </Paragraph>
        //         </ComponentPreview>
        //         <Paragraph>
        //             Bankai UI uses a modular typography scale system to create
        //             harmonious type sizes that are pleasant for end users and
        //             scalable for applications.
        //         </Paragraph>
        //         <Paragraph>
        //             We start with a base font size of 16px which aligns to the
        //             web browser&apos;s default setting. Then, we scale up or
        //             down by the selected ratio. Bankai UI&apos;s default ratio
        //             is <strong>Minor Third (1.2)</strong>.
        //         </Paragraph>
        //         <Paragraph>
        //             For Headings, we start at the lowest size and work our way
        //             up the the largest:
        //         </Paragraph>
        //         <ul>
        //             <li>
        //                 <strong>H5</strong>: 16px &times; 1.2 = <em>{h5}px</em>
        //             </li>
        //             <li>
        //                 <strong>H4</strong>: H5 Font Size &times; 1.2 ={' '}
        //                 <em>{h4}px</em>
        //             </li>
        //             <li>
        //                 <strong>H3</strong>: H4 Font Size &times; 1.2 ={' '}
        //                 <em>{h3}px</em>
        //             </li>
        //             <li>
        //                 <strong>H2</strong>: H3 Font Size &times; 1.2 ={' '}
        //                 <em>{h2}px</em>
        //             </li>
        //             <li>
        //                 <strong>H1</strong>: H2 Font Size &times; 1.2 ={' '}
        //                 <em>{h1}px</em>
        //             </li>
        //             <li>
        //                 <strong>Sub-Text</strong>: 16px &#47; 1.2 ={' '}
        //                 <em>{subText}px</em>
        //             </li>
        //             <li>
        //                 <strong>Footnote</strong>: Sub-Text &#47; 1.2 ={' '}
        //                 <em>{footnote}px</em>
        //             </li>
        //         </ul>
        //         <Paragraph>
        //             <em>
        //                 (Values above have been rounded to the nearest whole
        //                 number.)
        //             </em>
        //         </Paragraph>
        //         <Paragraph>
        //             <strong>Reference:</strong>
        //         </Paragraph>
        //         <ul>
        //             <li>
        //                 <Hyperlink
        //                     href="https://medium.com/sketch-app-sources/exploring-responsive-type-scales-cf1da541be54"
        //                     shouldOpenInNewWindow
        //                 >
        //                     Exploring Responsive Type Scales
        //                 </Hyperlink>
        //             </li>
        //             <li>
        //                 <Hyperlink
        //                     href="https://pairfonts.eu/articles/typographic-scale.php"
        //                     shouldOpenInNewWindow
        //                 >
        //                     The Typographic Scale – Harmony in Fonts
        //                 </Hyperlink>
        //             </li>
        //             <li>
        //                 <Hyperlink
        //                     href="https://type-scale.com/"
        //                     shouldOpenInNewWindow
        //                 >
        //                     Type Scale - A Visual Calculator
        //                 </Hyperlink>
        //             </li>
        //         </ul>
        //     </StorySection>
        // );
    };

    renderHowItWorks = () => {
        const { baseSize } = this.props;
        const scale = this.getScaleVal();
        const data = this.getTokensTableData();

        return (
            <StorySection>
                <SectionTitle>How It Works</SectionTitle>
                <Paragraph>
                    We start with a given base font size &#40;{`${baseSize}px`}
                    &#41; and scale either up or down from there via the
                    selected font size scale &#40;{scale}&#41;.
                </Paragraph>
                <SBDesignTokensTable data={data} />
                <CalloutBannerInfo msg="Values shown in the table have been rounded to the nearest whole number." />
            </StorySection>
        );
    };

    renderFurtherReading = () => {
        return (
            <StorySection>
                <SectionTitle>Further reading</SectionTitle>
                <List>
                    <ListItem>
                        <Hyperlink
                            href="https://medium.com/sketch-app-sources/exploring-responsive-type-scales-cf1da541be54"
                            shouldOpenInNewWindow
                        >
                            Exploring Responsive Type Scales
                        </Hyperlink>
                    </ListItem>
                    <ListItem>
                        <Hyperlink
                            href="https://pairfonts.eu/articles/typographic-scale.php"
                            shouldOpenInNewWindow
                        >
                            The Typographic Scale – Harmony in Fonts
                        </Hyperlink>
                    </ListItem>
                    <ListItem>
                        <Hyperlink
                            href="https://type-scale.com/"
                            shouldOpenInNewWindow
                        >
                            Type Scale - A Visual Calculator
                        </Hyperlink>
                    </ListItem>
                </List>
            </StorySection>
        );
    };

    renderBestPractice = () => {
        return (
            <StorySection>
                <SectionTitle>Best Practice &amp; Accessibility</SectionTitle>
                <StorySection>
                    <Paragraph>
                        Typographical hierarchy plays a very important role in
                        the readability and accessibility of your content. It
                        helps users find relevant information and aids in the
                        comprehension of information. Consider the following
                        best practices and accessibility guidelines when working
                        with typography:
                    </Paragraph>
                </StorySection>
                {this.renderHeadingsBestPractice()}
                {this.renderSizeBestPractice()}
            </StorySection>
        );
    };

    renderHeadingsBestPractice = () => {
        return (
            <StorySection>
                <SectionTitle headingLvl={3}>Headings</SectionTitle>
                <Paragraph>
                    Headings help users quickly find sections of content and
                    provide a quick summary to users on what they will find if
                    they continue reading content for that section.
                </Paragraph>
                <List>
                    <ListItem>
                        If your design calls for a Heading &#40;Level 1&#41;,
                        there should only be one on the page and it should be
                        reserved for the page heading.
                    </ListItem>
                    <ListItem>
                        Headings should describe the content that follows it.
                        &#40;
                        <Hyperlink
                            href="https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels.html"
                            shouldOpenInNewWindow
                        >
                            {this.renderWCAGText()} Spec&#58; Headings &amp;
                            Labels
                        </Hyperlink>
                        &#41;
                    </ListItem>
                    <ListItem>
                        Headings should be larger than your body text. This
                        helps with the readability and scanability of your
                        Headings. Users expect headings to be larger than body
                        text and headings are seen as being of higher importance
                        in typographical hierarchies.{' '}
                        {this.renderWCAGOrganizingPageUsingHeadings()}
                    </ListItem>
                    <ListItem>
                        In most cases you should not skip heading levels. Doing
                        so can cause confusion for your users and lead to an
                        improper implementation which leads to accessibility
                        violations. Designers should make every effort to use
                        the semantically-correct heading level size they have
                        designated in their design system and only create
                        exceptions sparingly. Some examples of exceptions
                        include &#40;but not limited to&#41; marketing marquees,
                        Sections, Callouts, <abbr title="et cetra">etc</abbr>.{' '}
                        {this.renderWCAGOrganizingPageUsingHeadings()}
                    </ListItem>
                </List>
            </StorySection>
        );
    };

    renderSizeBestPractice = () => {
        return (
            <StorySection>
                <SectionTitle headingLvl={3}>Text Size</SectionTitle>
                <Paragraph>
                    Designs should account for users increasing their font size
                    up to 200% of its original size. There should be no loss of
                    content or functionality in this scenario. &#40;
                    <Hyperlink
                        href="https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html"
                        shouldOpenInNewWindow
                    >
                        {this.renderWCAGText()} Spec&#58; Resize Text
                    </Hyperlink>
                    &#41;
                </Paragraph>
            </StorySection>
        );
    };

    renderWCAGText = () => {
        return (
            <abbr
                title="Web Content Accessibility Guidelines
"
            >
                WCAG
            </abbr>
        );
    };

    renderWCAGOrganizingPageUsingHeadings = () => {
        return (
            <Fragment>
                &#40;
                <Hyperlink
                    href="https://www.w3.org/TR/WCAG20-TECHS/G141"
                    shouldOpenInNewWindow
                >
                    {this.renderWCAGText()} Spec&#58; Organizing a Page Using
                    Headings
                </Hyperlink>
                &#41;
            </Fragment>
        );
    };

    renderHeadingText = () => {
        return 'A Dynamic Type Scale';
    };

    renderDummyText = () => {
        return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet lectus non nisi aliquam, a condimentum mi convallis. Nullam ac molestie neque. Ut tincidunt, felis eget iaculis ornare, dui velit eleifend velit, a maximus nunc tellus vel quam. Quisque vitae venenatis ligula, a dictum sapien.';
    };

    renderUpscaleDesc = (size, pow) => {
        const { baseSize } = this.props;
        const scale = this.getScaleVal();

        return (
            <Fragment>
                {baseSize} &times; {scale}
                {pow && <sup>{pow}</sup>} = <em>{size}px</em>
            </Fragment>
        );
    };

    renderDownscaleDesc = (size, pow) => {
        const { baseSize } = this.props;
        const scale = this.getScaleVal();

        return (
            <Fragment>
                {baseSize} &#47; {scale}
                {pow && <sup>{pow}</sup>} = <em>{size}px</em>
            </Fragment>
        );
    };

    getFontSizeAsREM = (fontSize) => `${fontSize / 10}rem`;

    getScaleVal = () => {
        const { scale } = this.props;
        const ratioConst = scale.replace(/( \(1.[0-9]*\))/, '');

        return TYPE_RATIO_VALUES[ratioConst.replace(' ', '_').toUpperCase()];
    };

    getTokensTableData = () => {
        const { baseSize } = this.props;
        const scale = this.getScaleVal();
        const { footnote, h1, h2, h3, h4, h5, subText } = getCoreFontSizes({
            baseSize,
            scale,
        });

        return [
            {
                id: 'dt-base-size',
                name: 'Base Font Size',
                tokenName: CORE_TYPOGRAPHY_FONT_SIZE,
                value: `${baseSize}px`,
            },
            {
                id: 'dt-scale',
                name: 'Font Size Scale',
                tokenName: CORE_TYPOGRAPHY_FONT_SIZE_SCALE,
                value: scale,
            },
            {
                description: this.renderUpscaleDesc(h1, 6),
                id: 'dt-h1',
                name: 'Headings (Level 1)',
                tokenName: CORE_TYPOGRAPHY_HEADINGS_LEVEL1_FONT_SIZE,
                value: `${h1}px`,
            },
            {
                description: this.renderUpscaleDesc(h2, 5),
                id: 'dt-h2',
                name: 'Headings (Level 2)',
                tokenName: CORE_TYPOGRAPHY_HEADINGS_LEVEL2_FONT_SIZE,
                value: `${h2}px`,
            },
            {
                description: this.renderUpscaleDesc(h3, 4),
                id: 'dt-h3',
                name: 'Headings (Level 3)',
                tokenName: CORE_TYPOGRAPHY_HEADINGS_LEVEL3_FONT_SIZE,
                value: `${h3}px`,
            },
            {
                description: this.renderUpscaleDesc(h4, 3),
                id: 'dt-h4',
                name: 'Headings (Level 4)',
                tokenName: CORE_TYPOGRAPHY_HEADINGS_LEVEL4_FONT_SIZE,
                value: `${h4}px`,
            },
            {
                description: this.renderUpscaleDesc(h5, 2),
                id: 'dt-h5',
                name: 'Headings (Level 5)',
                tokenName: CORE_TYPOGRAPHY_HEADINGS_LEVEL5_FONT_SIZE,
                value: `${h5}px`,
            },
            {
                description: this.renderDownscaleDesc(subText),
                id: 'dt-sub-text',
                name: 'Sub-Text',
                tokenName: CORE_TYPOGRAPHY_SUB_TEXT_FONT_SIZE,
                value: `${subText}px`,
            },
            {
                description: this.renderDownscaleDesc(footnote, 2),
                id: 'dt-footnote',
                name: 'Footnote',
                tokenName: CORE_TYPOGRAPHY_FOOTNOTE_FONT_SIZE,
                value: `${footnote}px`,
            },
        ];
    };

    baseCls = 'bankai-sb-typography-system-guide';
}

export default TypographySystemGuide;
