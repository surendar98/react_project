import React from 'react';
import axios from 'axios';
import {Box,Button,Grid,TextField, Typography} from '@mui/material'
import theme from '../theme';
import { LoginSchema } from '../schema/login';
import {useForm} from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from 'react-router-dom';
import { boxStyles,formBox,buttonStyle, linkStyle } from '../style';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

  const navigate=useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });


  const onSubmit = async (data) => {
     try {
      const response= await axios.post('http://localhost:5000/api/login', { data });
      if(response.status){
          sessionStorage.setItem('user',JSON.stringify(response.data.data))
          navigate('/')
      }

    } catch (error) {
      console.error('Login failed', error);
      toast.error('Invalid Credentials',{position:'top-center'});
    }
  };

  return (
    <Box sx={boxStyles}>
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={formBox}>
      <Grid container flexDirection='row' textAlign='center' alignItems='center' justifyContent='center' spacing={2}>
        <Grid item xs={12} md={8} >
          <Typography variant="h5" color={theme.palette.primary.main}>Login</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="User Name"
            {...register('username')}
            type="text"
            size="small"
            error={errors?.username?.message}
            helperText={errors?.username?.message}
            />
        </Grid>
        <Grid item xs={12}>
              <TextField
              {...register('password')}
              label="Password"
              type="password"
              size="small"
              error={errors?.password?.message}
              helperText={errors?.password?.message}
              />
        </Grid>
        <Grid item xs={12}> 
          <Button type="submit" variant='contained' sx={buttonStyle}>Login</Button>
        </Grid>
        <Grid item xs={12}> 
          <Typography>Don't have an account?<Link to='/register' style={linkStyle}>Sign Up</Link></Typography>
        </Grid>
      </Grid>
    </Box>
    <ToastContainer/>
    </Box>
     );
};

export default Login;
