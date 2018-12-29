import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Menu, MenuItem } from '@material-ui/core';
import { Link } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';

const styles = {
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  toolbarButtons: {
    marginLeft: 'auto',
  },
};

class ButtonAppBar extends Component {

  state = {
    anchorEl: null,
  }

  handleSocial = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div>
        <AppBar position="static"className="appbar-color">
          <Toolbar>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <IconButton className={classes.menuButton} disabled={false} color="inherit" aria-label="Menu">
                <HomeIcon />
              </IconButton>
            </Link>
            <div className={classes.toolbarButtons}>
              <Link to='/piano' style={{ textDecoration: 'none' }}>
                <Button color="inherit">Piano</Button>
              </Link>
              <Link to='/code' style={{ textDecoration: 'none' }}>
                <Button color="inherit">Code</Button>
              </Link>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);

