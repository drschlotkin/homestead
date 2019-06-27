import React from 'react'
import {Typography, withMobileDialog, IconButton, Divider, Dialog, makeStyles, Grid, Card, CardMedia, CardActionArea, CardContent } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import styled from "styled-components";
import { Consumer } from '../context';

const Soil = (props) => {
  
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

    {({soil}) => 
      <Grid container className={mainGrid}>
        {Object.keys(soil).map((index, key) => {
          let title = soil[index].title
          let img = title.replace(/ /g,"_");
          return <Grid item xs={6} className={gridItem} key={key}>
            <Card className={cardStyle}>
              <CardActionArea onClick={() => handleClickOpen(index)}>
                <CardMedia image={require(`../Assets/${img}.jpg`)} className={media}/>
                <CardContent>
                  <Typography gutterBottom className={cardTitle} variant="h5" component="h2">
                    {soil[index].title}
                  </Typography>
                  <Typography variant="body2" className={caption} component="p">
                    {soil[index].summary}
                </Typography>
                </CardContent>
              </CardActionArea>  
            </Card>
          </Grid>
        })}

        {/* Modal Element */}
        <SoilDialog 
          open={open}
          fullScreen={fullScreen}
          onClose={handleClose} 
          classes={classes}
          data={soil[selectedId]} 
        />
    </Grid>
  }
  </Consumer>
};

// Modal Window
const SoilDialog = (props) => {
  
  if (props.data){
    const { classes, onClose, ...other } = props,
          {title, introduction, body, closure} = props.data;
  
    function handleClose() {
      onClose();
    };
    
    return (
      <Dialog onClose={handleClose} {...other}>
        <DialogTitle onClose={handleClose} classes={classes}>
          <Title>{title}</Title>
        </DialogTitle>
        <MuiDialogContent dividers style={{backgroundColor: '#fafafa'}}>
          <br />
          <Typography gutterBottom className={classes.paragraph}>
            {introduction}
          </Typography>
          <Divider /><br />
          <Typography gutterBottom className={classes.paragraph}>
            {body}
          </Typography>
          <Divider /><br />
          <Typography gutterBottom className={classes.paragraph} dangerouslySetInnerHTML={{ __html: closure}}>
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
   <MuiDialogTitle disableTypography className={classes.root}  >
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

const Title = styled.span`
  font-family: Libre Franklin, sans-serif;
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
    maxWidth: 400,
    marginTop: 40,
    display: 'inline-block',
    [theme.breakpoints.down('md')]: {
      maxWidth: 310
    }
  },
  media: {
    height: 0,
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
    marginBottom: 15
  }
}))

export default withMobileDialog({breakpoint: 'xs'})(Soil);