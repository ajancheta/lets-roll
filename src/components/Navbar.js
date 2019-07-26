import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({

  root: {
    backgroundColor: '#4C8A8E',
    boxShadow: 'none',
    fix: 'absolute',
    position: 'fixed',
    zIndex: '1',
    float: 'none',
    fontFamily: 'Montserrat',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  homeButton: {
    marginLeft: '91%',
    textTransform: 'uppercase',
    fontSize: '20px',
    lineHeight: '18px',
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.root}>
        <Toolbar>

          <IconButton 
          edge="start" 
          className={classes.menuButton} 
          color="inherit"
          ref={anchorRef}
          aria-controls="menu-list-grow"
          aria-haspopup="true"
          onClick={handleToggle}
          >
            <MenuIcon />
          </IconButton>

        <Popper open={open} anchorEl={anchorRef.current} keepMounted transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper id="menu-list-grow">
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList>
                    <MenuItem onClick={handleClose}>About</MenuItem>
                    <MenuItem onClick={handleClose}>Getting Started</MenuItem>
                    <MenuItem onClick={handleClose}>Locations</MenuItem>
                    <MenuItem onClick={handleClose}>Map</MenuItem>
                    <MenuItem onClick={handleClose}>Comments</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          
          <Typography color="inherit" variant="p" className={classes.homeButton}>
            Let's Roll
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}