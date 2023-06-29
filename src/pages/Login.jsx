import React, { useState } from 'react';
import {
  // Backdrop,
  Button,
  Dialog,
  DialogTitle,
  Grid,
  Typography,
  styled,
} from '@mui/material';
// import CircularProgress from '@mui/material/CircularProgress';
import { EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';
// import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router';
import { SectionWrapper } from '../hoc';
import { StyledFirebaseAuth } from '../components/';
import { auth } from '../firebase';
import 'firebaseui/dist/firebaseui.css';

const TitleGrid = styled(Grid)(() => ({
  marginTop: 300,
}));

const LoginGrid = styled(Grid)(() => ({
  marginTop: 50,
}));

const redirect = '/dashboard';

const Login = () => {
  // const [, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);

  const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      EmailAuthProvider.PROVIDER_ID,
      GoogleAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => navigate(redirect),
    },
  };

  const handleDialog = () => {
    setOpenDialog(!openDialog);
  };

  // useEffect(() => {
  //   console.log({ loading });
  // }, [loading]);

  return (
    <Grid
      container
      direction='column'
      justifyContent='center'
      alignItems='center'
    >
      <TitleGrid item>
        <Typography variant='h2'>Best Expense Tracker ever!</Typography>
        <Typography variant='h5'>
          Add, view, edit and delete expenses
        </Typography>
      </TitleGrid>
      <LoginGrid item>
        <Button variant='contained' onClick={handleDialog}>
          <Typography variant='h4'>Login / Register</Typography>
        </Button>
        <Dialog open={openDialog} onClose={handleDialog}>
          <DialogTitle variant='h3'>Login / Register </DialogTitle>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
        </Dialog>
      </LoginGrid>
      {/* 
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color='inherit' />
      </Backdrop> */}
    </Grid>
  );
};

const LoginHOC = SectionWrapper(Login);

export default LoginHOC;
