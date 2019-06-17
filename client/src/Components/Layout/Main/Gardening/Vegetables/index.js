import React from 'react'
import {Typography, IconButton, withMobileDialog, Dialog, Grid, Card, CardContent, CardActionArea, makeStyles, CardMedia } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import styled from "styled-components";
import { Consumer } from '../context'


const Vegetables = (props) => {
  const classes = styles(),
    { fullScreen } = props,
    { mainGrid, cardStyle, media, cardTitle, gridItem } = classes;

  // Dialog functionality
  const [open, setOpen ] = React.useState(false);

  const [selectedId, setSelectedId] = React.useState(null);

  const handleClickOpen = (id) => {
    setSelectedId(id)
    setOpen(true); 
  };

  const handleClose = () => {
    setOpen(false);
  };

  return <Consumer>

    {({vegetableData, vegetableNames}) => 
      <Grid container className={mainGrid} >

      {/* Display vegetable icons */}
        {vegetableNames.map((name, key) => {
           {/* change xs to 3 ? */}
          return (
            <Grid item xs={6} lg={2} key={key} className={gridItem}>
              <Card className={cardStyle} >
                <CardActionArea onClick={() => handleClickOpen(key)}>
                  <CardMedia image={require(`../Assets/${name}.png`)} className={media}/>
                  <CardContent>
                    <Typography gutterBottom className={cardTitle} variant="h5" component="h2">
                      {name}
                    </Typography>
                  </CardContent>
                </CardActionArea>  
              </Card>
            </Grid>
          );
        })};
       
      {/* Modal Element */}
      <VegetableDialog 
        open={open}
        fullScreen={fullScreen}
        onClose={handleClose}
        classes={classes}
        data={vegetableData[selectedId]}
      />
      </Grid>
    }
    </Consumer>
};


// Modal Window
const VegetableDialog = (props) => {
  if (props.data){
    const { classes, onClose, ...other } = props,
          {name, description, start, harvest} = props.data;
  
    function handleClose() {
      onClose();
    };
    
    return (
      <Dialog onClose={handleClose} {...other}>
        <DialogTitle onClose={handleClose} classes={classes}>
          <Bold style={{fontFamily: "\"Libre Franklin\", sans-serif", color: '#f3f3ee'}}>{name}</Bold>
        </DialogTitle>
        <MuiDialogContent dividers style={{backgroundColor: '#f3f3ee'}}>
          <Typography gutterBottom className={classes.paragraph}>
            <Bold>Description: </Bold>{description} 
          </Typography>
          <Typography gutterBottom className={classes.paragraph}>
            <br /><Bold>When To Plant: </Bold> {start} 
          </Typography>
          <Typography gutterBottom className={classes.paragraph}>
            <br /><Bold>Harvesting & Storage: </Bold>{harvest}
          </Typography>
        </MuiDialogContent>
      </Dialog>
    );
  }else{
    return null;
  };
};


/* Display modal title and close icon */
const DialogTitle = props => {
  const { children, classes, onClose } = props;
  
  return (
   <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="Close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle> 
  );
};


/* CSS */
const Bold = styled.span`
  font-weight: bold;
`;

const styles = makeStyles(theme => ({
  mainGrid:{
    marginTop: 50,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0
    }
  },
  gridItem:{
    width: '100%',
    padding: theme.spacing(1),
  },
  cardStyle: {
    maxWidth: 185,
    margin: '0 auto'
  },
  media: {
    paddingTop: '25%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
    width: 100,
    height: 100,
    [theme.breakpoints.down('sm')]: {
      width: 50,
      height: 50,
    }
  },
  cardTitle:{
    color: 'black',
    "fontFamily": "\"Cinzel\", serif",
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      fontSize: 15
    }
  },
  root: {
    margin: 0,
    padding: theme.spacing(2),
    backgroundColor: '#5d9aaf'
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: '#222222'
  },
  paragraph: {
    fontFamily: "\"Libre Franklin\", sans-serif", 
    fontSize: 18,
  }
}))

export default withMobileDialog()(Vegetables);