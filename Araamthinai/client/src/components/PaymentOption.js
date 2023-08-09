import React, { useState } from "react";

import displayRazorpay from "../utils/PaymentGateway";
import Layout from "../Layout";
import { Button, Grid, Typography } from "@mui/material";
import theme from "../theme";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const PaymentOptions = () => {

  const[choosedAmount,setChoosedAmount]=useState(0);
  
  const handleChange=(e)=>{
      setChoosedAmount(parseInt(e.target.value));
  }

  const handleSubmit = () =>{
    displayRazorpay(choosedAmount);
  }

  return (
    <Layout>
        <Grid container sx={{pt:6}}  alignItems='center' justifyContent='center' rowSpacing={2}>
            <Grid item xs={12}>
             <Typography variant="h3" color={theme.palette.primary.main}>Choose Your Payment Amount:</Typography>
            </Grid>
            <Grid item xs={12} sx={{px:4}}>
                <FormControl onChange={(e)=>handleChange(e)}>
                    <RadioGroup
                        row
                        name="row-radio-buttons-group"
                    >
                    <FormControlLabel value={100} control={<Radio />} label="10" />
                    <FormControlLabel value={200} control={<Radio />} label="20" />
                    <FormControlLabel value={300} control={<Radio />} label="30" />
                    </RadioGroup>
                </FormControl>
            </Grid>    
            <Grid item xs={12} sx={{px:6}}>
                <Button type="button" variant="contained" onClick={handleSubmit}>Pay</Button>
            </Grid>
        </Grid>
    </Layout>
  );
};

export default PaymentOptions;
