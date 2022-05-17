import React from 'react';
import { useHistory } from "react-router-dom";
const { ipcRenderer } = window.require("electron");

function Home(props) {
  const history = useHistory()
  const openNewWindow = () => {
    ipcRenderer.send('openChildWindow', 'rgb')
    return
  }

  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => history.push({ pathname: "/colorpage", state: "Green" })}>Green</button>
      <button onClick={() => history.push({ pathname: "/colorpage", state: "Blue" })}>Blue</button>
      <button onClick={() => history.push({ pathname: "/showvideo", state: "ShowVideo" })}>Show Video</button>
      <button onClick={openNewWindow}>Open new Window</button>
    </div>
  );
}

export default Home;
