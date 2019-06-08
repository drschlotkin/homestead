import React, {Fragment} from 'react'
import {Typography, makeStyles, Paper } from '@material-ui/core'

export default () => {
  const classes = styles();
  return (
    <Fragment>
      <Paper>
        <Typography className={classes.heading} variant="h3" >
          Welcome to da soil section
        </Typography>
      </Paper>
    </Fragment>
   
  )
}

const styles = makeStyles(() => ({
  heading: {
    marginTop: 50,

    fontFamily: "\"IM Fell DW Pica SC\", serif",
    
    // "fontFamily": "\"Cinzel\", serif",
    // "fontFamily": "\"Linden Hill\", serif",
    // "fontFamily": "\"Mouse Memoirs\", sans-serif",
    // "fontFamily": "\"Raleway\", sans-serif",
    // "fontFamily": "\"Muli\", sans-serif",
    // "fontFamily": "\"Sorts Mill Goudy\", serif",
    //  "fontFamily": "\"Cormorant\", serif"
  },
  
}))