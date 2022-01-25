import React from "react";
import ReactPlayer from "react-player";
import ReactDOM from "react-dom";

const Player = () => {
	const ref = React.createRef()
	return (
  	<div>
      <ReactPlayer
        ref={ref}
        url='http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'
        playing
        controls
        config={{ file: { attributes: { id: 'audio-element' }}}}
        width='320px'
        height='180px'
      />
      <button onClick={() => ref.current.seekTo(10)}>Seek to 00:10</button>
    </div>
  )
}


ReactDOM.render(
  <Player />,
  document.getElementById('container')
);
export default Player