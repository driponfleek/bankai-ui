import { ButtonPrimary } from '@driponfleek/bankai-ui-buttons';
import { Modal } from '@driponfleek/bankai-ui-modals';
import { Paragraph } from '@driponfleek/bankai-ui-typography';
import {
    StorySection,
    ComponentPreview,
} from '@driponfleek/bankai-lib-storybook';

/**
 * @param {Object} props
 * @param {Function} [props.onModalBtnClick] - Called when the "Click to Open the Modal" button is clicked
 */
const SectionPlayground = (props) => {
    const { onModalBtnClick, ...rest } = props;

    return (
        <StorySection>
            <ComponentPreview shouldCheckA11Y>
                <ButtonPrimary
                    text="Click to Open the Modal"
                    onClick={onModalBtnClick}
                />
                <Modal
                    {...rest}
                    appElement={document.getElementById('storybook-root')}
                >
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
                </Modal>
            </ComponentPreview>
        </StorySection>
    );
};

export default SectionPlayground;
