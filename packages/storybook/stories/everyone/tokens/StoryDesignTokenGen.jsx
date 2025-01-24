import { useReducer, useMemo } from 'react';
import { genSBBaseCls } from '@driponfleek/bankai-lib-storybook';
import {
    genConstToDotNotationMap,
    BUTTON_STYLES,
} from '@driponfleek/bankai-lib-theme-utils';
import { reducer } from '@driponfleek/bankai-lib-helper-utils';
import AvatarCompPreview from './components/design-token-gen/AvatarCompPreview';
import BadgeCompPreview from './components/design-token-gen/BadgeCompPreview';
import BannerCompPreview from './components/design-token-gen/BannerCompPreview';
import ButtonCompPreview from './components/design-token-gen/ButtonCompPreview';
import CalloutCompPreview from './components/design-token-gen/CalloutCompPreview';
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
    {
        id: constToTokenMap[SEMANTIC_COLOR_AFFIRMATIVE],
        text: 'Affirmative',
    },
    {
        id: constToTokenMap[SEMANTIC_COLOR_CAUTIONARY],
        text: 'Cautionary',
    },
    {
        id: constToTokenMap[SEMANTIC_COLOR_DESTRUCTIVE],
        text: 'Destructive',
    },
    {
        id: constToTokenMap[SEMANTIC_COLOR_ERROR],
        text: 'Error',
    },
    {
        id: constToTokenMap[SEMANTIC_COLOR_INFO],
        text: 'Info',
    },
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
    badgeAffirmativeSourceColorToken:
        constToTokenMap[SEMANTIC_COLOR_AFFIRMATIVE],
    badgeCautionarySourceColorToken: constToTokenMap[SEMANTIC_COLOR_CAUTIONARY],
    badgeDangerSourceColorToken: constToTokenMap[SEMANTIC_COLOR_ERROR],
    badgeInfoSourceColorToken: constToTokenMap[SEMANTIC_COLOR_INFO],
    bannerAffirmativeSourceColorToken:
        constToTokenMap[SEMANTIC_COLOR_AFFIRMATIVE],
    bannerCautionarySourceColorToken:
        constToTokenMap[SEMANTIC_COLOR_CAUTIONARY],
    bannerDangerSourceColorToken: constToTokenMap[SEMANTIC_COLOR_ERROR],
    bannerInfoSourceColorToken: constToTokenMap[SEMANTIC_COLOR_INFO],
    buttonPrimarySourceColorToken: constToTokenMap[SEMANTIC_COLOR_PRIMARY],
    buttonPrimaryStyle: BUTTON_STYLES.FLAT,
    buttonPrimaryDestructiveSourceColorToken:
        constToTokenMap[SEMANTIC_COLOR_DESTRUCTIVE],
    buttonPrimaryDestructiveStyle: BUTTON_STYLES.FLAT,
    buttonSecondarySourceColorToken: constToTokenMap[SEMANTIC_COLOR_SECONDARY],
    buttonSecondaryStyle: BUTTON_STYLES.GHOST,
    buttonSecondaryDestructiveSourceColorToken:
        constToTokenMap[SEMANTIC_COLOR_DESTRUCTIVE],
    buttonSecondaryDestructiveStyle: BUTTON_STYLES.GHOST,
    calloutAffirmativeSourceColorToken:
        constToTokenMap[SEMANTIC_COLOR_AFFIRMATIVE],
    calloutCautionarySourceColorToken:
        constToTokenMap[SEMANTIC_COLOR_CAUTIONARY],
    calloutDangerSourceColorToken: constToTokenMap[SEMANTIC_COLOR_ERROR],
    calloutInfoSourceColorToken: constToTokenMap[SEMANTIC_COLOR_INFO],
    isDarkMode: false,
    shouldAutoCorrectForA11y: true,
    shouldUseMinimumAPCATextCompliance: true,
};

