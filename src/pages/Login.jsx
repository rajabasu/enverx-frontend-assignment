import React from 'react';
import { SectionWrapper } from '../hoc';
import { Button, Grid, Typography, styled } from '@mui/material';

const TitleGrid = styled(Grid)(() => ({
  marginTop: 300,
}));

const LoginGrid = styled(Grid)(() => ({
  marginTop: 50,
}));

const Login = () => {
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
        <Button variant='contained'>
          <Typography variant='h4'>Login / Register</Typography>
        </Button>
      </LoginGrid>
    </Grid>
  );
};

const LoginHOC = SectionWrapper(Login);

export default LoginHOC;
