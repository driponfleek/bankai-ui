import { Heading } from '@driponfleek/bankai-ui-typography';

/**
 * @param {Object} props
 * @param {string} [props.baseCls] - Base CSS class name passed from the parent component
 * @param {string|React.ReactElement} [props.msg] - Body content
 * @param {string|React.ReactElement} [props.title] - Heading content
 * @param {number} [props.headingLvl] - Heading level for the title
 */
const MainContent = (props) => {
    const { baseCls, title, msg, headingLvl } = props;

    return (
        <div className={`${baseCls}__text-container`}>
            {title && (
                <div className={`${baseCls}__title-container`}>
                    <Heading
                        contextCls={`${baseCls}__title`}
                        headingLvl={headingLvl}
                    >
                        {title}
                    </Heading>
                </div>
            )}
            {msg && (
                <div className={`${baseCls}__msg-container`}>
                    <div className={`${baseCls}__msg`}>{msg}</div>
                </div>
            )}
        </div>
    );
};

export default MainContent;
