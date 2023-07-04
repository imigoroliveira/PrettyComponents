import React from 'react';
import TextField from '@mui/material/TextField';

const BaseTextField = ({ variant, color, ...props }) => {
  return (
    <TextField variant={variant} color={color} {...props} />
  );
};

export default BaseTextField;
