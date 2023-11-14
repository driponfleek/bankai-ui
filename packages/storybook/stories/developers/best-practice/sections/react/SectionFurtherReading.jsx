import { Hyperlink } from '@driponfleek/bankai-ui-navigation';
import { OmniList, OmniListItem } from '@driponfleek/bankai-ui-typography';
import { SectionTitle, StorySection } from '@driponfleek/bankai-lib-storybook';

const SectionFurtherReading = () => {
    return (
        <StorySection>
            <SectionTitle>Further Reading</SectionTitle>
            <OmniList>
                <OmniListItem>
                    <Hyperlink
                        href="https://react.dev/blog/2023/03/16/introducing-react-dev"
                        shouldOpenInNewWindow
                    >
                        React
                    </Hyperlink>
                </OmniListItem>
                <OmniListItem>
                    <Hyperlink
                        href="https://react.dev/reference/react/hooks"
                        shouldOpenInNewWindow
                    >
                        React Hooks
                    </Hyperlink>
                </OmniListItem>
                <OmniListItem>
                    <Hyperlink
                        href="https://www.linkedin.com/pulse/master-solid-principles-react-functional-components-ankush-tagore"
                        shouldOpenInNewWindow
                    >
                        Master SOLID Principles in React Functional Components
                    </Hyperlink>
                </OmniListItem>
                <OmniListItem>
                    <Hyperlink
                        href="https://blog.logrocket.com/useeffect-react-hook-complete-guide/"
                        shouldOpenInNewWindow
                    >
                        A Complete Guide to the useEffect React Hook
                    </Hyperlink>
                </OmniListItem>
                <OmniListItem>
                    <Hyperlink
                        href="https://overreacted.io/a-complete-guide-to-useeffect/"
                        shouldOpenInNewWindow
                    >
                        A Complete Guide to useEffect
                    </Hyperlink>
                </OmniListItem>
                <OmniListItem>
                    <Hyperlink
                        href="https://medium.com/@navneetsingh_95791/react-usestate-vs-usereducer-choosing-the-right-state-management-hook-de3568a778b3"
                        shouldOpenInNewWindow
                    >
                        React useState vs. useReducer: Choosing the Right State
                        Management Hook
                    </Hyperlink>
                </OmniListItem>
            </OmniList>
        </StorySection>
    );
};

export default SectionFurtherReading;
