import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
const PaymentDetails = () =>{
    const[paymentId,setPaymentId]=useState('');   
 
    useEffect(()=>{
      setPaymentId('hgytyt')
    },[])

    return(
        <Box sx={{backgroundColor:'white',boxShadow:'2',pt:1,pb:3,px:2,width:'50%',borderRadius:'10px'}}>
            
            <Grid container sx={{p:1}}>
                <Grid item xs={12} md={12} sx={{display:'flex'}}>
                <Typography sx={{color:"black"}}>Payment Id:</Typography>
                <Typography sx={{color:"black",px:1}}>{paymentId}</Typography>
                </Grid>
            </Grid>
            <Grid container sx={{p:1}}>
                <Grid item xs={12} md={12} sx={{display:'flex'}}>
                <Typography sx={{color:"black"}}>Amount:</Typography>
                <Typography sx={{color:"black",px:1}}>2000</Typography>
                </Grid>
            </Grid>
            <Grid container sx={{p:1}}>
                <Grid item xs={12} md={12} sx={{display:'flex'}}>
                <Typography sx={{color:"black"}}>Date:</Typography>
                <Typography sx={{color:"black",px:1}}>11-08-2023</Typography>
                </Grid>
            </Grid>
  
            <Grid container sx={{p:1}}>
                <Grid item xs={12} md={12} sx={{display:'flex'}}>
                <Typography sx={{color:"black"}}>Payment Method:</Typography>
                <Typography sx={{color:"black",px:1}}>UPI</Typography>
                </Grid>
            </Grid>
           
        </Box>
    )
}
export default PaymentDetails;