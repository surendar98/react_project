import React from 'react';
import axios from 'axios';
import {Box,Button,Grid,TextField, Typography} from '@mui/material'
import theme from '../theme';
import {useForm} from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema } from '../schema/register';
import { Link, useNavigate } from 'react-router-dom';
import { boxStyles,formBox,buttonStyle, linkStyle } from '../style';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import VendorRegister from './VendorRegister';
import UserRegister from './UserRegister';
const Register = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }; 

  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  return (
    <Box sx={boxStyles}>  
    <Box  sx={formBox}>
     <Grid container flexDirection='row' textAlign='center' alignItems='center' justifyContent='center' spacing={2}>
          
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="User" {...a11yProps(0)} />
              <Tab label="Vendor" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
             <UserRegister/>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <VendorRegister/>
          </CustomTabPanel>
    <ToastContainer/>
    </Grid>
    </Box>
  </Box>
  );
};

export default Register;
