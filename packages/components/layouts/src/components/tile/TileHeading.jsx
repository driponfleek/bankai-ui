import { Heading } from '@driponfleek/bankai-ui-typography';

/**
 * @param {Object} props
 * @param {string} [props.baseCls] - Base CSS class name passed from the parent Tile component
 * @param {string|React.ReactElement} [props.headingContent] - Content rendered inside the heading element
 * @param {number} [props.headingLvl] - Heading level for the heading element
 */
const TileHeading = (props) => {
    const { baseCls, headingLvl, headingContent } = props;

    return (
        <div className={`${baseCls}__heading-container`}>
            <Heading headingLvl={headingLvl} contextCls={`${baseCls}__heading`}>
                {headingContent}
            </Heading>
        </div>
    );
};

export default TileHeading;
