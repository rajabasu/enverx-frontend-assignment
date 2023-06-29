import React from 'react';
import PropTypes from 'prop-types';
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

const drawerWidth = 240;

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component='nav'>
        <Container>
          <Toolbar sx={{ paddingTop: 2, paddingBottom: 2 }}>
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
                  <Typography variant='h6'>email@email.com</Typography>
                </Grid>
                <Grid item>
                  <IconButton aria-label='logout'>
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
              <Typography variant='h6'>email@email.com</Typography>
            </Grid>
            <Grid item>
              <IconButton>
                <LogoutIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Drawer>
      </Box>
      <Toolbar sx={{ paddingTop: 2, paddingBottom: 2 }} />
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
