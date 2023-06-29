import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import {
  AppBar,
  Box,
  Container,
  CssBaseline,
  Drawer,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import { auth } from '../firebase';
import { clearUser } from '../features/user/userSlice';

const drawerWidth = 240;

const Header = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.user.user);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleLogout = () => {
    auth.signOut().then(() => {
      dispatch(clearUser());
      navigate('/');
    });
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component='nav'>
        <Container>
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='start'
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant='h3'
              component='div'
              sx={{ flexGrow: 1, display: { xs: 'block' }, fontWeight: 'bold' }}
            >
              Expense Tracker
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Grid
                container
                justifyContent='end'
                alignItems='center'
                spacing={2}
              >
                <Grid item>
                  <Typography variant='h6'>{authUser?.email}</Typography>
                </Grid>
                <Grid item>
                  <IconButton aria-label='logout' onClick={handleLogout}>
                    <LogoutIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component='nav'>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          <Grid container direction='column' spacing={2}>
            <Grid item>
              <Typography variant='h6'>{authUser?.email}</Typography>
            </Grid>
            <Grid item>
              <IconButton>
                <LogoutIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Drawer>
      </Box>
      <Toolbar />
    </Box>
  );
};

Header.propTypes = {
  window: PropTypes.func,
};

export default Header;
