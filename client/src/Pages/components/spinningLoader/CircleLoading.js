import { Backdrop, CircularProgress } from '@mui/material';
import { useState } from 'react';

const CircleLoading = ({open}) => {


  
  return (
    <Backdrop
      open={open}
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 999 }}
    >
      <CircularProgress sx={{ color: 'white' }} />
    </Backdrop>
  );
};

export default CircleLoading;