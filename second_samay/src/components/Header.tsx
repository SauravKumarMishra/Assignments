import {
  AppBar,
  createStyles,
  IconButton,
  makeStyles,
  Theme,
  Toolbar,
  Typography,
  Switch,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  })
);

interface IProps {
  darkMode: boolean;
  setDarkMode: any;
}

const Header: React.FC<IProps> = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static' color='secondary'>
        <Toolbar variant='dense'>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' color='inherit'>
            SAMAY
          </Typography>
          <Switch
            checked={props.darkMode}
            onChange={() => props.setDarkMode(!props.darkMode)}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
