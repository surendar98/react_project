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

const Register = () => {

    const navigate=useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(RegisterSchema),
  });

  const onSubmit = async (data) => {
     try {
      const response = await axios.post('http://localhost:5000/api/register', { data });
      if(response.status){
        toast.success('Registered Successfully',{position:'top-center'});      
        setTimeout(()=>navigate('/'),[3000])   
      }
    } 
    catch (error) {
      console.error('Register failed', error);
      toast.error(error.response.data.message,{position:'top-center'});
    }
  };

  return (
    <Box sx={boxStyles}>
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={formBox}>
      <Grid container flexDirection='row' textAlign='center' alignItems='center' justifyContent='center' spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5" color={theme.palette.primary.main}>Register</Typography>
        </Grid>
        <Grid item xs={12}>
              <TextField
              {...register('email')}
              label="Email"
              type="text"
              size="small"
              error={errors?.email?.message}
              helperText={errors?.email?.message}
              />
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
          <Button type="submit" variant='contained' sx={buttonStyle}>Register</Button>
        </Grid>
        <Grid item xs={12}> 
          <Typography>Already have an account?<Link to='/' style={linkStyle}>LogIn</Link></Typography>
        </Grid>
      </Grid>
    </Box>
    <ToastContainer/>
    </Box>
     );
};

export default Register;
