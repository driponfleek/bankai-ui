import {
    OmniList,
    OmniListItem,
    Paragraph,
} from '@driponfleek/bankai-ui-typography';
import { Hyperlink } from '@driponfleek/bankai-ui-navigation';
import {
    CodeTag,
    StorySection,
    SectionTitle,
} from '@driponfleek/bankai-lib-storybook';
import CodeBlock from '../../../../../sb-components/docblocks/CodeBlock';
import {
    codeStrBEMExample,
    codeStrBEMWithNameSapce,
} from '../../code-strings/codeStrCSSBestPractices';

const SectionClassNamingConventions = () => {
    return (
        <StorySection>
            <SectionTitle>CSS Naming Conventions</SectionTitle>
            <StorySection>
                <Paragraph>
                    <Hyperlink
                        href="http://getbem.com/naming/"
                        shouldOpenInNewWindow
                    >
                        BEM
                    </Hyperlink>{' '}
                    &#40;Block, Element, Modifier&#41; is a clear and
                    maintainable naming convention for CSS classes and IDs,
                    providing a structured approach to naming elements in your
                    stylesheets. The three core entities in BEM are&#58;
                </Paragraph>
                <OmniList isOrderedList>
                    <OmniListItem>
                        <strong>Block&#58;</strong> Represents a standalone
                        component that is meaningful on its own, such as a
                        button or a navigation bar.
                    </OmniListItem>
                    <OmniListItem>
                        <strong>Element&#58;</strong> A part of a block that has
                        no standalone meaning and is semantically tied to its
                        block, like a button&apos;s label or an item in a
                        navigation menu.
                    </OmniListItem>
                    <OmniListItem>
                        <strong>Modifier&#58;</strong> Flags on blocks or
                        elements to define variations or states, allowing you to
                        modify their appearance or behavior. For example, a
                        button could have a modifier for a different color when
                        in a disabled state.
                    </OmniListItem>
                </OmniList>
                <Paragraph>
                    BEM&apos;s syntax is structured as{' '}
                    <CodeTag>block__element--modifier</CodeTag>, offering
                    clarity and consistency in your CSS code. This convention
                    enhances collaboration among developers and simplifies the
                    maintenance of stylesheets as your project grows&#58;
                </Paragraph>
                <CodeBlock
                    codeString={codeStrBEMExample}
                    shouldShowCopy={false}
                />
                <OmniList>
                    <OmniListItem>
                        <strong>Block&#58;</strong> <CodeTag>button</CodeTag>
                    </OmniListItem>
                    <OmniListItem>
                        <strong>Element&#58;</strong>{' '}
                        <CodeTag>button__icon</CodeTag>
                    </OmniListItem>
                    <OmniListItem>
                        <strong>Modifier&#58;</strong>{' '}
                        <CodeTag>button--primary</CodeTag>
                    </OmniListItem>
                </OmniList>
            </StorySection>
            <StorySection>
                <SectionTitle headingLvl={3}>Name Spacing</SectionTitle>
                <StorySection>
                    <Paragraph>
                        To foster organization and mitigate naming conflicts, we
                        recommend namespacing all classes and IDs using the
                        pattern: <CodeTag>[sdk name]-[block]</CodeTag> &mdash;
                        for example, <CodeTag>bankai-accordion</CodeTag>. This
                        not only ensures uniqueness and clarity but also
                        significantly boosts style scoping. The prefixed names
                        create a well-defined, isolated scope for styles,
                        diminishing the likelihood of unintended conflicts. This
                        practice proves particularly valuable in larger
                        projects, where maintaining a clear, conflict-free
                        styling approach is crucial for robust and scalable
                        applications.
                    </Paragraph>
                    <CodeBlock
                        codeString={codeStrBEMWithNameSapce}
                        shouldShowCopy={false}
                    />
                    <OmniList>
                        <OmniListItem>
                            <strong>Name Space&#58;</strong>{' '}
                            <CodeTag>bankai</CodeTag>
                        </OmniListItem>
                        <OmniListItem>
                            <strong>Block&#58;</strong>{' '}
                            <CodeTag>button</CodeTag>
                        </OmniListItem>
                        <OmniListItem>
                            <strong>Element&#58;</strong>{' '}
                            <CodeTag>button__icon</CodeTag>
                        </OmniListItem>
                        <OmniListItem>
                            <strong>Modifier&#58;</strong>{' '}
                            <CodeTag>button--primary</CodeTag>
                        </OmniListItem>
                    </OmniList>
                </StorySection>
            </StorySection>
        </StorySection>
    );
};

export default SectionClassNamingConventions;
