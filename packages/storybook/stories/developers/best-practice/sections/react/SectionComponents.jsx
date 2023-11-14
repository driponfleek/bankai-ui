import { OmniList, OmniListItem } from '@driponfleek/bankai-ui-typography';
import { SectionTitle, StorySection } from '@driponfleek/bankai-lib-storybook';

const SectionComponents = () => {
    return (
        <StorySection>
            <SectionTitle>Component Structure</SectionTitle>
            <StorySection>
                <OmniList>
                    <OmniListItem>
                        Keep it simple by having only one React component per
                        file. This ensures a clear and focused file structure.
                    </OmniListItem>
                    <OmniListItem>
                        Prefer using functional components over class-based
                        components for their concise syntax and support for
                        React Hooks.
                    </OmniListItem>
                    <OmniListItem>
                        Leverage SOLID principles in functional components&#58;
                        <OmniList>
                            <OmniListItem>
                                <strong>
                                    Single Responsibility Principle &#40;
                                    <abbr title="Single Responsibility Principle">
                                        SRP
                                    </abbr>
                                    &#41;
                                </strong>{' '}
                                - Aim for each functional component to have a
                                single responsibility. For example, a user card
                                component should only be responsible for
                                rendering user information.
                            </OmniListItem>
                            <OmniListItem>
                                <strong>
                                    Open&#47;Closed Principle &#40;
                                    <abbr title="Open/Closed Principle">
                                        OCP
                                    </abbr>
                                    &#41;
                                </strong>{' '}
                                - Design components to be open for extension but
                                closed for modification. In React, this often
                                involves creating reusable components that can
                                be extended or composed without modifying their
                                source code.
                            </OmniListItem>
                            <OmniListItem>
                                <strong>
                                    Liskov Substitution Principle &#40;
                                    <abbr title="Liskov Substitution Principle">
                                        LSP
                                    </abbr>
                                    &#41;
                                </strong>{' '}
                                - Ensure that components can be substituted with
                                instances of their subtypes without altering the
                                correctness of the program. This is crucial for
                                maintaining consistency when working with
                                component hierarchies.
                            </OmniListItem>
                            <OmniListItem>
                                <strong>
                                    Interface Segregation Principle &#40;
                                    <abbr title="Interface Segregation Principle">
                                        ISP
                                    </abbr>
                                    &#41;
                                </strong>{' '}
                                - Avoid having components forced to implement
                                interfaces they do not use. This principle
                                encourages creating smaller, specific interfaces
                                that are implemented only by components that
                                need them.
                            </OmniListItem>
                            <OmniListItem>
                                <strong>
                                    Dependency Inversion Principle &#40;
                                    <abbr title="Dependency Inversion Principle">
                                        DIP
                                    </abbr>
                                    &#41;
                                </strong>{' '}
                                - Depend on abstractions, not concretions. In
                                React, this might involve using dependency
                                injection to pass dependencies into components,
                                allowing for greater flexibility.
                            </OmniListItem>
                        </OmniList>
                    </OmniListItem>
                </OmniList>
            </StorySection>
        </StorySection>
    );
};

export default SectionComponents;
