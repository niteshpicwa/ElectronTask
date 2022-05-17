import React from 'react';
import { useLocation } from "react-router-dom";

function ColoredPage(props) {
    const location = useLocation();
    return (
        <div>
            <h1>Colored page</h1>
            <h1>{location.state}</h1>
            <canvas id="myCanvas" width="200" height="200" style={{ 'backgroundColor': `${location.state}` }} />
        </div>
    );
}

export default ColoredPage;
