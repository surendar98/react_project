import { Box } from "@mui/material";
import Header from "./Header";

const Layout = ({children}) =>{
return(
    <>
    <Header/>
    <Box component="main" sx={{pt:6}}>
    {children}
    </Box>
    </>
)
}
export default Layout;