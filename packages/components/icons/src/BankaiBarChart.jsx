import PropTypes from 'prop-types';
import { TbChartBar as BarChart } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiBarChart = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <BarChart
            {...rest}
            className={classNameUtil(
                `${baseCls}-bar-chart`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiBarChart.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiBarChart;
