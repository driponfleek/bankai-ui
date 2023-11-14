import { Paragraph } from '@driponfleek/bankai-ui-typography';
import {
    StorySection,
    ComponentPreview,
} from '@driponfleek/bankai-lib-storybook';

const SectionPlayground = (props) => {
    return (
        <StorySection>
            <ComponentPreview shouldCheckA11Y>
                <Paragraph {...props}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin id tincidunt justo. Mauris pellentesque, ante id
                    elementum porta, diam erat consectetur lorem, mollis
                    placerat urna magna sed dui. Aliquam sit amet tincidunt
                    enim. Sed a mauris euismod, pulvinar risus ut, posuere
                    sapien. Sed sollicitudin arcu ut libero aliquet ullamcorper.
                    Etiam turpis ante, aliquam quis urna in, rhoncus elementum
                    tellus. Fusce blandit eu sapien tempus pellentesque. Mauris
                    congue lorem nec sapien laoreet, eget vestibulum risus
                    consectetur. Pellentesque urna quam, scelerisque ac leo
                    rhoncus, faucibus malesuada diam. Vestibulum ornare neque id
                    nibh cursus dapibus. Nulla congue velit ut nisi pretium
                    maximus.
                </Paragraph>
            </ComponentPreview>
        </StorySection>
    );
};

export default SectionPlayground;
