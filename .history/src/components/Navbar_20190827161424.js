import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuList from '@material-ui/core/MenuList';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import NavLinks from './NavLinks';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none',
    backgroundColor: '#fff',
    color: '#4C8A8E',
    position: 'fixed',
    margin: '0',
    zIndex: '1',
    float: 'none',
    fontFamily: 'Montserrat',
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  homeButton: {
    textTransform: 'uppercase',
    fontSize: '16px',
    lineHeight: '3px',
    letterSpacing: '1px',
  },
  clicked: {
    color: '#4C8A8E',
    textDecoration: 'none',
    '&:hover': {
      color: '#4C8A8E',
    },
    '&:active': {
      color: '#4C8A8E',
    },
  },
  list: {
    height: '100%',
    backgroundColor: '#4C8A8E',
    color: '#fff',
    textTransform: 'uppercase',
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [state,setState] = React.useState ({
    left: false
  })
  
  const toggleDrawer = (side, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
  }
  setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {[
          <NavLinks />
        ].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  
  return (
    <div className={classes.root}>
      <AppBar className={classes.root}>
        <Toolbar>
          <Grid item xs={9}>
            <IconButton 
            // edge="start" 
            className={classes.menuButton} 
            color="inherit"
            onClick={toggleDrawer('left', true)}
            >
              <MenuIcon />
            </IconButton>
          </Grid>

          <Grid item xs={3}>
            <Typography 
            color="inherit" 
            variant="p" 
            className={classes.homeButton}
            >
              Let's Ro<em>ll</em>
            </Typography>
          </Grid>

          <SwipeableDrawer
            open={state.left}
            onClose={toggleDrawer('left', false)}
            onOpen={toggleDrawer('left', true)}
          >
            {sideList('left')}
          </SwipeableDrawer>
        </Toolbar>
      </AppBar>
    </div>
  );
}