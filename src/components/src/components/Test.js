import React from 'react';
import './App.css';
// import Video from './components/Video';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Button, Container, Grid, IconButton, Typography } from '@material-ui/core';
import ReactPlayer from 'react-player';
import { makeStyles } from '@material-ui/core';
import BookmarkIcon  from '@material-ui/icons/Bookmark';
import FastRewindIcon from '@material-ui/icons/FastRewind';
import FastForwardIcon  from '@material-ui/icons/FastForward';
import PlayArrowIcon  from '@material-ui/icons/PlayArrow';



const useStyles = makeStyles({
  playerWrapper:{
    widtth: '100%' ,
    position:'relative'
  },
  controlsWrapper:{
    position:'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0,0,0,0.6)',
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    zIndex:1,
    
  },
  controlIcons:{
    color: "black",
    fontSize:50,
    transform: 'scale(0.9)',
    '&:hover' : {
      color:'white',
      transform: 'scale(1)'
    }

  }

  }
)
function App() {
  
  const classes = useStyles()
  return (
   
      <>
      <AppBar  position='fixed'>
        <Toolbar>
        <Typography variant='h6'>
          Video Player
        </Typography>
        </Toolbar>   
      </AppBar>

      <Toolbar/>
        <Container maxWidth='md'>
          <div className={classes.playerWrapper}>
          <ReactPlayer
          width={'100%'}
          height= '100%'
          url='https://www.youtube.com/watch?v=6lt2JfJdGSY'
          muted={false}
          playing={true}
          />
         
         <div className={classes.controlsWrapper}>
            {/* top controls  */}
           <Grid container direction='row' alignItems='center' justifyContent='space-between' style={{padding:16}}>
              <Grid item>
                <Typography variant='h5' style={{color:'white'}}>Video Title</Typography>
              </Grid>
              <Grid item>
               <Button 
               variant='contained'
               color='primary'
               startIcon={<BookmarkIcon/> }
               >
                 Bookmark
               </Button>
              </Grid>
           </Grid>

           {/* Middle controls  */}
           <Grid container direction='row' alignItems='center' justify='center' >
             <IconButton className={classes.controlIcons} arial-label='reqind'>
               <FastRewindIcon fontSize='inherit'/>
             </IconButton>

             <IconButton className={classes.controlIcons} arial-label='reqind'>
               <PlayArrowIcon fontSize='inherit'/>
             </IconButton>

             <IconButton className={classes.controlIcons} arial-label='reqind'>
               <FastForwardIcon fontSize='inherit'/>
             </IconButton>
           </Grid>

           {/* bottom controls  */}
           <Grid container direction='row' alignItems='center' justify='space-between' style={{padding:16}}>
            </Grid>

         </div>
          </div>
        </Container>

      </>
  );
}

export default App;

