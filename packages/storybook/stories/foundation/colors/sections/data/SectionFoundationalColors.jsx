import { useEffect, useReducer } from 'react';
import { reducer } from '@driponfleek/bankai-lib-helper-utils';
import { StorySection, SectionTitle } from '@driponfleek/bankai-lib-storybook';
import { Paragraph } from '@driponfleek/bankai-ui-typography';
import ColorTokenTileList from '../../../../../sb-components/lists/ColorTokenTileList';
import DataVisPaletteListItem from '../../components/DataVisPaletteListItem';

// Utils
import { getFoundationalTokenVals } from '../../utils/dataVisStoryUtils';

const SectionFoundationalColors = () => {
    const htmlDOM = document.getElementsByTagName('html')[0];
    const [colors, dispatch] = useReducer(reducer, getFoundationalTokenVals());
    const { axisColor, canvasColor, gridColor } = colors;

    // const handleMutationChange = useCallback((mutationList = []) => {
    //     const hasClassChange =
    //         mutationList.findIndex(
    //             (mutation) => mutation.attributeName === 'class',
    //         ) > -1;

    //     if (hasClassChange) {
    //         setTimeout(() => {
    //             dispatch(getFoundationalTokenVals());
    //         }, 0);
    //     }
    // }, []);

    useEffect(() => {
        // TODO: When dark them is brought back re-introduce this.
        // const classChangeObserver = new MutationObserver(handleMutationChange);
        // classChangeObserver.observe(htmlDOM, {
        //     attributes: true,
        // });

        if (!colors?.axisColor) {
            setTimeout(() => {
                dispatch(getFoundationalTokenVals());
            }, 0);
        }

        // return () => {
        //     classChangeObserver.disconnect();
        // };
    }, [/* handleMutationChange, */ htmlDOM, colors]);
    const data = [
        { mainContent: 'utility.color.data.canvas', color: canvasColor },
        { mainContent: 'utility.color.data.axis', color: axisColor },
        { mainContent: 'utility.color.data.grid', color: gridColor },
    ];

    return (
        <StorySection>
            <SectionTitle>Foundational Colors</SectionTitle>
            <Paragraph>
                Canvas, Axis, and Grid colors provide the structural baseline
                for charts.
            </Paragraph>
            <ColorTokenTileList
                data={data}
                renderListItem={DataVisPaletteListItem}
            />
        </StorySection>
    );
};

export default SectionFoundationalColors;