const StoryDesignTokenGen = () => {
    const baseCls = genSBBaseCls('design-token-generator');
    const [fieldValues, dispatch] = useReducer(reducer, initialState);
    // TODO: Pass dispatch to form and let it handle the state updates
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
    // TODO: To improve performance here we need to have every section
    // generate its own tokens and memoize them instead of doing all at once
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
    } = useMemo(
        () => getTokensByCategory(genTokens(fieldValues)),
        [fieldValues],
    );
    // console.log('fieldValues: ', fieldValues);

    // TODO: Add Core Neutral Colors and move input from SectionForm to preview
    // of components that are impacted by that change (ex. Banner, Badge, Callout)
    // TODO: A lot of the preview props are common, see about defining once
    // instead of every time.
    // TODO: Variants need to be in constants instead of hard-coded
    // TODO: Consider defining the source color token label this in the comp preview where possible
    // TODO: Consider limiting the tokens available to certain components
    // TODO: Change "Error" to "Danger"? (ex. SEMANTIC_COLOR_ERROR)
    // TODO: Need to consider overall page design to make it more user-friendly.
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
                sectionTitle="Avatar"
            >
                <AvatarCompPreview
                    baseCls={baseCls}
                    isDarkMode={fieldValues.isDarkMode}
                    semanticTokens={semanticTokens}
                    tokensData={avatarTokens}
                    dispatch={dispatch}
                    opsProps={{
                        label: 'Avatar Source Color Token',
                        sourceTokenOps: tokenDropdownListData,
                        value: fieldValues.avatarSourceColorToken,
                    }}
                />
            </SectionTokens>
            <SectionTokens
                baseCls={baseCls}
                tokensData={badgeTokens}
                sectionTitle="Badge"
            >
                <BadgeCompPreview
                    baseCls={baseCls}
                    isDarkMode={fieldValues.isDarkMode}
                    semanticTokens={semanticTokens}
                    tokensData={badgeTokens}
                />
            </SectionTokens>
            <SectionTokens
                baseCls={baseCls}
                tokensData={badgeAffirmativeTokens}
                sectionTitle="Badge (Affirmative)"
            >
                <BadgeCompPreview
                    baseCls={baseCls}
                    variant="Affirmative"
                    isDarkMode={fieldValues.isDarkMode}
                    semanticTokens={semanticTokens}
                    tokensData={badgeAffirmativeTokens}
                    dispatch={dispatch}
                    opsProps={{
                        label: 'Badge (Affirmative) Source Color Token',
                        sourceTokenOps: tokenDropdownListData,
                        value: fieldValues.badgeAffirmativeSourceColorToken,
                    }}
                />
            </SectionTokens>
            <SectionTokens
                baseCls={baseCls}
                tokensData={badgeCautionaryTokens}
                sectionTitle="Badge (Cautionary)"
            >
                <BadgeCompPreview
                    baseCls={baseCls}
                    variant="Cautionary"
                    isDarkMode={fieldValues.isDarkMode}
                    semanticTokens={semanticTokens}
                    tokensData={badgeCautionaryTokens}
                    dispatch={dispatch}
                    opsProps={{
                        label: 'Badge (Cautionary) Source Color Token',
                        sourceTokenOps: tokenDropdownListData,
                        value: fieldValues.badgeCautionarySourceColorToken,
                    }}
                />
            </SectionTokens>
            <SectionTokens
                baseCls={baseCls}
                tokensData={badgeDangerTokens}
                sectionTitle="Badge (Danger)"
            >
                <BadgeCompPreview
                    baseCls={baseCls}
                    variant="Danger"
                    isDarkMode={fieldValues.isDarkMode}
                    semanticTokens={semanticTokens}
                    tokensData={badgeDangerTokens}
                    dispatch={dispatch}
                    opsProps={{
                        label: 'Badge (Danger) Source Color Token',
                        sourceTokenOps: tokenDropdownListData,
                        value: fieldValues.badgeDangerSourceColorToken,
                    }}
                />
            </SectionTokens>
            <SectionTokens
                baseCls={baseCls}
                tokensData={badgeInfoTokens}
                sectionTitle="Badge (Info)"
            >
                <BadgeCompPreview
                    baseCls={baseCls}
                    variant="Info"
                    isDarkMode={fieldValues.isDarkMode}
                    semanticTokens={semanticTokens}
                    tokensData={badgeInfoTokens}
                    dispatch={dispatch}
                    opsProps={{
                        label: 'Badge (Info) Source Color Token',
                        sourceTokenOps: tokenDropdownListData,
                        value: fieldValues.badgeInfoSourceColorToken,
                    }}
                />
            </SectionTokens>
            <SectionTokens
                baseCls={baseCls}
                tokensData={bannerTokens}
                sectionTitle="Banner"
            >
                <BannerCompPreview
                    baseCls={baseCls}
                    semanticTokens={semanticTokens}
                    tokensData={bannerTokens}
                />
            </SectionTokens>
            <SectionTokens
                baseCls={baseCls}
                tokensData={bannerAffirmativeTokens}
                sectionTitle="Banner (Affirmative)"
            >
                <BannerCompPreview
                    baseCls={baseCls}
                    variant="Affirmative"
                    isDarkMode={fieldValues.isDarkMode}
                    semanticTokens={semanticTokens}
                    tokensData={bannerAffirmativeTokens}
                    dispatch={dispatch}
                    opsProps={{
                        label: 'Banner (Affirmative) Source Color Token',
                        sourceTokenOps: tokenDropdownListData,
                        value: fieldValues.bannerAffirmativeSourceColorToken,
                    }}
                />
            </SectionTokens>
            <SectionTokens
                baseCls={baseCls}
                tokensData={bannerCautionaryTokens}
                sectionTitle="Banner (Cautionary)"
            >
                <BannerCompPreview
                    baseCls={baseCls}
                    variant="Cautionary"
                    isDarkMode={fieldValues.isDarkMode}
                    semanticTokens={semanticTokens}
                    tokensData={bannerCautionaryTokens}
                    dispatch={dispatch}
                    opsProps={{
                        label: 'Banner (Cautionary) Source Color Token',
                        sourceTokenOps: tokenDropdownListData,
                        value: fieldValues.bannerCautionarySourceColorToken,
                    }}
                />
            </SectionTokens>
            <SectionTokens
                baseCls={baseCls}
                tokensData={bannerDangerTokens}
                sectionTitle="Banner (Danger)"
            >
                <BannerCompPreview
                    baseCls={baseCls}
                    variant="Danger"
                    isDarkMode={fieldValues.isDarkMode}
                    semanticTokens={semanticTokens}
                    tokensData={bannerDangerTokens}
                    dispatch={dispatch}
                    opsProps={{
                        label: 'Banner (Danger) Source Color Token',
                        sourceTokenOps: tokenDropdownListData,
                        value: fieldValues.bannerDangerSourceColorToken,
                    }}
                />
            </SectionTokens>
            <SectionTokens
                baseCls={baseCls}
                tokensData={bannerInfoTokens}
                sectionTitle="Banner (Info)"
            >
                <BannerCompPreview
                    baseCls={baseCls}
                    variant="Info"
                    isDarkMode={fieldValues.isDarkMode}
                    semanticTokens={semanticTokens}
                    tokensData={bannerInfoTokens}
                    dispatch={dispatch}
                    opsProps={{
                        label: 'Banner (Info) Source Color Token',
                        sourceTokenOps: tokenDropdownListData,
                        value: fieldValues.bannerInfoSourceColorToken,
                    }}
                />
            </SectionTokens>
            <SectionButtonTokens
                baseCls={baseCls}
                tokensData={btnPrimaryTokens}
                sectionTitle="Button (Primary)"
            >
                <ButtonCompPreview
                    baseCls={baseCls}
                    variant="Primary"
                    isDarkMode={fieldValues.isDarkMode}
                    semanticTokens={semanticTokens}
                    tokensData={btnPrimaryTokens}
                    dispatch={dispatch}
                    opsProps={{
                        sourceTokenLabel: 'Button (Primary) Source Color Token',
                        sourceTokenOps: tokenDropdownListData,
                        sourceTokenValue:
                            fieldValues.buttonPrimarySourceColorToken,
                        styleLabel: 'Button (Primary) Style',
                        styleOps: btnStyleDropdownData,
                        styleValue: fieldValues.buttonPrimaryStyle,
                    }}
                />
            </SectionButtonTokens>
            <SectionButtonTokens
                baseCls={baseCls}
                tokensData={btnPrimaryDestructiveTokens}
                sectionTitle="Button (Primary Destructive)"
            >
                <ButtonCompPreview
                    baseCls={baseCls}
                    variant="Primary"
                    isDarkMode={fieldValues.isDarkMode}
                    semanticTokens={semanticTokens}
                    tokensData={btnPrimaryDestructiveTokens}
                    dispatch={dispatch}
                    opsProps={{
                        sourceTokenLabel:
                            'Button (Primary Destructive) Source Color Token',
                        sourceTokenOps: tokenDropdownListData,
                        sourceTokenValue:
                            fieldValues.buttonPrimaryDestructiveSourceColorToken,
                        styleLabel: 'Button (Primary Destructive) Style',
                        styleOps: btnStyleDropdownData,
                        styleValue: fieldValues.buttonPrimaryDestructiveStyle,
                    }}
                    isDestructive
                />
            </SectionButtonTokens>
            <SectionButtonTokens
                baseCls={baseCls}
                tokensData={btnSecondaryTokens}
                sectionTitle="Button (Secondary)"
            >
                <ButtonCompPreview
                    baseCls={baseCls}
                    variant="Secondary"
                    isDarkMode={fieldValues.isDarkMode}
                    semanticTokens={semanticTokens}
                    tokensData={btnSecondaryTokens}
                    dispatch={dispatch}
                    opsProps={{
                        sourceTokenLabel:
                            'Button (Secondary) Source Color Token',
                        sourceTokenOps: tokenDropdownListData,
                        sourceTokenValue:
                            fieldValues.buttonSecondarySourceColorToken,
                        styleLabel: 'Button (Secondary) Style',
                        styleOps: btnStyleDropdownData,
                        styleValue: fieldValues.buttonSecondaryStyle,
                    }}
                />
            </SectionButtonTokens>
            <SectionButtonTokens
                baseCls={baseCls}
                tokensData={btnSecondaryDestructiveTokens}
                sectionTitle="Button (Secondary Destructive)"
            >
                <ButtonCompPreview
                    baseCls={baseCls}
                    variant="Secondary"
                    isDarkMode={fieldValues.isDarkMode}
                    semanticTokens={semanticTokens}
                    tokensData={btnSecondaryDestructiveTokens}
                    dispatch={dispatch}
                    opsProps={{
                        sourceTokenLabel:
                            'Button (Secondary Destructive) Source Color Token',
                        sourceTokenOps: tokenDropdownListData,
                        sourceTokenValue:
                            fieldValues.buttonSecondaryDestructiveSourceColorToken,
                        styleLabel: 'Button (Secondary Destructive) Style',
                        styleOps: btnStyleDropdownData,
                        styleValue: fieldValues.buttonSecondaryDestructiveStyle,
                    }}
                    isDestructive
                />
            </SectionButtonTokens>
            <SectionTokens
                baseCls={baseCls}
                tokensData={calloutAffirmativeTokens}
                sectionTitle="Callout (Affirmative)"
            >
                <CalloutCompPreview
                    baseCls={baseCls}
                    variant="Affirmative"
                    isDarkMode={fieldValues.isDarkMode}
                    semanticTokens={semanticTokens}
                    tokensData={calloutAffirmativeTokens}
                    dispatch={dispatch}
                    opsProps={{
                        label: 'Callout (Affirmative) Source Color Token',
                        sourceTokenOps: tokenDropdownListData,
                        value: fieldValues.calloutAffirmativeSourceColorToken,
                    }}
                />
            </SectionTokens>
            <SectionTokens
                baseCls={baseCls}
                tokensData={calloutCautionaryTokens}
                sectionTitle="Callout (Cautionary)"
            >
                <CalloutCompPreview
                    baseCls={baseCls}
                    variant="Cautionary"
                    isDarkMode={fieldValues.isDarkMode}
                    semanticTokens={semanticTokens}
                    tokensData={calloutCautionaryTokens}
                    dispatch={dispatch}
                    opsProps={{
                        label: 'Callout (Cautionary) Source Color Token',
                        sourceTokenOps: tokenDropdownListData,
                        value: fieldValues.calloutCautionarySourceColorToken,
                    }}
                />
            </SectionTokens>
            <SectionTokens
                baseCls={baseCls}
                tokensData={calloutDangerTokens}
                sectionTitle="Callout (Danger)"
            >
                <CalloutCompPreview
                    baseCls={baseCls}
                    variant="Danger"
                    isDarkMode={fieldValues.isDarkMode}
                    semanticTokens={semanticTokens}
                    tokensData={calloutDangerTokens}
                    dispatch={dispatch}
                    opsProps={{
                        label: 'Callout (Danger) Source Color Token',
                        sourceTokenOps: tokenDropdownListData,
                        value: fieldValues.calloutDangerSourceColorToken,
                    }}
                />
            </SectionTokens>
            <SectionTokens
                baseCls={baseCls}
                tokensData={calloutInfoTokens}
                sectionTitle="Callout (Info)"
            >
                <CalloutCompPreview
                    baseCls={baseCls}
                    variant="Info"
                    isDarkMode={fieldValues.isDarkMode}
                    semanticTokens={semanticTokens}
                    tokensData={calloutInfoTokens}
                    dispatch={dispatch}
                    opsProps={{
                        label: 'Callout (Info) Source Color Token',
                        sourceTokenOps: tokenDropdownListData,
                        value: fieldValues.calloutInfoSourceColorToken,
                    }}
                />
            </SectionTokens>
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
