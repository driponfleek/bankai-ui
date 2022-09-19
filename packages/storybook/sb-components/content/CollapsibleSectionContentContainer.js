import PropTypes from 'prop-types';

const CollapsibleSectionContentContainer = (props) => {
    const { className, children } = props;
    console.log('props: ', props);

    return <div className={className}>{children}</div>;
};

CollapsibleSectionContentContainer.propTypes = {
    className: PropTypes.string,
};

export default CollapsibleSectionContentContainer;
