import React from 'react'
// import { controls } from 'react-media-player'
import ReactPlayer from 'react-player'
// import video from '../assets/video.mp4'
import { Button } from '@material-ui/core';

function Video() {
    
    return (
        <div>
        <div>
             <ReactPlayer width='480' height= '240' controls url= 'https://www.youtube.com/watch?v=6lt2JfJdGSY' />
      {/* <video 
      controls 
      autostart 
      autoPlay 
      src={video} type="video/mp4"
      width='480'
      height= '240'

      onReady={()=>console.log('onReady CallBack')} 
      onStart={()=>console.log('onStart CallBack')} 
      onPause={()=>console.log('onPause CallBack')} 
      onEnded={()=>console.log('onEnded CallBack')} 
      onError={()=>console.log('onError CallBack')} 
      /> */}
      </div>
       <div >
      {/* <controls></controls> */}
      <div class="controls">
          <Button>Start</Button>
          <Button>Stop</Button>
          <Button>Submit</Button>
        
    </div>
     <input type="radio" value="Adv" name="button" /> Adv
     <input type="radio" value="News" name="button" /> News
     <input type="radio" value="Program" name="button" /> Program 
     </div>
      </div>
      
    )
}

export default Video
