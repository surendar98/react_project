import { createTheme } from "@mui/material";

const theme = createTheme({
    palette:{
        primary:{
            main:'#5bc0de',
            light:'#fff'
        }
    },
    mixins: {
        toolbar: {
          minHeight: 60,
        },
    },
    components:{
        MuiTextField:{
            styleOverrides:{
                root:{
                    width:'70%'
                }
            }
        },
        MuiTab:{
            styleOverrides:{
                root:{
                '& .Mui-selected':{
                    color:"#000"
                }
            }
            }
        }
    }
})

export default theme;