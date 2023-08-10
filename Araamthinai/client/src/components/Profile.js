import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import {Edit} from '@mui/icons-material'
import theme from "../theme";
import { useEffect, useState } from "react";
const Profile = () =>{
    const [show,setShow]=useState(false);
    const[username,setUsername]=useState('');
 
    useEffect(()=>{
       setUsername('sure');
    },[])

    return(
        <Box sx={{backgroundColor:'white',boxShadow:'2',pt:1,pb:3,px:2,width:'50%',borderRadius:'10px'}}>
             <Grid container>
                <Grid item xs={12} md={12} sx={{display:'flex',justifyContent:'end'}}> <IconButton onClick={()=>setShow(!show)}><Edit sx={{color:theme.palette.primary.main}}/></IconButton></Grid>
           
            </Grid>
            <Grid container sx={{px:2}}>
                <Grid item xs={12} md={12} sx={{display:'flex'}}>
                <Typography sx={{color:"black"}}>Username:</Typography>
              {!show?  <Typography sx={{color:"black",px:1}}>Sure</Typography>:
              <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/>}
                </Grid>
            </Grid>
            <Grid container sx={{px:2,mt:3}}>
               
              {show&&  <Grid container sx={{px:2,mt:3}}>
                <Grid item xs={6} md={4} sx={{display:'flex'}}>
                    <Button type="button" variant="contained">Update</Button>
                    </Grid>
                    <Grid item xs={6} md={4} sx={{display:'flex'}}>
        
                    <Button type="button" variant="contained" color='secondary' onClick={()=>setShow(!show)}>Cancel</Button>
                    </Grid>
                </Grid>}
            </Grid>
        </Box>
    )
}
export default Profile;