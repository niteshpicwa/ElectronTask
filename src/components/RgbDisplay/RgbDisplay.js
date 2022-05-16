
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function RgbDisplay(props) {
    const {red, green, blue} = useSelector(state => state.RgbDisplayReducer);
    return (
        <div>
            <h1 style={{ 'backgroundColor': `rgb(${red}, ${green}, ${blue})` }}>rgb(255, 0, 0)</h1>
        </div>
    );
}

export default RgbDisplay;
