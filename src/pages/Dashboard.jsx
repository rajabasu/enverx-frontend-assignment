import React from 'react';
import { useSelector } from 'react-redux';
import { Backdrop } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { SectionWrapper } from '../hoc';

const Dashboard = () => {
  const authUser = useSelector((state) => state.user.user);

  return !authUser ? (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={!authUser ? true : false}
    >
      <CircularProgress color='inherit' />
    </Backdrop>
  ) : (
    <div>Dashboard</div>
  );
};

const DashboardHOC = SectionWrapper(Dashboard);

export default DashboardHOC;
