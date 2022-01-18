import React from 'react';
import StoryLayout from '../../../sb-components/layout/StoryLayout';

// Utils
import { getSanatizedStoryProps } from '../../../utils/storyLayoutPropsUtils';

const WelcomeGuide = (props) => (
    <StoryLayout {...getSanatizedStoryProps(props, false)} title="Hello World">
        <p>Coming Soon</p>
    </StoryLayout>
);

export default WelcomeGuide;
