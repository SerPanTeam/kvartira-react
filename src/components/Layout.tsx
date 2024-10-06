import React from "react";
import { AppBar, Toolbar, Typography, Container, Box, CssBaseline } from "@mui/material";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <CssBaseline /> {/* Сброс стилей браузера и применение базовых стилей MUI */}
      
      {/* Заголовок */}
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h1" component="div">
            Нерухомість Житомира
          </Typography>
        </Toolbar>
      </AppBar>
      
      {/* Основной контент */}
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Box component="main">
          {children}
        </Box>
      </Container>
      
      {/* Подвал */}
      <Box component="footer" sx={{ py: 3, px: 2, mt: 'auto', backgroundColor: (theme) => theme.palette.grey[200] }}>
        <Container maxWidth="lg">
          <Typography variant="body1" align="center">
            &copy; 2024 Нерухомість Житомира
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default Layout;
