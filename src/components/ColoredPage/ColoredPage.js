import React from 'react';
import { useLocation } from "react-router-dom";

function ColoredPage(props) {
    const location = useLocation();
    return (
        <div>
            <h1>Colored page</h1>
            <h1>{location.state}</h1>
        </div>
    );
}

export default ColoredPage;
