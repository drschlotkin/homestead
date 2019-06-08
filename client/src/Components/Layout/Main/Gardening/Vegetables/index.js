import React from 'react'
import {Typography, IconButton, Dialog, Grid, Card, CardContent, CardActionArea, makeStyles, CardMedia } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import styled from "styled-components";

export default ({vegetables}) => {
  
  const classes = styles(),
  { mainGrid, cardStyle, media, cardTitle } = classes;

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

  return (
    <Grid container className={mainGrid}>
      {Object.keys(vegetables).map((index, key) => {
        return (
          <Grid item xs key={key}>
            <Card className={cardStyle}>
              <CardActionArea onClick={() => handleClickOpen(index)}>
                <CardMedia image={require(`../Assets/${vegetables[index].name}.png`)} className={media}/>
                <CardContent>
                  <Typography gutterBottom className={cardTitle} variant="h5" component="h2">
                    {vegetables[index].name}
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
        onClose={handleClose} 
        vegetables={vegetables} 
        classes={classes}
        data={vegetables[selectedId]} 
      />
    </Grid>
  );
};


// Modal Window
const VegetableDialog = (props) => {
  if (props.data){
    const { classes, onClose, ...other } = props,
    {name, description, start, harvest} = props.data
  
    function handleClose() {
      onClose();
    };
  
    return (
      <Dialog onClose={handleClose} aria-labelledby="title" {...other}>
        <DialogTitle id="title" onClose={handleClose} classes={classes}>
          <Bold>{name}</Bold>
        </DialogTitle>
        <MuiDialogContent dividers>
          <Typography gutterBottom>
            <Bold> Description: </Bold>{description} 
          </Typography>
          <Typography gutterBottom>
          <br /><Bold>When To Plant: </Bold> {start} 
          </Typography>
          <Typography gutterBottom>
          <br /><Bold>Harvesting & Storage: </Bold>{harvest}
          </Typography>
        </MuiDialogContent>
      </Dialog>
    );
  }else{
    return null;
  };
};

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

// Styles

const Bold = styled.span`
  font-weight: bold;
`;

const styles = makeStyles(theme => ({
  mainGrid:{
    marginTop: 50,
    marginLeft: 10,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0
    }
  },
  cardStyle: {
    maxWidth: 185,
    [theme.breakpoints.down('sm')]: {
      maxWidth: 120,
      maxHeight: 120,
      marginBottom: 3,
      marginRight: 3
    }
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
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}))