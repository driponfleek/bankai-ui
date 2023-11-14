import { useReducer } from 'react';
import { genSBBaseCls } from '@driponfleek/bankai-lib-storybook';
import {
    genConstToDotNotationMap,
    BUTTON_STYLES,
} from '@driponfleek/bankai-lib-theme-utils';
import { IFLFormFieldComposer } from '@driponfleek/bankai-ui-form-elements';
import {
    FormLayout,
    FormLayoutSection,
    DynamicFormRow,
} from '@driponfleek/bankai-ui-layouts';
import { Dropdown } from '@driponfleek/bankai-ui-form-elements-rw';
import AvatarCompPreview from './components/design-token-gen/AvatarCompPreview';
import {
    genTokens,
    getTokensByCategory,
} from './utils/designTokenGenStoryUtils';
import { STORY_SUB_TITLE } from './const/storyConst';
import {
    FIELD_IDS_TO_VALUE_DEFAULTS as DEFAULTS,
    FIELD_IDS,
} from './const/designTokenGenConst';
import SectionForm from './sections/design-token-generator/SectionForm';
import SectionTokens from './sections/design-token-generator/SectionTokens';
import SectionButtonTokens from './sections/design-token-generator/SectionButtonTokens';
import StoryLayout from '../../../sb-components/layout/StoryLayout';

// Utils
import { getLocale } from '../../../utils/localeUtils';

// Styles
import './styles/story-design-token-gen.scss';

const {
    CORE_COLOR_NEUTRAL_SEED,
    SEMANTIC_COLOR_ACCENT_PRIMARY,
    SEMANTIC_COLOR_ACCENT_SECONDARY,
    SEMANTIC_COLOR_ACCENT_TERTIARY,
    SEMANTIC_COLOR_AFFIRMATIVE,
    SEMANTIC_COLOR_BRAND,
    SEMANTIC_COLOR_CAUTIONARY,
    SEMANTIC_COLOR_CANVAS_BRAND,
    SEMANTIC_COLOR_DESTRUCTIVE,
    SEMANTIC_COLOR_ERROR,
    SEMANTIC_COLOR_INFO,
    SEMANTIC_COLOR_PRIMARY,
    SEMANTIC_COLOR_SECONDARY,
} = FIELD_IDS;
const constToTokenMap = genConstToDotNotationMap({
    SEMANTIC_COLOR_ACCENT_PRIMARY,
    SEMANTIC_COLOR_ACCENT_SECONDARY,
    SEMANTIC_COLOR_ACCENT_TERTIARY,
    SEMANTIC_COLOR_AFFIRMATIVE,
    SEMANTIC_COLOR_BRAND,
    SEMANTIC_COLOR_CAUTIONARY,
    SEMANTIC_COLOR_CANVAS_BRAND,
    SEMANTIC_COLOR_DESTRUCTIVE,
    SEMANTIC_COLOR_ERROR,
    SEMANTIC_COLOR_INFO,
    SEMANTIC_COLOR_PRIMARY,
    SEMANTIC_COLOR_SECONDARY,
});
const tokenDropdownListData = [
    {
        id: constToTokenMap[SEMANTIC_COLOR_PRIMARY],
        text: 'Primary',
    },
    {
        id: constToTokenMap[SEMANTIC_COLOR_SECONDARY],
        text: 'Secondary',
    },
    {
        id: constToTokenMap[SEMANTIC_COLOR_BRAND],
        text: 'Brand',
    },
    {
        id: constToTokenMap[SEMANTIC_COLOR_CANVAS_BRAND],
        text: 'Canvas Brand',
    },
    {
        id: constToTokenMap[SEMANTIC_COLOR_ACCENT_PRIMARY],
        text: 'Accent (Primary)',
    },
    {
        id: constToTokenMap[SEMANTIC_COLOR_ACCENT_SECONDARY],
        text: 'Accent (Secondary)',
    },
    {
        id: constToTokenMap[SEMANTIC_COLOR_ACCENT_TERTIARY],
        text: 'Accent (Tertiary)',
    },
    // {
    //     id: constToTokenMap[SEMANTIC_COLOR_AFFIRMATIVE],
    //     text: 'Affirmative',
    // },
    // {
    //     id: constToTokenMap[SEMANTIC_COLOR_CAUTIONARY],
    //     text: 'Cautionary',
    // },
    // {
    //     id: constToTokenMap[SEMANTIC_COLOR_ERROR],
    //     text: 'Error',
    // },
    // {
    //     id: constToTokenMap[SEMANTIC_COLOR_INFO],
    //     text: 'Info',
    // },
];
const btnStyleDropdownData = [
    {
        id: BUTTON_STYLES.FLAT,
        text: 'Flat',
    },
    {
        id: BUTTON_STYLES.GHOST,
        text: 'Ghost',
    },
];
const DropdownField = IFLFormFieldComposer(Dropdown);

