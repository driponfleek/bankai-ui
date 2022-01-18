import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Heading, Hyperlink } from '@epr0t0type/bankai-ui-typography';
import ComponentPreview from '../../../../sb-components/content/ComponentPreview';
import StoryLayout from '../../../../sb-components/layout/StoryLayout';
import StorySection from '../../../../sb-components/layout/StorySection';
import Paragraph from '../../../../sb-components/content/Paragraph';
// import SectionTitle from '../../../../sb-components/content/SectionTitle';
import TypographyList from '../../../../sb-components/lists/TypographyList';
// import TypographyListItem from '../../../../sb-components/lists/TypographyListItem';
import strings from '../../../../i18n/strings.json';

// Utils
import { getStyleGuideTitle } from '../../../../utils/storiesConfig';
import { getSanatizedStoryProps } from '../../../../utils/storyLayoutPropsUtils';

// Constants
import TYPE_RATIOS from './const/typeRatiosConst';

// Styles
import './styles/typography-system-guide.scss';

const { bankaiUI: locale } = strings;

class TypographySystemGuide extends Component {
    static defaultProps = {
        baseTypeSize: 16,
        typeScaleRatio: 'minor third (1.2)',
    };

    static propTypes = {
        baseTypeSize: PropTypes.number,
        typeScaleRatio: PropTypes.string,
    };

    render() {
        return (
            <StoryLayout
                {...getSanatizedStoryProps(this.props, false)}
                contextCls={this.baseCls}
                title={
                    locale.stories.styleGuide.typography.typographySystem.title
                }
                subTitle={getStyleGuideTitle(
                    locale.stories.styleGuide.typography.categoryTitle,
                )}
            >
                {this.renderFontStack()}
                {this.renderDemo()}
            </StoryLayout>
        );
    }

    componentDidUpdate() {
        this.handleUpdate();
    }

    componentDidMount() {
        this.handleUpdate();
    }

    renderFontStack() {
        const fonts = [
            {
                categoryText: 'Headings',
                fontFamilyName: 'Exo',
            },
            {
                categoryText: 'Body',
                fontFamilyName: 'Titillium Web',
            },
        ];

        return (
            <TypographyList
                contextCls={`${this.baseCls}__typography-stack`}
                data={fonts}
            />
        );
    }

