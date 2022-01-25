import axios from 'axios'
import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
// import ReactPlayer from '../index'
import ReactPlayer from 'react-player'
// import Adv from './Adv'

export class VideoClass extends Component {
    
    state = {
        // url: null,
        url: 'https://www.youtube.com/watch?v=6lt2JfJdGSY',
        pip: false,
        playing: true,
        controls: false,
        light: false,
        volume: 0.8,
        muted: false,
        played: 0,
        loaded: 0,
        duration: 0,
        playbackRate: 1.0,
        loop: false,
        timeStart: null,
        timeStop:null,
        isDisabled: true,
        stream: 'news',
        // adv 
        name: '',
        category: '',
        subCategory: '',
        caption:'',
      }
      // load = url => {
      //   this.setState({
      //     url,
      //     played: 0,
      //     loaded: 0,
      //     pip: false
      //   })
      // }
    
      handlePlayPause = () => {
        this.setState({ playing: !this.state.playing })
      }
    
      handleStop = () => {
        this.setState({ url: "https://www.youtube.com/watch?v=6lt2JfJdGSY", playing: false })
      }
    
      // handleToggleControls = () => {
      //   const url = this.state.url
      //   this.setState({
      //     controls: !this.state.controls,
      //     url: null
      //   }, () => this.load(url))
      // }
    
    
      handleVolumeChange = e => {
        this.setState({ volume: parseFloat(e.target.value) })
      }
    
      handleSetPlaybackRate = e => {
        this.setState({ playbackRate: parseFloat(e.target.value) })
      }
    
      handleOnPlaybackRateChange = (speed) => {
        this.setState({ playbackRate: parseFloat(speed) })
      }
    
      handleTogglePIP = () => {
        this.setState({ pip: !this.state.pip })
      }
    
      handlePlay = () => {
        console.log('onPlay')
        this.setState({ playing: true })
        
      }
      handleEnablePIP = () => {
        console.log('onEnablePIP')
        this.setState({ pip: true })
      }
    
      handleDisablePIP = () => {
        console.log('onDisablePIP')
        this.setState({ pip: false })
      }
    
      handlePause = () => {
        console.log('onPause')
        this.setState({ playing: false })
      }
    
      handleSeekMouseDown = e => {
        this.setState({ seeking: true })
      }
    
      handleSeekChange = e => {
        this.setState({ played: parseFloat(e.target.value) })
      }
    
      handleSeekMouseUp = e => {
        this.setState({ seeking: false })
        this.player.seekTo(parseFloat(e.target.value))
      }
    
      handleProgress = e => {
        console.log('onProgress', e.playedSeconds)
        // We only want to update time slider if we are not currently seeking
        if (!this.state.seeking) {
          this.setState(e)
        }
      }
    
      handleEnded = () => {
        console.log('onEnded')
        this.setState({ playing: this.state.loop })
      }
    
      handleDuration = (duration) => {
        console.log('onDuration', duration)
        this.setState({ duration })
      }
    
      // handleClickFullscreen = () => {
      //   screenfull.request(findDOMNode(this.player))
      // }
     submitHandler= (e) => {
       e.preventDefault()
       console.log("hii",this.state);
       axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
			.then(response => {
				console.log('response',response)
			})
			.catch(error => {
				console.log(error)
			})
     }
      handleClickStart = () => {
        console.log("ClipStart", this.state.playedSeconds);
        this.setState({
          timeStart: this.state.playedSeconds
        })  
      }
      handleClickStop = (e) => {
        console.log("ClipStop", this.state.playedSeconds);
        this.setState({
          timeStop: this.state.playedSeconds,
          isDisabled: false
        })
      //        if(this.timeStart > this.timeStop ){
      //     alert('Given date is greater than the current date.');
      // }else{
      //     alert('Given date is not greater than the current date.');
      // }
      }
    
      handleRadioChange = (e)=> {
        console.log('radio',e.target.value );
        // set the new value of checked radion button to state using setState function which is async funtion
      this.setState({
        stream: e.target.value
        // stream:this.state.value
      });
    }