const initialState = {
    [CORE_COLOR_NEUTRAL_SEED]: DEFAULTS[CORE_COLOR_NEUTRAL_SEED],
    [SEMANTIC_COLOR_ACCENT_PRIMARY]: DEFAULTS[SEMANTIC_COLOR_ACCENT_PRIMARY],
    [SEMANTIC_COLOR_ACCENT_SECONDARY]:
        DEFAULTS[SEMANTIC_COLOR_ACCENT_SECONDARY],
    [SEMANTIC_COLOR_ACCENT_TERTIARY]: DEFAULTS[SEMANTIC_COLOR_ACCENT_TERTIARY],
    [SEMANTIC_COLOR_AFFIRMATIVE]: DEFAULTS[SEMANTIC_COLOR_AFFIRMATIVE],
    [SEMANTIC_COLOR_BRAND]: DEFAULTS[SEMANTIC_COLOR_BRAND],
    [SEMANTIC_COLOR_CAUTIONARY]: DEFAULTS[SEMANTIC_COLOR_CAUTIONARY],
    [SEMANTIC_COLOR_CANVAS_BRAND]: DEFAULTS[SEMANTIC_COLOR_CANVAS_BRAND],
    [SEMANTIC_COLOR_DESTRUCTIVE]: DEFAULTS[SEMANTIC_COLOR_DESTRUCTIVE],
    [SEMANTIC_COLOR_ERROR]: DEFAULTS[SEMANTIC_COLOR_ERROR],
    [SEMANTIC_COLOR_INFO]: DEFAULTS[SEMANTIC_COLOR_INFO],
    [SEMANTIC_COLOR_PRIMARY]: DEFAULTS[SEMANTIC_COLOR_PRIMARY],
    [SEMANTIC_COLOR_SECONDARY]: DEFAULTS[SEMANTIC_COLOR_SECONDARY],
    avatarSourceColorToken: constToTokenMap[SEMANTIC_COLOR_CANVAS_BRAND],
    btnSecondarySourceColorToken: constToTokenMap[SEMANTIC_COLOR_SECONDARY],
    btnSecondaryStyle: BUTTON_STYLES.GHOST,
    isDarkMode: false,
    shouldAutoCorrectForA11y: true,
    shouldUseMinimumAPCATextCompliance: true,
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
    const handleAutoCorrectForA11yChange = (value, fieldId) => {
        const { shouldAutoCorrectForA11y } = fieldValues;

        dispatch({ [fieldId]: !shouldAutoCorrectForA11y });
    };
    const handleAPCAChange = (value, fieldId) => {
        const { shouldUseMinimumAPCATextCompliance } = fieldValues;

        dispatch({ [fieldId]: !shouldUseMinimumAPCATextCompliance });
    };
    const handleAvatarSourceColorChange = (value = {}) => {
        if (value?.id) {
            dispatch({ avatarSourceColorToken: value.id });
        }
    };
    const handleBtnSecondarySourceColorChange = (value = {}) => {
        if (value?.id) {
            dispatch({ btnSecondarySourceColorToken: value.id });
        }
    };
    const handleBtnSecondaryStyleChange = (value = {}) => {
        if (value?.id) {
            dispatch({ btnSecondaryStyle: value.id });
        }
    };
    const tokensData = genTokens(fieldValues);
    const {
        accordionTokens,
        avatarTokens,
        badgeTokens,
        badgeAffirmativeTokens,
        badgeCautionaryTokens,
        badgeDangerTokens,
        badgeInfoTokens,
        bannerTokens,
        bannerAffirmativeTokens,
        bannerCautionaryTokens,
        bannerDangerTokens,
        bannerInfoTokens,
        btnPrimaryTokens,
        btnPrimaryDestructiveTokens,
        btnSecondaryTokens,
        btnSecondaryDestructiveTokens,
        calloutAffirmativeTokens,
        calloutCautionaryTokens,
        calloutDangerTokens,
        calloutInfoTokens,
        dndDropzoneTokens,
        formMenuTokens,
        formToggleSwitchTokens,
        formToggleTokens,
        formTokens,
        linkTokens,
        loadingTokens,
        modalTokens,
        remainingTokens,
        semanticTokens,
        tabsTokens,
        toasterAffirmativeTokens,
        toasterCautionaryTokens,
        toasterErrorTokens,
        toasterInfoTokens,
        tooltipTokens,
    } = getTokensByCategory(tokensData);

    return (
        <StoryLayout
            contextCls={baseCls}
            title={getLocale(
                'stories.everyone.designTokens.designTokenGenerator.title',
            )}
            subTitle={STORY_SUB_TITLE}
        >
            <SectionForm
                baseCls={baseCls}
                fieldValues={fieldValues}
                onChange={handleChange}
                onDarkModeChange={handleDarkModeChange}
                onAutoCorrectForA11yChange={handleAutoCorrectForA11yChange}
                onAPCAChange={handleAPCAChange}
            />
            <SectionTokens
                baseCls={baseCls}
                tokensData={semanticTokens}
                sectionTitle="Semantic"
            />
            <SectionTokens
                baseCls={baseCls}
                tokensData={accordionTokens}
                sectionTitle="Accordion"
            />
            <SectionTokens
                baseCls={baseCls}
                tokensData={avatarTokens}
                sectionTitle="Avatar Test"
            >
                <AvatarCompPreview
                    baseCls={baseCls}
                    tokensData={avatarTokens}
                    opsProps={{
                        sourceTokenOps: tokenDropdownListData,
                        value: tokenDropdownListData.find(
                            (token) =>
                                token.id === fieldValues.avatarSourceColorToken,
                        ),
                        onChange: handleAvatarSourceColorChange,
                    }}
                />
            </SectionTokens>
            <SectionTokens
                baseCls={baseCls}
                tokensData={badgeTokens}
                sectionTitle="Badge"
            />
            <SectionTokens
                baseCls={baseCls}
                tokensData={badgeAffirmativeTokens}
                sectionTitle="Badge (Affirmative)"
            />
            <SectionTokens
                baseCls={baseCls}
                tokensData={badgeCautionaryTokens}
                sectionTitle="Badge (Cautionary)"
            />
            <SectionTokens
                baseCls={baseCls}
                tokensData={badgeDangerTokens}
                sectionTitle="Badge (Danger)"
            />
            <SectionTokens
                baseCls={baseCls}
                tokensData={badgeInfoTokens}
                sectionTitle="Badge (Info)"
            />
            <SectionTokens
                baseCls={baseCls}
                tokensData={bannerTokens}
                sectionTitle="Banner"
            />
            <SectionTokens
                baseCls={baseCls}
                tokensData={bannerAffirmativeTokens}
                sectionTitle="Banner (Affirmative)"
            />
            <SectionTokens
                baseCls={baseCls}
                tokensData={bannerCautionaryTokens}
                sectionTitle="Banner (Cautionary)"
            />
            <SectionTokens
                baseCls={baseCls}
                tokensData={bannerDangerTokens}
                sectionTitle="Banner (Danger)"
            />
            <SectionTokens
                baseCls={baseCls}
                tokensData={bannerInfoTokens}
                sectionTitle="Banner (Info)"
            />
            <SectionButtonTokens
                baseCls={baseCls}
                tokensData={btnPrimaryTokens}
                sectionTitle="Button (Primary)"
            />
            <SectionButtonTokens
                baseCls={baseCls}
                tokensData={btnPrimaryDestructiveTokens}
                sectionTitle="Button (Primary Destructive)"
            />
            <SectionButtonTokens
                baseCls={baseCls}
                tokensData={btnSecondaryTokens}
                sectionTitle="Button (Secondary)"
            >
                <FormLayout>
                    <FormLayoutSection>
                        <DynamicFormRow>
                            <DropdownField
                                labelProps={{
                                    content:
                                        'Button Secondary Source Color Token',
                                }}
                                data={tokenDropdownListData}
                                value={tokenDropdownListData.find(
                                    (token) =>
                                        token.id ===
                                        fieldValues.btnSecondarySourceColorToken,
                                )}
                                textField="text"
                                onChange={handleBtnSecondarySourceColorChange}
                            />
                            <DropdownField
                                labelProps={{
                                    content: 'Button Secondary Style',
                                }}
                                data={btnStyleDropdownData}
                                value={btnStyleDropdownData.find(
                                    (token) =>
                                        token.id ===
                                        fieldValues.btnSecondaryStyle,
                                )}
                                textField="text"
                                onChange={handleBtnSecondaryStyleChange}
                            />
                        </DynamicFormRow>
                    </FormLayoutSection>
                </FormLayout>
            </SectionButtonTokens>
            <SectionButtonTokens
                baseCls={baseCls}
                tokensData={btnSecondaryDestructiveTokens}
                sectionTitle="Button (Secondary Destructive)"
            />
            <SectionTokens
                baseCls={baseCls}
                tokensData={calloutAffirmativeTokens}
                sectionTitle="Callout (Affirmative)"
            />
            <SectionTokens
                baseCls={baseCls}
                tokensData={calloutCautionaryTokens}
                sectionTitle="Callout (Cautionary)"
            />
            <SectionTokens
                baseCls={baseCls}
                tokensData={calloutDangerTokens}
                sectionTitle="Callout (Danger)"
            />
            <SectionTokens
                baseCls={baseCls}
                tokensData={calloutInfoTokens}
                sectionTitle="Callout (Info)"
            />
            <SectionTokens
                baseCls={baseCls}
                tokensData={dndDropzoneTokens}
                sectionTitle="Drag & Drop (Dropzone)"
            />
            <SectionTokens
                baseCls={baseCls}
                tokensData={formTokens}
                sectionTitle="Form"
            />
            <SectionTokens
                baseCls={baseCls}
                tokensData={formToggleTokens}
                sectionTitle="Form Checkboxes and Radios"
            />
            <SectionTokens
                baseCls={baseCls}
                tokensData={formMenuTokens}
                sectionTitle="Form Menus"
            />
            <SectionTokens
                baseCls={baseCls}
                tokensData={formToggleSwitchTokens}
                sectionTitle="Form Toggle Switch"
            />
            <SectionTokens
                baseCls={baseCls}
                tokensData={linkTokens}
                sectionTitle="Links"
            />
            <SectionTokens
                baseCls={baseCls}
                tokensData={loadingTokens}
                sectionTitle="Loading"
            />
            <SectionTokens
                baseCls={baseCls}
                tokensData={modalTokens}
                sectionTitle="Modals"
            />
            <SectionTokens
                baseCls={baseCls}
                tokensData={tabsTokens}
                sectionTitle="Tabs"
            />
            <SectionTokens
                baseCls={baseCls}
                tokensData={toasterAffirmativeTokens}
                sectionTitle="Toaster (Affirmative)"
            />
            <SectionTokens
                baseCls={baseCls}
                tokensData={toasterCautionaryTokens}
                sectionTitle="Toaster (Cautionary)"
            />
            <SectionTokens
                baseCls={baseCls}
                tokensData={toasterErrorTokens}
                sectionTitle="Toaster (Error)"
            />
            <SectionTokens
                baseCls={baseCls}
                tokensData={toasterInfoTokens}
                sectionTitle="Toaster (Info)"
            />
            <SectionTokens
                baseCls={baseCls}
                tokensData={tooltipTokens}
                sectionTitle="Tooltips"
            />
            {remainingTokens.length > 0 && (
                <SectionTokens
                    baseCls={baseCls}
                    tokensData={remainingTokens}
                    sectionTitle="Misc Tokens"
                />
            )}
        </StoryLayout>
    );
};

export default StoryDesignTokenGen;
