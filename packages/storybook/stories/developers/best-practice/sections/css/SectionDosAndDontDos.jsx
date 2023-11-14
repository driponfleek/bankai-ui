import { Paragraph } from '@driponfleek/bankai-ui-typography';
import {
    StorySection,
    SectionTitle,
    DoAndDoNotDo,
    CodeTag,
} from '@driponfleek/bankai-lib-storybook';
import { Hyperlink } from '@driponfleek/bankai-ui-navigation';
import { getLocale } from '../../../../../utils/localeUtils';

const SectionDosAndDontDos = () => {
    const doList = [
        <>
            <strong>Do Use Descriptive Class Names&#58;</strong> Choose class
            names that clearly convey the purpose of the styles they represent.
            This fosters readability and makes maintenance more straightforward.
        </>,
        <>
            <strong>Do Leverage BEM Naming Convention&#58;</strong> Follow the
            BEM (Block, Element, Modifier) naming convention for clarity and
            maintainability in your CSS code. It enhances collaboration and
            simplifies scaling your project.
        </>,
        <>
            <strong>Do Name Space Classes and IDs&#58;</strong> Prefix all
            classes and IDs with the pattern{' '}
            <CodeTag>[sdk name]-[block]</CodeTag> to ensure uniqueness and
            reduce the risk of naming conflicts. This practice also improves
            style scoping.
        </>,
        <>
            <strong>Do Utilize Context Classes Wisely&#58;</strong> Ensure all
            components have a contextCls prop. Employ context classes to adapt
            component styles based on their surroundings in the UI. This
            enhances adaptability and fosters a cohesive user experience.
        </>,
        <>
            <strong>
                Do Use Modifier Classes for Variants and States&#58;
            </strong>{' '}
            Apply modifier classes to specify styles for different component
            variants or states. Follow the BEM syntax &#40;
            <CodeTag>block__element--modifier</CodeTag>&#41; to maintain clarity
            and consistency.
        </>,
        <>
            <strong>Do Choose rem for Scalability&#58;</strong> Opt for rem
            units when defining spacing and sizing that should scale with font
            size, promoting accessibility and responsive design.
        </>,
        <>
            <strong>Do Use Kebab-Case for Classes and IDs&#58;</strong>{' '}
            Consistently use{' '}
            <Hyperlink
                href="https://en.wikipedia.org/wiki/Letter_case#Kebab_case"
                shouldOpenInNewWindow
            >
                kebab-case
            </Hyperlink>{' '}
            for class names and IDs to ensure a standardized and readable
            approach in your stylesheets.
        </>,
        <>
            <strong>Do Ensure Every Element Has a Class&#58;</strong> Assign a
            class name to every element to provide developers with a reliable
            way to target it without modifying the original component.
        </>,
        <>
            <strong>Do Use CSS Variables with Fallbacks&#58;</strong> Implement
            CSS Variables with fallback values to ensure graceful degradation in
            case a variable is not supported.
        </>,
        <>
            <strong>Do Use SASS Mixins and Variables&#58;</strong> Leverage SASS
            mixins and variables to ensure consistency and prevent redundant
            code.
        </>,
    ];
    const doNotDoList = [
        <>
            <strong>Do Not Use Unclear or Generic Class Names&#58;</strong>{' '}
            Avoid ambiguous class names that make it challenging to understand
            the purpose of the styles. Be explicit and descriptive.
        </>,
        <>
            <strong>Do Not Deviate from the BEM Convention&#58;</strong> Stick
            to the BEM naming convention consistently. Deviating from it can
            lead to confusion, especially in collaborative projects.
        </>,
        <>
            <strong>Do Not Skip Name Spacing&#58;</strong> Neglecting to
            namespace classes and IDs increases the risk of naming conflicts,
            impacting the maintainability of your stylesheets.
        </>,
        <>
            <strong>Do Not Overuse Context Classes&#58;</strong> While context
            classes are powerful, overusing them can lead to a complex and
            convoluted styling system. Apply them judiciously.
        </>,
        <>
            <strong>Do Not Neglect Modifier Classes&#58;</strong> Ensure that
            modifier classes follow the BEM syntax and are applied consistently.
            Neglecting them can result in inconsistent styling for different
            component states or variants.
        </>,
        <>
            <strong>
                Do Not Use Camel-Case, Snake-Case, or Pascal-Case&#58;
            </strong>{' '}
            Stick to kebab-case for classes and IDs &#40;with the exception of
            elements in BEM naming convention that use double-underscore&#41; to
            maintain a uniform and predictable coding style.
        </>,
        <>
            <strong>Do Not Style IDs Directly&#58;</strong> Due to their high
            specificity, avoid styling IDs directly. Instead, use classes for
            styling to ensure easier overrides in different contexts.
        </>,
        <>
            <strong>Do Not Style HTML Elements Directly&#58;</strong> Refrain
            from styling HTML elements directly to prevent global impacts and
            make contextual overrides more manageable.
        </>,
        <>
            <strong>
                Do Not Use Inline Styles Unless Absolutely Necessary&#58;
            </strong>{' '}
            Inline styles can complicate maintenance and reduce the reusability
            of styles. Reserve inline styles for exceptional cases.
        </>,
        <>
            <strong>
                Do Not Start Classes and IDs with Numbers or Include Special
                Characters&#58;
            </strong>{' '}
            Follow a naming convention that avoids starting class names or IDs
            with numbers and excludes special characters to maintain
            compatibility and avoid unexpected behavior.
        </>,
    ];

    return (
        <StorySection>
            <SectionTitle>{getLocale('titles.dosAndDoNotDos')}</SectionTitle>
            <StorySection>
                <DoAndDoNotDo
                    doTitle="Do's for Clean and Efficient CSS"
                    doNotDoTitle="Do Not Do's for CSS Pitfalls"
                    doList={doList}
                    doNotDoList={doNotDoList}
                />
                <Paragraph>
                    By adhering to these best practices, you&apos;ll establish a
                    solid foundation for your projects, ensuring clean,
                    maintainable, and high-performance CSS.
                </Paragraph>
            </StorySection>
        </StorySection>
    );
};

export default SectionDosAndDontDos;
