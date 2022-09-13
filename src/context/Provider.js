import React, { useState } from 'react';
import Context from './Context';
import PropTypes from 'prop-types';


function Provider({children}) {
    const [bookings, setBookings] = useState([]);

    const contextValue = {
        bookings,
        setBookings,
    }

    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    )
}

Provider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Provider;