import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withStyles} from 'material-ui'
import {AppBar, Toolbar, Typography, Button, IconButton} from 'material-ui'
import MenuIcon from 'material-ui-icons/Menu'
import {SplitToSpans} from '../../../utils'
import {toggleDrawer} from '../actions.js'

const drawerWidth = 250

const styles = (theme) => ({
  flex: {
    flex: 1,
  },
  navIconButton: {
    marginRight: 20,
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  header: {
    position: 'fixed',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
})

const Header = ({classes, toggleDrawer}) => (
  <AppBar color="default" className={classes.header}>
    <Toolbar>
      <IconButton className={classes.navIconButton} onClick={toggleDrawer}>
        <MenuIcon />
      </IconButton>
      <Typography className={classes.flex} type="title" color="inherit">
        <SplitToSpans words="Rh ae go" />
      </Typography>
      <Button>Login</Button>
    </Toolbar>
  </AppBar>
)

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
}

const mapState = (state, ownProps) => {
  return {
    drawerIsOpen: state.header.drawerIsOpen
  }
}

const mapDispatch = (dispatch, ownProps) => ({
  toggleDrawer: () => dispatch(toggleDrawer())
})

const HeaderWrap = connect(mapState, mapDispatch)(Header)

export default withStyles(styles)(HeaderWrap)