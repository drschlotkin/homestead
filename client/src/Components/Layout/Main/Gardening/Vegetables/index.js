import React from 'react'
import {Typography, IconButton, Dialog, Grid, Card, CardContent, CardActionArea, makeStyles, CardMedia } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';

export default () => {
  const classes = styles(),
  { mainGrid, cardStyle, media, cardTitle } = classes

  // Dialog functionality
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState();

  function handleClickOpen() {
    setOpen(true); 
  }

  const handleClose = value => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <Grid container className={mainGrid}>
      <Grid item xs>
        <Card className={cardStyle}>
          <CardActionArea onClick={handleClickOpen}>
            <CardMedia image={require('../Assets/carrot.png')} className={media}/>
            <CardContent>
              <Typography gutterBottom className={cardTitle} variant="h5" component="h2">
                Carrot
              </Typography>
            </CardContent>
          </CardActionArea>  
        </Card>
      </Grid>

      {/* Modal Element */}
      <VegetableDialog selectedValue={selectedValue} open={open} onClose={handleClose} classes={classes} />
    </Grid>
    
  )
}

// Modal Window
const VegetableDialog = (props) => {
  const { classes, onClose, selectedValue, ...other } = props;
  
  function handleClose() {
    onClose(selectedValue);
  }

  return (
    
    <Dialog onClose={handleClose} aria-labelledby="title" {...other}>
      <DialogTitle id="title" onClose={handleClose} classes={classes}>
        Carrot
      </DialogTitle>
      <MuiDialogContent dividers>
            <Typography gutterBottom>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
              facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
              at eros.
            </Typography>
            <Typography gutterBottom>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
              lacus vel augue laoreet rutrum faucibus dolor auctor.
            </Typography>
            <Typography gutterBottom>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
              scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
              auctor fringilla.
            </Typography>
          </MuiDialogContent>
    </Dialog>
  );
}

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

const styles = makeStyles(theme => ({
  mainGrid:{
    marginTop: 50,
    marginLeft: 20
  },
  cardStyle: {
    maxWidth: 185
  },
  media: {
    paddingTop: '25%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
    width: 100,
    height: 100
  },
  cardTitle:{
    color: 'black',
    "fontFamily": "\"Cinzel\", serif",
    fontWeight: 'bold',
  },
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}))