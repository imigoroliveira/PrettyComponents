import React from 'react';
import Button from '@mui/material/Button';
import Link  from 'react-router-dom';



//Color can be bellow options
 // 'inherit'
//'primary'
// 'secondary'
//'success'
//'error'
//'info'
//'warning'
//string


//Variatns can be bellow options
//'contained'
//| 'outlined'
//| 'text'
//| string


const BaseButton = ({ title, variant, color}) => {
  return (
    <Button variant={variant} color={color}>
      {title}
    </Button>
  );
};

export default BaseButton;
