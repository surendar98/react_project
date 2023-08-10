import { Box, Tabs, Typography,Tab } from "@mui/material";
import Layout from "../Layout";
import Profile from "./Profile";
import { useState } from "react";
import theme from "../theme";
import PaymentDetails from "./PaymentDetails";
import PaymentOptions from "./PaymentOption";

const Dashboard = () =>{

    const [value, setValue] = useState(0);

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
              <Typography sx={{color:theme.palette.primary.main}}>{children}</Typography>
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
  
return(
    <Layout>
     <Box sx={{pt:6,mx:6}}>
            <Box>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Profile" {...a11yProps(0)} />
            <Tab label="Payment Details" {...a11yProps(1)} />
            <Tab label="Add New Payment" {...a11yProps(2)} />
            </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
            <Profile/>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
            <PaymentDetails/>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
            <PaymentOptions/>
        </CustomTabPanel>
      </Box>
    </Layout>
)
}
export default Dashboard;