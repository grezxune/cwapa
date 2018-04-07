import React from 'react';

import Variables from './variables';

export default theme => {
    return {
        title: {
            fontSize: Variables.fontSizeXlarge,
            fontWeight: 'bold',
            width: '100%',
            textAlign: 'left',

            padding: `0px ${Variables.sSize}`,
            margin: '0px 0px 10px 0px'
        }
    };
};
