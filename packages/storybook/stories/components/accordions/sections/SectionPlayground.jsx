import { Accordion } from '@driponfleek/bankai-ui-accordions';
import {
    StorySection,
    ComponentPreview,
} from '@driponfleek/bankai-lib-storybook';
import MockAccordionContent from '../components/MockAccordionContent';

const SectionPlayground = (props) => {
    const text =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum turpis at metus tristique, sed euismod diam rhoncus. Phasellus rutrum diam ac nibh egestas dapibus. Maecenas velit neque, finibus quis mattis volutpat, ultrices eget tellus. Etiam tempor dui ut lacus cursus tincidunt. Cras erat mauris, suscipit et metus interdum, varius semper mauris. Quisque orci lectus, iaculis id tellus ac, viverra vestibulum lorem. Pellentesque placerat nisi in enim efficitur, nec tempor velit porta.';

    return (
        <StorySection>
            <ComponentPreview shouldCheckA11Y>
                <Accordion {...props}>
                    <MockAccordionContent
                        accItemProps={{
                            id: '001',
                        }}
                        accTriggerProps={{
                            children: 'Accordion Item 1',
                        }}
                    >
                        {text}
                    </MockAccordionContent>
                    <MockAccordionContent
                        accItemProps={{
                            id: '002',
                        }}
                        accTriggerProps={{
                            children: 'Accordion Item 2',
                        }}
                    >
                        {text}
                    </MockAccordionContent>
                    <MockAccordionContent
                        accItemProps={{
                            id: '003',
                        }}
                        accTriggerProps={{
                            children: 'Accordion Item 3',
                        }}
                    >
                        {text}
                    </MockAccordionContent>
                </Accordion>
            </ComponentPreview>
        </StorySection>
    );
};

export default SectionPlayground;
