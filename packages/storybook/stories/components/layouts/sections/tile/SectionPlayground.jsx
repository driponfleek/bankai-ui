import { Paragraph } from '@driponfleek/bankai-ui-typography';
import { Tile } from '@driponfleek/bankai-ui-layouts';
import {
    StorySection,
    ComponentPreview,
} from '@driponfleek/bankai-lib-storybook';

const SectionPlayground = (props) => {
    return (
        <StorySection>
            <ComponentPreview shouldCheckA11Y>
                <Tile {...props}>
                    <Paragraph>
                        Nullam lobortis justo ac purus facilisis efficitur.
                        Fusce posuere elementum nisl, sit amet semper risus
                        ornare ut. Vestibulum ante ipsum primis in faucibus orci
                        luctus et ultrices posuere cubilia curae; Nullam sit
                        amet porta quam. Proin convallis, nulla a porttitor
                        volutpat, felis mi faucibus lorem, quis ornare sem quam
                        sit amet risus. Integer finibus ut nisl pellentesque
                        vestibulum. Morbi velit magna, dapibus nec dolor vitae,
                        sollicitudin volutpat enim. Vestibulum commodo
                        sollicitudin viverra.
                    </Paragraph>
                </Tile>
            </ComponentPreview>
        </StorySection>
    );
};

export default SectionPlayground;
