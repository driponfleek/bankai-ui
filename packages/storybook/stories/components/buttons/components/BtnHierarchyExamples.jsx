import { ButtonSecondary, ButtonPrimary } from '@driponfleek/bankai-ui-buttons';
import { CompPreviewWithBanner } from '@driponfleek/bankai-lib-storybook';

// Styles
import './styles/btn-hierarchy-examples.scss';

/**
 * @param {Object} props
 * @param {string} [props.baseCls] - Base BEM class applied to the container elements
 * @param {boolean} [props.isDestructive] - When true, renders the destructive primary button hierarchy example
 */
const BtnHierarchyExamples = (props) => {
    const { baseCls, isDestructive = false } = props;
    const inlineBtnsBannerProps = {
        msg: <strong>Inline&#58;</strong>,
    };
    const stackedBtnsBannerProps = {
        msg: <strong>Stacked&#58;</strong>,
    };

    return (
        <>
            <CompPreviewWithBanner
                contextCls={`${baseCls}__btn-hierarchy-inline-ex`}
                bannerProps={inlineBtnsBannerProps}
                shouldRenderIcon={false}
            >
                {!isDestructive && <ButtonPrimary text="Save" />}
                <ButtonSecondary text="Cancel" />
                {isDestructive && <ButtonPrimary text="Delete" isDestructive />}
            </CompPreviewWithBanner>
            <CompPreviewWithBanner
                contextCls={`${baseCls}__btn-hierarchy-stacked-ex`}
                bannerProps={stackedBtnsBannerProps}
                shouldRenderIcon={false}
            >
                {!isDestructive && <ButtonPrimary text="Save" />}
                <ButtonSecondary text="Cancel" />
                {isDestructive && <ButtonPrimary text="Delete" isDestructive />}
            </CompPreviewWithBanner>
        </>
    );
};

export default BtnHierarchyExamples;
