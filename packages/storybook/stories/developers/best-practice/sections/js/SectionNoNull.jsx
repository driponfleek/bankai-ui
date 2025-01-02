import { Paragraph } from '@driponfleek/bankai-ui-typography';
import {
    CodeTag,
    SectionTitle,
    StorySection,
} from '@driponfleek/bankai-lib-storybook';

const SectionNoNull = () => {
    const emptyObj = '{}';
    const emptyArr = '[]';

    return (
        <StorySection>
            <SectionTitle>Avoid the Use of &quot;null&quot;</SectionTitle>
            <StorySection>
                <Paragraph>
                    In modern JavaScript development, it&apos;s generally
                    recommended to steer clear of using <CodeTag>null</CodeTag>{' '}
                    whenever possible. While <CodeTag>null</CodeTag> is a valid
                    value, its usage can introduce potential pitfalls and
                    unintended consequences. Instead, consider using{' '}
                    <CodeTag>undefined</CodeTag> to explicitly indicate a
                    missing or undefined value in your code.
                </Paragraph>
            </StorySection>
            <StorySection>
                <SectionTitle headingLvl={3}>
                    Alternative Representations
                </SectionTitle>
                <Paragraph>
                    Instead of <CodeTag>null</CodeTag>, consider using empty
                    objects &#40;
                    {emptyObj}
                    &#41; or empty arrays &#40;{emptyArr}&#41; to represent
                    missing or empty values. This aligns with the preference for
                    object-oriented representations and reduces the ambiguity
                    associated with <CodeTag>null</CodeTag>.
                </Paragraph>
            </StorySection>
        </StorySection>
    );
};

export default SectionNoNull;