      getDate = () => {
        var date = new Date().toDateString();
        this.setState({ date });
      };
      // renderLoadButton = (url, label) => {
      //   return (
      //     <button onClick={() => this.load(url)}>
      //       {label}
      //     </button>
      //   )
      // }
    
      ref = player => {
        this.player = player
      }

      // adv 
      changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
      }
      
      render () {
        const { url, playing, controls, light, volume, muted, played, playbackRate, pip, category,subCategory, caption,name} = this.state
        // const SEPARATOR = ' · '
       
    
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
                  playbackRate={playbackRate}
                  volume={volume}
                  muted={muted}
                  onReady={() => console.log('onReady')}
                  onStart={() => console.log('onStart')}
                  onPlay={this.handlePlay}
                  // onEnablePIP={this.handleEnablePIP}
                  // onDisablePIP={this.handleDisablePIP}
                  onPause={this.handlePause}
                  onBuffer={() => console.log('onBuffer')}
                  onPlaybackRateChange={this.handleOnPlaybackRateChange}
                  onSeek={e => console.log('onSeek', e)}
                  onEnded={this.handleEnded}
                  onError={e => console.log('onError', e)}
                  onProgress={this.handleProgress}
                  onDuration={this.handleDuration}
                />
              </div>
    
              <table>
                <tbody>
                  <tr>
                    <th>Controls</th>
                    <td>
                      {/* <button onClick={this.handleStop}>Stop</button> */}
                      <button onClick={this.handlePlayPause}>{playing ? 'Pause' : 'Play'}</button>
                      {/* <button onClick={this.handleClickFullscreen}>Fullscreen</button> */}
                     
                      {light &&
                        <button onClick={() => this.player.showPreview()}>Show preview</button>}
                      {ReactPlayer.canEnablePIP(url) &&
                        <button onClick={this.handleTogglePIP}>{pip ? 'Disable PiP' : 'Enable PiP'}</button>}
                    </td>
                  </tr>
                  <tr>
                    <th>Speed</th>
                    <td>
                      <button onClick={this.handleSetPlaybackRate} value={1}>1x</button>
                      <button onClick={this.handleSetPlaybackRate} value={1.5}>1.5x</button>
                      <button onClick={this.handleSetPlaybackRate} value={2}>2x</button>
                    </td>
                  </tr>
                   <tr>
                    <th>Seek</th>
                    <td>
                      <input
                        type='range' min={0} max={0.999999} step='any'
                        value={played}
                        onMouseDown={this.handleSeekMouseDown}
                        onChange={this.handleSeekChange}
                        onMouseUp={this.handleSeekMouseUp}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <div>
              <form onSubmit={this.submitHandler}>
            <div>
          <button onClick={this.handleClickStart}>Clip Start</button>
          <button onClick={this.handleClickStop} >Clip Stop</button>
          </div>
          <button type='submit'  disabled={this.state.isDisabled} >Submit</button>
          </form>

          <div check>
          <input type="radio" value="adv" name="Advbutton" checked={this.state.stream === "adv"}  onChange={this.handleRadioChange}/> Adv
         <input type="radio" value="news" name="Newsbutton"  checked={this.state.stream === "news"}  onChange={this.handleRadioChange} /> News
         <input type="radio" value="program" name="Programbutton" checked={this.state.stream === "program"}  onChange={this.handleRadioChange}/> Program 
         </div>

         </div>
         <form onSubmit={this.submitHandler}>
                <div>
                   Brand Name <input
							type="text"
							name="name"
							value={name}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
                    Category <input
							type="text"
							name="category"
							value={category}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
					SubCategory	<input
							type="text"
							name="subCategory"
							value={subCategory}
							onChange={this.changeHandler}
						/>
					</div>
                    <div>
						Captions<input
							type="text"
							name="caption"
							value={caption}
							onChange={this.changeHandler}
						/>
					</div>
                   
					{/* <button type="submit">Submit</button> */}
				</form>
            </section>
            {/* <Adv  ></Adv> */}
          
          </div>
        )
      }
}

// export default Controls
export default hot(module)(VideoClass)
