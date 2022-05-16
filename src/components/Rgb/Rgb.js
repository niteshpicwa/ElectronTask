
import React, { useState, useEffect } from 'react';
import { useDispatch} from "react-redux";
const { ipcRenderer } = window.require("electron");

function ColoredPage(props) {
    const dispatch = useDispatch();
    const [colorOne, setColorOne] = useState('');
    const [colorTwo, setColorTwo] = useState('');
    const [colorThree, setColorThree] = useState('');
    const handleChangeOne = (event) => {
        if (isNaN(event.target.value) || event.target.value > 255) return 
        setColorOne(event.target.value)
        dispatch({ type: 'Rgbdisplay_Success', payload: { red: event.target.value } })
    }

    const handleChangeTwo = (event) => {
        if (isNaN(event.target.value) || event.target.value > 255) return 
        setColorTwo(event.target.value)
        dispatch({ type: 'Rgbdisplay_Success', payload: { green: event.target.value } })
    }

    const handleChangeThree = (event) => {
        if (isNaN(event.target.value) || event.target.value > 255) return 
        setColorThree(event.target.value)
        dispatch({ type: 'Rgbdisplay_Success', payload: { blue: event.target.value } })
    }

    return (
        <div>
            <input type="text" onChange={handleChangeOne} value={colorOne}></input>
            <input type="text" onChange={handleChangeTwo} value={colorTwo}></input>
            <input type="text" onChange={handleChangeThree} value={colorThree}></input>
            <br/>
            <button onClick={() => (colorOne && colorTwo && colorThree) ? ipcRenderer.send('openChildWindow', 'rgbdisplay') : null }>Show Color</button>

        </div>
    );
}

export default ColoredPage;