    renderDemo = () => {
        const baseSize = 16;
        const h5 = Math.round(baseSize * 1.2);
        const h4 = Math.round(h5 * 1.2);
        const h3 = Math.round(h4 * 1.2);
        const h2 = Math.round(h3 * 1.2);
        const h1 = Math.round(h2 * 1.2);
        const subText = Math.round(baseSize / 1.2);
        const footnote = Math.round(subText / 1.2);

        return (
            <StorySection>
                {/* <SectionTitle>Bankai Typography Scaling System</SectionTitle> */}
                <ComponentPreview id={`${this.baseCls}-examples`}>
                    <Heading headingLvl={1}>H1: A Dynamic Type Scale</Heading>
                    <Heading>H2: A Dynamic Type Scale</Heading>
                    <Heading headingLvl={3}>H3: A Dynamic Type Scale</Heading>
                    <Heading headingLvl={4}>H4: A Dynamic Type Scale</Heading>
                    <Heading headingLvl={5}>H5: A Dynamic Type Scale</Heading>
                    <Paragraph contextCls={`${this.baseCls}__sub-text`}>
                        Sub-Text Example
                    </Paragraph>
                    <Paragraph contextCls={`${this.baseCls}__paragraph`}>
                        <strong>Body Text: </strong> Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Maecenas imperdiet lectus
                        non nisi aliquam, a condimentum mi convallis. Nullam ac
                        molestie neque. Ut tincidunt, felis eget iaculis ornare,
                        dui velit eleifend velit, a maximus nunc tellus vel
                        quam. Quisque vitae venenatis ligula, a dictum sapien.
                    </Paragraph>
                    <Paragraph contextCls={`${this.baseCls}__footnote`}>
                        Footnote example. Commonly used for things like
                        fine-print, disclaimers etc.
                    </Paragraph>
                </ComponentPreview>
                <Paragraph>
                    Bankai UI uses a modular typography scale system to create
                    harmonious type sizes that are pleasant for end users and
                    scalable for applications.
                </Paragraph>
                <Paragraph>
                    We start with a base font size of 16px which aligns to the
                    web browser&apos;s default setting. Then, we scale up or
                    down by the selected ratio. Bankai UI&apos;s default ratio
                    is <strong>Minor Third (1.2)</strong>.
                </Paragraph>
                <Paragraph>
                    For Headings, we start at the lowest size and work our way
                    up the the largest:
                </Paragraph>
                <ul>
                    <li>
                        <strong>H5</strong>: 16px &times; 1.2 = <em>{h5}px</em>
                    </li>
                    <li>
                        <strong>H4</strong>: H5 Font Size &times; 1.2 ={' '}
                        <em>{h4}px</em>
                    </li>
                    <li>
                        <strong>H3</strong>: H4 Font Size &times; 1.2 ={' '}
                        <em>{h3}px</em>
                    </li>
                    <li>
                        <strong>H2</strong>: H3 Font Size &times; 1.2 ={' '}
                        <em>{h2}px</em>
                    </li>
                    <li>
                        <strong>H1</strong>: H2 Font Size &times; 1.2 ={' '}
                        <em>{h1}px</em>
                    </li>
                    <li>
                        <strong>Sub-Text</strong>: 16px &#47; 1.2 ={' '}
                        <em>{subText}px</em>
                    </li>
                    <li>
                        <strong>Footnote</strong>: Sub-Text &#47; 1.2 ={' '}
                        <em>{footnote}px</em>
                    </li>
                </ul>
                <Paragraph>
                    <em>
                        (Values above have been rounded to the nearest whole
                        number.)
                    </em>
                </Paragraph>
                <Paragraph>
                    <strong>Reference:</strong>
                </Paragraph>
                <ul>
                    <li>
                        <Hyperlink
                            href="https://medium.com/sketch-app-sources/exploring-responsive-type-scales-cf1da541be54"
                            shouldOpenInNewWindow
                        >
                            Exploring Responsive Type Scales
                        </Hyperlink>
                    </li>
                    <li>
                        <Hyperlink
                            href="https://pairfonts.eu/articles/typographic-scale.php"
                            shouldOpenInNewWindow
                        >
                            The Typographic Scale – Harmony in Fonts
                        </Hyperlink>
                    </li>
                    <li>
                        <Hyperlink
                            href="https://type-scale.com/"
                            shouldOpenInNewWindow
                        >
                            Type Scale - A Visual Calculator
                        </Hyperlink>
                    </li>
                </ul>
            </StorySection>
        );
    };

    handleUpdate = () => {
        const { baseTypeSize, typeScaleRatio } = this.props;
        const containerId = `${this.baseCls}-examples`;
        const containerDOM = document.getElementById(containerId);
        // const containerDOM = document.getElementsByClassName(
        //     'bankai-sb-component-preview',
        // )[0];
        const baseFontSize = `${baseTypeSize / 10}rem`;
        const ratioConst = typeScaleRatio.replace(/( \(1.[0-9]*\))/, '');
        const ratioValue =
            TYPE_RATIOS[ratioConst.replace(' ', '_').toUpperCase()];

        // --bankai-type-base-size
        containerDOM.style.setProperty(
            '--bankai-typography-size-ratio',
            ratioValue,
        );
        containerDOM.style.setProperty(
            '--bankai-typography-size-base',
            baseFontSize,
        );
    };

    baseCls = 'bankai-sb-typography-system-guide';
}

export default TypographySystemGuide;
