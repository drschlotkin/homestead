import React from 'react';
import {AppBar, Toolbar, withStyles, Grid, IconButton, Typography, Button, Slide } from '@material-ui/core/';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';


const styles = theme => ({
  appBar:{
    backgroundColor: "transparent",
    boxShadow: 'none'
  },
  grow: {
    flexGrow: 1,
  },
})

const HideOnScroll = (props) => {
  const trigger = useScrollTrigger({ target: undefined });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {props.children}
    </Slide>
  )
}

const Header = props => {
  const {appBar, grow} = props.classes;
  return (
    <Grid component="div">
      <HideOnScroll {...props}>
        <AppBar className={appBar}>
          <Toolbar>
          <div className={grow} />
          <Button disableRipple>
            About
          </Button>
          <Button disableRipple>
            Contact
          </Button>
          <Button disableRipple>
            Resources
          </Button>
        
          </Toolbar>
        </AppBar>
      </HideOnScroll>
  </Grid>
  )
}

export default withStyles(styles)(Header)