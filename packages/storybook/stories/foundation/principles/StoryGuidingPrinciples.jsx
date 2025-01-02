import { Paragraph } from '@driponfleek/bankai-ui-typography';
import { genSBBaseCls, StorySection } from '@driponfleek/bankai-lib-storybook';
import GuidingPrinciple from './components/GuidingPrinciple';
import StoryLayout from '../../../sb-components/layout/StoryLayout';

// Utils
import { getLocale } from '../../../utils/localeUtils';

const StoryGuidingPrinciples = () => {
    const baseCls = genSBBaseCls('foundation-guiding-principles');
    const designSystemName = getLocale('designSystemName');

    return (
        <StoryLayout
            contextCls={baseCls}
            title={getLocale('titles.guidingPrinciples')}
            subTitle={getLocale('titles.foundation')}
        >
            <StorySection>
                <Paragraph>
                    Welcome to our design system&apos;s guiding principles.
                    These principles embody the essence of{' '}
                    {`${designSystemName}'s`} design philosophy, ensuring that
                    our creations are both delightful and user-centered. We
                    believe that design should be accessible, scalable,
                    adaptable, responsive, themable, robust, and shareable, all
                    while keeping a fun and light-hearted tone. Here&apos;s a
                    closer look at each principle&#58;
                </Paragraph>
            </StorySection>
            {/* <GuidingPrinciple
                title={getLocale(
                    'stories.foundation.guidingPrinciples.sectionTitles.userCenteredSimplicity',
                )}
                summaryContent="At the heart of our design system is the commitment to delivering a user experience that's both simple and enjoyable:"
                listItems={[
                    <>
                        <strong>Simplicity with a Smile&#58;</strong> We aim to
                        keep our designs straightforward and easy to grasp,
                        making them an ideal starting point for designers of all
                        levels.
                    </>,
                    <>
                        <strong>Clear and Playful Communication&#58;</strong>{' '}
                        Our documentation and{' '}
                        <abbr title={getLocale('abbreviations.ui')}>UI</abbr>{' '}
                        elements are designed to communicate in a friendly,
                        approachable manner, making it easy for others to
                        understand and build upon.
                    </>,
                ]}
            /> */}
            <GuidingPrinciple
                title={getLocale(
                    'stories.foundation.guidingPrinciples.sectionTitles.accessible',
                )}
                summaryContent={`${designSystemName} provides the tools and flexibility to implement accessible user interfaces everyone can enjoy, setting a strong foundation for inclusive design practices:`}
                listItems={[
                    <>
                        <strong>Accessibility with a Twist&#58;</strong> We
                        prioritize accessible design and provide resources to
                        help others incorporate these practices into their own
                        systems.
                    </>,
                    <>
                        <strong>Inclusive Approach&#58;</strong> We&apos;re
                        committed to inclusive design, making sure our creations
                        are accessible to individuals with various disabilities
                        and encouraging others to do the same.
                    </>,
                ]}
            />
            {/* <GuidingPrinciple
                title={getLocale(
                    'stories.foundation.guidingPrinciples.sectionTitles.scalable',
                )}
                summaryContent="Our design system is built to evolve and grow while preserving simplicity, serving as a solid starting point for expanding your own design language:"
                listItems={[
                    <>
                        <strong>Scaling with Grace&#58;</strong> As our system
                        expands, we maintain simplicity and provide guidance on
                        how to scale your design system effectively.
                    </>,
                    <>
                        <strong>Guidelines for Growth&#58;</strong> Clear
                        guidelines help our team incorporate new elements while
                        adhering to our user-centered approach, offering
                        insights for others on how to structure their growth.
                    </>,
                ]}
            /> */}
            <GuidingPrinciple
                title={getLocale(
                    'stories.foundation.guidingPrinciples.sectionTitles.adaptable',
                )}
                summaryContent="We encourage creative freedom while ensuring our system can adjust and evolve, providing a flexible foundation for your own unique designs:"
                listItems={[
                    <>
                        <strong>Creative Interpretation&#58;</strong> Our system
                        allows for creative interpretation, permitting designers
                        to add their unique touch to projects while retaining
                        our playful essence and providing a launchpad for your
                        creative endeavors.
                    </>,
                    <>
                        <strong>Extension-Friendly&#58;</strong> It&#58;s easy
                        to adapt our system&#58;s capabilities to fit specific
                        needs, fostering a culture of innovation and
                        experimentation.
                    </>,
                ]}
            />
            <GuidingPrinciple
                title={getLocale(
                    'stories.foundation.guidingPrinciples.sectionTitles.responsive',
                )}
                summaryContent={`${designSystemName} adapts seamlessly to different devices and screen sizes, offering a responsive framework for your projects:`}
                listItems={[
                    <>
                        <strong>Consistent Joy&#58;</strong> Users can
                        experience the same playful and simple design whether
                        they&apos;re on a desktop, tablet, or smartphone,
                        offering a consistent and responsive user interface for
                        your own applications.
                    </>,
                ]}
            />
            <GuidingPrinciple
                title={getLocale(
                    'stories.foundation.guidingPrinciples.sectionTitles.themeable',
                )}
                summaryContent="We offer personalization options within our design system, allowing you to incorporate themes easily into your own projects:"
                listItems={[
                    <>
                        <strong>Theming Made Fun&#58;</strong> Our theming
                        options are designed to be playful and delightful,
                        providing a foundation for personalization within your
                        designs.
                    </>,
                ]}
            />
            {/* <GuidingPrinciple
                title={getLocale(
                    'stories.foundation.guidingPrinciples.sectionTitles.robust',
                )}
                summaryContent="We ensure that our design system is robust, capable of withstanding the demands of various use cases, serving as a sturdy base for your own systems:"
                listItems={[
                    <>
                        <strong>Reliability&#58;</strong> Our system is built
                        with a strong foundation, ensuring reliable performance
                        even under challenging conditions, setting a reliable
                        benchmark for your own projects.
                    </>,
                    <>
                        <strong>Error Resilience&#58;</strong> We design with
                        the understanding that errors can occur, and our system
                        gracefully handles them to provide a smooth user
                        experience, offering insights on how to design robust
                        error-handling mechanisms.
                    </>,
                ]}
            /> */}
            <GuidingPrinciple
                title={getLocale(
                    'stories.foundation.guidingPrinciples.sectionTitles.shareable',
                )}
                summaryContent={`${getLocale(
                    'designSystemName',
                )} is designed to be shared and used as a foundation for other design systems, with the understanding that each project is unique and can adapt these principles as needed:`}
                listItems={[
                    <>
                        <strong>Open for Sharing and Adaptation&#58;</strong> We
                        believe in the power of collaboration. Our design system
                        is open for others to use as a starting point for their
                        own projects, with the flexibility to tailor these
                        principles to their specific design goals and
                        requirements.
                    </>,
                ]}
            />
        </StoryLayout>
    );
};

export default StoryGuidingPrinciples;
