import React, { useEffect, useState } from 'react';
const { ipcRenderer } = window.require("electron");

function ShowVideo(props) {
    const [videoPath, setVideoPath] = useState('');

    useEffect(() => {
        ipcRenderer.send('getFileName')
        ipcRenderer.on('getFileNameReply', (event, arg) => {
            setVideoPath(arg)
        })
    }, [])

    return (
        <div>
            <h1>Shoe Video</h1>
            {/* <button onClick={openNewWindow}>Open new Window</button> */}
            {videoPath ? <video width="400" controls>
                <source src={`file://${videoPath}`} type="video/mp4" />
                Your browser does not support HTML video.
            </video> : <p>Please select Video</p>}
        </div>
    );
}

export default ShowVideo;
