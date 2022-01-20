function PlayerComponent() {
    const [played, setPlayed] = useState(0);

  
    <ReactPlayer
     onProgress={(progress) => {
         setPlayed(progress.playedSeconds);
       }}
     />
  }