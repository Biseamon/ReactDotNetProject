import { Box, Container, CssBaseline } from "@mui/material";
import NavBar from "./NavBar";
import { Outlet, ScrollRestoration, useLocation } from "react-router";
import HomePage from "../../feature/home/HomePage";

function App() {

  const location = useLocation();

  return (
    <Box sx={{bgcolor: '#eeeeee', minHeight: '100vh'}}>
      <ScrollRestoration></ScrollRestoration>
      <CssBaseline >
        {location.pathname === '/' ? <HomePage /> : (
          <>
          <NavBar />
          <Container maxWidth='xl' sx={{mt: 3}}>
              <Outlet />      
          </Container> 
          </>
        )}
      </CssBaseline>
       
    </Box>
  )
}

export default App
