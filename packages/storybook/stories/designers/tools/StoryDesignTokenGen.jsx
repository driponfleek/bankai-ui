import { useReducer } from 'react';
import { genSBBaseCls } from '@driponfleek/bankai-lib-storybook';
import { STORY_SUB_TITLE } from './const/storyConst';
import {
    FIELD_IDS_TO_VALUE_DEFAULTS as DEFAULTS,
    FIELD_IDS,
} from './const/designTokenGenConst';
import SectionForm from './sections/design-token-generator/SectionForm';
import SectionTokens from './sections/design-token-generator/SectionTokens';
import StoryLayout from '../../../sb-components/layout/StoryLayout';

// Utils
import { getLocale } from '../../../utils/localeUtils';

// Styles
import './styles/story-design-token-gen.scss';

const {
    CORE_COLOR_NEUTRAL_SEED,
    SEMANTIC_COLOR_ACCENT,
    SEMANTIC_COLOR_AFFIRMATIVE,
    SEMANTIC_COLOR_CAUTIONARY,
    SEMANTIC_COLOR_ERROR,
    SEMANTIC_COLOR_INFO,
    SEMANTIC_COLOR_PRIMARY,
    SEMANTIC_COLOR_SECONDARY,
} = FIELD_IDS;

const initialState = {
    [CORE_COLOR_NEUTRAL_SEED]: DEFAULTS[CORE_COLOR_NEUTRAL_SEED],
    [SEMANTIC_COLOR_ACCENT]: DEFAULTS[SEMANTIC_COLOR_ACCENT],
    [SEMANTIC_COLOR_AFFIRMATIVE]: DEFAULTS[SEMANTIC_COLOR_AFFIRMATIVE],
    [SEMANTIC_COLOR_CAUTIONARY]: DEFAULTS[SEMANTIC_COLOR_CAUTIONARY],
    [SEMANTIC_COLOR_ERROR]: DEFAULTS[SEMANTIC_COLOR_ERROR],
    [SEMANTIC_COLOR_INFO]: DEFAULTS[SEMANTIC_COLOR_INFO],
    [SEMANTIC_COLOR_PRIMARY]: DEFAULTS[SEMANTIC_COLOR_PRIMARY],
    [SEMANTIC_COLOR_SECONDARY]: DEFAULTS[SEMANTIC_COLOR_SECONDARY],
    isDarkMode: false,
};

const StoryDesignTokenGen = () => {
    const baseCls = genSBBaseCls('design-token-generator');
    const reducer = (state, updatedField) => {
        return { ...state, ...updatedField };
    };
    const [fieldValues, dispatch] = useReducer(reducer, initialState);
    const handleChange = (value, fieldId) => {
        dispatch({ [fieldId]: value });
    };
    const handleDarkModeChange = (value, fieldId) => {
        const { isDarkMode } = fieldValues;

        dispatch({ [fieldId]: !isDarkMode });
    };
    // console.log('fieldValues: ', fieldValues);

    return (
        <StoryLayout
            contextCls={baseCls}
            title={getLocale(
                'stories.designers.tools.designTokenGenerator.title',
            )}
            subTitle={STORY_SUB_TITLE}
        >
            <SectionForm
                baseCls={baseCls}
                fieldValues={fieldValues}
                onChange={handleChange}
                onDarkModeChange={handleDarkModeChange}
            />
            <SectionTokens baseCls={baseCls} fieldValues={fieldValues} />
        </StoryLayout>
    );
};

export default StoryDesignTokenGen;
