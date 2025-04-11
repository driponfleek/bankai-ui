import {
    StorySection,
    // SectionTitle,
    genSBBaseCls,
} from '@driponfleek/bankai-lib-storybook';
import { Hyperlink } from '@driponfleek/bankai-ui-navigation';
import {
    Paragraph,
    // OmniList,
    // OmniListItem,
} from '@driponfleek/bankai-ui-typography';

// Utils
import { getLocale } from '../../../../../utils/localeUtils';

const SectionIntro = () => {
    return (
        <StorySection contextCls={genSBBaseCls('color-swatch-list')}>
            <Paragraph>
                {getLocale('designSystemName')} includes a set of palettes from{' '}
                <Hyperlink
                    href="https://colorbrewer2.org/"
                    shouldOpenInNewWindow
                >
                    ColorBrewer
                </Hyperlink>{' '}
                that are designed to be colorblind-friendly—meaning the colors
                are easier to tell apart for people with common forms of color
                vision deficiency. Each one sticks to the number of colors
                recommended by ColorBrewer for that purpose. They&apos;re great
                defaults for visualizations, and if you need more control, you
                can always build your own.
            </Paragraph>
        </StorySection>
    );
};

export default SectionIntro;
