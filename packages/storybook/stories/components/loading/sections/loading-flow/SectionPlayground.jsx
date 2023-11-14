import { LoadingFlow } from '@driponfleek/bankai-ui-loading';
import { Paragraph } from '@driponfleek/bankai-ui-typography';
import {
    StorySection,
    ComponentPreview,
} from '@driponfleek/bankai-lib-storybook';

const SectionPlayground = (props) => {
    return (
        <StorySection>
            <ComponentPreview shouldCheckA11Y>
                <LoadingFlow {...props}>
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla auctor justo sit amet varius malesuada. Duis
                        tempor a nibh nec convallis. Praesent iaculis vulputate
                        risus, a condimentum massa sollicitudin sit amet. Fusce
                        pretium, diam in eleifend tincidunt, eros lorem euismod
                        turpis, vitae vehicula ante quam nec nibh. Mauris ut
                        purus eu ligula aliquet congue vitae id lorem. Curabitur
                        in enim iaculis, malesuada ligula interdum, tempor
                        lorem. Sed pulvinar augue velit, at mattis magna lacinia
                        in. Phasellus accumsan maximus urna vehicula vulputate.
                        Nam tincidunt tristique tortor, id pulvinar nisi
                        hendrerit id.
                    </Paragraph>
                </LoadingFlow>
            </ComponentPreview>
        </StorySection>
    );
};

export default SectionPlayground;
