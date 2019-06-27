import React, {Fragment} from 'react'
import {Typography, ListItem, Divider, ListItemIcon, withMobileDialog, IconButton, Dialog, makeStyles, Grid, Card, CardMedia, CardActionArea, CardContent } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import Lens from '@material-ui/icons/Lens';
import styled from "styled-components";
import { Consumer } from '../context';

const Pests = (props) => {
  const classes = styles(),
    { fullScreen } = props,
    { mainGrid, gridItem, cardStyle, cardTitle, media, caption } = classes;
 
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

    {({pests}) => 
      <Grid container className={mainGrid}>
        {Object.keys(pests).map((index, key) => {
          let name = pests[index].name
          let img = name.replace(/ /g,"_");
          
          return <Grid item xs={6} className={gridItem} key={key}>
            <Card className={cardStyle}>
              <CardActionArea onClick={() => handleClickOpen(index)}>
                <CardMedia image={require(`../Assets/${img}.jpg`)} className={media}/>
                <CardContent>
                  <Typography gutterBottom className={cardTitle} variant="h5" component="h2">
                    {pests[index].name}
                  </Typography>
                  <Typography variant="body2" className={caption} component="p">
                    {pests[index].description}
                </Typography>
                </CardContent>
              </CardActionArea>  
            </Card>
          </Grid>
        })}

        {/* Modal Element */}
        <PestDialog 
          open={open}
          fullScreen={fullScreen}
          maxWidth="md"
          onClose={handleClose} 
          classes={classes}
          data={pests[selectedId]} 
        />
    </Grid>
  }
  </Consumer>
};

// Modal Window
const PestDialog = (props) => {
  
  if (props.data) {

    const { classes, onClose, ...other } = props,
          {name, controls} = props.data;

    const handleClose = () => {
      onClose();
    };

    let bullets = controls.split('.');

    const displayBullets = () => {
      return <Fragment>
        {Object.keys(bullets).map((index, key) => {
          return <ListItem key={key}>
            <ListItemIcon style={{marginBottom: 10}}>
              <Lens className={props.classes.bullet}/>
            </ListItemIcon>  
            <Typography gutterBottom className={classes.paragraph}>
              {bullets[index]}
            </Typography>
          </ListItem>
        })}
      </Fragment>
    };
    
    return (
      <Dialog onClose={handleClose} {...other}>
        <DialogTitle onClose={handleClose} classes={classes}>
          <Bold style={{fontFamily: "\"Libre Franklin\", sans-serif"}}>{name}</Bold>
        </DialogTitle>
        <MuiDialogContent dividers>           
          <Typography gutterBottom className={classes.paragraph}>
            Try these methods to prevent damage to your crop:
          </Typography>
          <Divider />
          <br />
          {displayBullets()}
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
        <IconButton className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle> 
  );
};

/* CSS */

const Bold = styled.span`
  font-weight: bold;
  color: #f3f3ee;
`;

const styles = makeStyles(theme => ({
  mainGrid:{
    marginTop: 50,
  },
  gridItem: {
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
      flexBasis: '100%',
      marginBottom: 0
    }
  },
  cardStyle: {
    maxWidth: 350,
    marginTop: 40,
    display: 'inline-block',
    [theme.breakpoints.down('md')]: {
      maxWidth: 310
    }
  },
  media: {
    height: 220,
    paddingTop: '50%'
  },
  cardTitle:{
    color: 'black',
    "fontFamily": "\"Cinzel\", serif",
    fontWeight: 'bold',
  },
  caption: {
    color: 'black', 
    textAlign: 'left',
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
    color: '#fff',
  },
  paragraph: {
    fontFamily: "\"Libre Franklin\", sans-serif", 
    fontSize: 18,
  },
  bullet: {
    color: '#5d9aaf',
    width: 10,
    height: 10 
  },
}))

export default withMobileDialog({breakpoint: 'xs'})(Pests);