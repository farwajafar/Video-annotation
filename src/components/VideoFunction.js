import React,{useState} from 'react'
import { hot } from 'react-hot-loader'
// import ReactPlayer from '../index'
import ReactPlayer from 'react-player'

export function Controls() {
    const [ url, setUrl] = useState('https://www.youtube.com/watch?v=6lt2JfJdGSY');
    const [playing,setPlaying]= useState(true)
    const [controls,setControls]= useState(false)
    const [pip,setPip]= useState(false)
    const [light,setLight]= useState(false)
    const [volume,setVolume]= useState(0.8)
    const [muted,setMuted]= useState(false)
    const [played,setPlayed]= useState(0)
    const [loaded,setLoaded]= useState(0)
    const [duration,setDuration]= useState(0)
    const [playbackRate,setPlaybackRate]= useState(1.0)
    const [loop,setLoop]= useState(false)
    
    
  
      // load = url => {
      //   this.setState({
      //     url,
      //     played: 0,
      //     loaded: 0,
      //     pip: false
      //   })
      // }
    
     const handlePlayPause = () => {
        setPlaying({ playing })
      }
    
     const handleStop = () => {
        setUrl({ url: "https://www.youtube.com/watch?v=6lt2JfJdGSY", playing: false })
      }
    
    //  const handleToggleControls = () => {
    //     const url = this.state.url
    //     this.setState({
    //       controls: !this.state.controls,
    //       url: null
    //     }, () => this.load(url))
    //   }
    
    
    //  const handleVolumeChange = e => {
    //     this.setState({ volume: parseFloat(e.target.value) })
    //   }
    
    const  handleSetPlaybackRate = e => {
        setPlaybackRate:({ playbackRate: parseFloat(e.target.value) })
      }
    
    const  handleOnPlaybackRateChange = (speed) => {
        setPlaybackRate({ playbackRate: parseFloat(speed) })
      }
    
    const  handleTogglePIP = () => {
        setPip({ pip: !pip })
      }
    
     const handlePlay = () => {
        console.log('onPlay')
        setPlayed({ playing: true })
        
      }
     const handleEnablePIP = () => {
        console.log('onEnablePIP')
        setEnablePip({ pip: true })
      }
    
     const handleDisablePIP = () => {
        console.log('onDisablePIP')
        setDisablePip({ pip: false })
      }
    
    const  handlePause = () => {
        console.log('onPause')
        setPause({ playing: false })
      }
    
    const  handleSeekMouseDown = e => {
        setSeekMouseDown({ seeking: true })
      }
    
     const handleSeekChange = e => {
        setSeekChange({ played: parseFloat(e.target.value) })
      }
    
    const  handleSeekMouseUp = e => {
        setSeekMouseUp({ seeking: false })
        // this.player.seekTo(parseFloat(e.target.value))
        seekTo(parseFloat(e.target.value))
      }
    
     const handleProgress = progress => {
        console.log('onProgress', progress)
        // We only want to update time slider if we are not currently seeking
        if (!seeking) {
        setProgress(progress)
        }
      }
    
     const handleEnded = () => {
        console.log('onEnded')
        setEnded({ playing: loop })
      }
    
    const  handleDuration = (duration) => {
        console.log('onDuration', duration)
        setDuration({ duration })
      }
    
      // handleClickFullscreen = () => {
      //   screenfull.request(findDOMNode(this.player))
      // }
     const handleClickSubmit = (e) => {
        //   e.preventDefault();
        console.log("submited");
//         fetch("http://localhost:8000/blogs",{
//             method: "POST",
//             headers: {'Content-Type' : 'Application/json'},
//             body: JSON.stringify(blog)
//         }).then ((  ) =>{
// console.log("newblog aadded");
//             }
//         )
      }
    
      renderLoadButton = (url, label) => {
        return (
          <button onClick={() => load(url)}>
            {label}
          </button>
        )
      }
    
      ref = player => {
        this.player = player
      }
      
      
        // const { url, playing, controls, light, volume, muted, loop, played, loaded, duration, playbackRate, pip } = this.state
        // const SEPARATOR = ' · '

        // axios({
        //     method: 'post',
        //     url: '/Controls',
        //     data: {
        //       firstName: 'Finn',
        //       lastName: 'Williams'
        //     }
        //   });
    
        return (
          <div className='controls'>
            <section className='section'>
              <h1>ReactPlayer Demo</h1>
              <div className='player-wrapper'>
                <ReactPlayer
                  ref={this.ref}
                  className='react-player'
                  width='100%'
                  height='100%'
                  url={url}
                  pip={pip}
                  playing={playing}
                  controls={controls}
                  light={light}
                  loop={loop}
                  playbackRate={playbackRate}
                  volume={volume}
                  muted={muted}
                  onReady={() => console.log('onReady')}
                  onStart={() => console.log('onStart')}
                  onPlay={handlePlay}
                  onEnablePIP={handleEnablePIP}
                  onDisablePIP={handleDisablePIP}
                  onPause={handlePause}
                  onBuffer={() => console.log('onBuffer')}
                  onPlaybackRateChange={handleOnPlaybackRateChange}
                  onSeek={e => console.log('onSeek', e)}
                  onEnded={handleEnded}
                  onError={e => console.log('onError', e)}
                  onProgress={handleProgress}
                  onDuration={handleDuration}
                />
              </div>
    
              <table>
                <tbody>
                  <tr>
                    <th>Controls</th>
                    <td>
                      <button onClick={handleStop}>Stop</button>
                      <button onClick={handlePlayPause}>{playing ? 'Pause' : 'Play'}</button>
                      {/* <button onClick={this.handleClickFullscreen}>Fullscreen</button> */}
                      <button onClick={handleClickSubmit}>Submit</button>
                      {light &&
                        <button onClick={() => this.player.showPreview()}>Show preview</button>}
                      {ReactPlayer.canEnablePIP(url) &&
                        <button onClick={handleTogglePIP}>{pip ? 'Disable PiP' : 'Enable PiP'}</button>}
                    </td>
                  </tr>
                  <tr>
                    <th>Speed</th>
                    <td>
                      <button onClick={handleSetPlaybackRate} value={1}>1x</button>
                      <button onClick={handleSetPlaybackRate} value={1.5}>1.5x</button>
                      <button onClick={handleSetPlaybackRate} value={2}>2x</button>
                    </td>
                  </tr>
                   <tr>
                    <th>Seek</th>
                    <td>
                      <input
                        type='range' min={0} max={0.999999} step='any'
                        value={played}
                        onMouseDown={handleSeekMouseDown}
                        onChange={handleSeekChange}
                        onMouseUp={handleSeekMouseUp}
                      />
                    </td>
                  </tr>
                  {/*
                  <tr>
                    <th>Volume</th>
                    <td>
                      <input type='range' min={0} max={1} step='any' value={volume} onChange={handleVolumeChange} />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <label htmlFor='controls'>Controls</label>
                    </th>
                    <td>
                      <input id='controls' type='checkbox' checked={controls} onChange={handleToggleControls} />
                      <em>&nbsp; Requires player reload</em>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <label htmlFor='muted'>Muted</label>
                    </th>
                    <td>
                      <input id='muted' type='checkbox' checked={muted} onChange={handleToggleMuted} />
                    </td>
                  </tr>
                   */}
                </tbody>
              </table>
              <div>
         <input type="radio" value="Adv" name="button" /> Adv
         <input type="radio" value="News" name="button" /> News
         <input type="radio" value="Program" name="button" /> Program 
         </div>
            </section>
          
          </div>
        )
        
      }


// export default Controls
export default hot(module)(Controls)
