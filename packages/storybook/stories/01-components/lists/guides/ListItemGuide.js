import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ListItem } from '@epr0t0type/bankai-ui-lists';
import packageJSON from '@epr0t0type/bankai-ui-lists/package.json';
import StoryLayout from '../../../../sb-components/layout/StoryLayout';
import StorySection from '../../../../sb-components/layout/StorySection';
// import SectionTitle from '../../../../sb-components/content/SectionTitle';
import ComponentPreview from '../../../../sb-components/content/ComponentPreview';
// import ComponentPreviewWithCodeBlock from '../../../../sb-components/content/ComponentPreviewWithCodeBlock';
import Paragraph from '../../../../sb-components/content/Paragraph';
import strings from '../../../../i18n/strings.json';

// Utils
import { getComponentsTitle } from '../../../../utils/storiesConfig';

// Code Strings
// import { examplesCodeStr } from './codeStr/codeStrComponent';

// Styles
// import './styles/component-guide.scss';

const { bankaiUI: locale } = strings;

class ListItemGuide extends PureComponent {
    static defaultProps = {
        shouldAlternateColors: false,
        data: [],
    };

    static propTypes = {
        contextCls: PropTypes.string,
        emptyStateMsg: PropTypes.string,
        emptyStateTitle: PropTypes.string,
        data: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                meta: PropTypes.string,
                title: PropTypes.string,
            }),
        ),
        shouldAlternateColors: PropTypes.bool,
        renderEmptyState: PropTypes.func,
        renderListItem: PropTypes.func,
    };

    static displayName = locale.stories.components.lists.listItem.title;

    render() {
        return (
            <StoryLayout
                contextCls={this.baseCls}
                packageVer={packageJSON.version}
                title={locale.stories.components.lists.listItem.title}
                subTitle={getComponentsTitle(
                    locale.stories.components.lists.categoryTitle,
                )}
            >
                {this.renderDemo()}
                {/* {this.renderExamples()} */}
            </StoryLayout>
        );
    }

    renderDemo() {
        const { props } = this;

        return (
            <StorySection>
                <ComponentPreview shouldCheckA11Y>
                    <ListItem {...props} />
                </ComponentPreview>
                <Paragraph>Coming Soon.</Paragraph>
            </StorySection>
        );
    }

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

    baseCls = 'bankai-sb-list-guide';
}

export default ListItemGuide;
