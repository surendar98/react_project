import React, { useState } from "react";
import displayRazorpay from "../utils/PaymentGateway";
import { Button, Grid, Typography } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

const PaymentOptions = () => {

  const[choosedAmount,setChoosedAmount]=useState(0);
  
  const handleChange=(e)=>{
      setChoosedAmount(parseInt(e.target.value));
  }

  const handleSubmit = () =>{
    displayRazorpay(choosedAmount);
  }

  return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
             <Typography color='black'>Choose Your Payment Amount:</Typography>
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
  );
};

export default PaymentOptions;
