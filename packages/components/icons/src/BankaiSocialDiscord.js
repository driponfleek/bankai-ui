import React from 'react';
import PropTypes from 'prop-types';
import { RiDiscordFill } from 'react-icons/ri';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiSocialDiscord = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <RiDiscordFill
            {...rest}
            className={classNameUtil(
                `${baseCls}-social-discord`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiSocialDiscord.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiSocialDiscord;
