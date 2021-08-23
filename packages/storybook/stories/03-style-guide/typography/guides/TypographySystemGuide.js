import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Heading } from '@epr0t0type/bankai-ui-typography';
import ComponentPreview from '../../../../sb-components/content/ComponentPreview';
import StoryLayout from '../../../../sb-components/layout/StoryLayout';
import StorySection from '../../../../sb-components/layout/StorySection';
import Paragraph from '../../../../sb-components/content/Paragraph';
import SectionTitle from '../../../../sb-components/content/SectionTitle';
import TypographyList from '../../../../sb-components/lists/TypographyList';
import TypographyListItem from '../../../../sb-components/lists/TypographyListItem';
import strings from '../../../../i18n/strings.json';
import { getStyleGuideTitle } from '../../../../utils/storiesConfig';

// Styles
import './styles/typography-system-guide.scss';

const { bankaiUI: locale } = strings;

class TypographySystemGuide extends PureComponent {
    static defaultProps = {};

    static propTypes = {};

    render() {
        return (
            <StoryLayout
                contextCls={this.baseCls}
                title={locale.stories.styleGuide.typography.typographySystem.title}
                subTitle={getStyleGuideTitle(
                    locale.stories.styleGuide.typography.categoryTitle,
                )}
            >
                {this.renderFontStack()}
                {this.renderDemo()}
            </StoryLayout>
        );
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
        const h5 = (16 * 1.2);
        const h4 = (h5 * 1.2);
        const h3 = (h4 * 1.2);
        const h2 = (h3 * 1.2).toFixed(4);
        const h1 = (h2 * 1.2).toFixed(4);
        const subText = (16 / 1.2).toFixed(4);
        const footnote = (subText / 1.2).toFixed(4);

        return (
            <StorySection>
                {/* <SectionTitle>Bankai Typography Scaling System</SectionTitle> */}
                <ComponentPreview>
                    <Heading headingLvl={1}>H1: A Dynamic Type Scale</Heading>
                    <Heading>H2: A Dynamic Type Scale</Heading>
                    <Heading headingLvl={3}>H3: A Dynamic Type Scale</Heading>
                    <Heading headingLvl={4}>H4: A Dynamic Type Scale</Heading>
                    <Heading headingLvl={5}>H5: A Dynamic Type Scale</Heading>
                    <Paragraph contextCls={`${this.baseCls}__sub-text`}>Sub-Text Example</Paragraph>
                    <Paragraph><strong>Body Text: </strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet lectus non nisi aliquam, a condimentum mi convallis. Nullam ac molestie neque. Ut tincidunt, felis eget iaculis ornare, dui velit eleifend velit, a maximus nunc tellus vel quam. Quisque vitae venenatis ligula, a dictum sapien.</Paragraph>
                    <Paragraph contextCls={`${this.baseCls}__footnote`}>Footnote example. Commonly used for things like fine-print, disclaimers etc.</Paragraph>
                </ComponentPreview>
                <Paragraph>Bankai UI uses a modular typography scale system to create a harmonious type sizes that are pleasant for end users and scalable for applications.</Paragraph>
                <Paragraph>We start with a base font size of 16px which aligns to the web browser&apos;s default setting. Then, we scale up or down by the selected ratio. Bankai UI&apos;s default ratio is <strong>Minor Third (1.2)</strong>.</Paragraph>
                <Paragraph>For Headings, we start at the lowest size and work our way up the the largest:</Paragraph>
                <ul>
                    <li><strong>H5</strong>: 16px &times; 1.2 = <em>{h5}px</em></li>
                    <li><strong>H4</strong>: H5 Font Size &times; 1.2 = <em>{h4}px</em></li>
                    <li><strong>H3</strong>: H4 Font Size &times; 1.2 = <em>{h3}px</em></li>
                    <li><strong>H2</strong>: H3 Font Size &times; 1.2 = <em>{h2}px</em></li>
                    <li><strong>H1</strong>: H2 Font Size &times; 1.2 = <em>{h1}px</em></li>
                    <li><strong>Sub-Text</strong>: 16px &#47; 1.2 = <em>{subText}px</em></li>
                    <li><strong>Footnote</strong>: Sub-Text &#47; 1.2 = <em>{footnote}px</em></li>
                </ul>
                <Paragraph>For design purposes feel free to round the value to the nearest pixel.</Paragraph>
                <Paragraph><strong>Reference:</strong></Paragraph>
                <ul>
                    <li><a href="https://medium.com/sketch-app-sources/exploring-responsive-type-scales-cf1da541be54" target="_blank" rel="noopener noreferrer">Exploring Responsive Type Scales</a></li>
                    <li><a href="https://pairfonts.eu/articles/typographic-scale.php" target="_blank" rel="noopener noreferrer">The Typographic Scale – Harmony in Fonts</a></li>
                    <li><a href="https://type-scale.com/" target="_blank" rel="noopener noreferrer">Type Scale - A Visual Calculator</a></li>
                </ul>
            </StorySection>
        );
    }

    baseCls = 'bankai-sb-typography-system-guide';
};

export default TypographySystemGuide;
