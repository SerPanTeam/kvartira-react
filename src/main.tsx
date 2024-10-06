import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
//import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

// declare module '@mui/material/styles' {
//   interface Palette {
//     viber: Palette['primary'];
//   }
//   interface PaletteOptions {
//     viber?: PaletteOptions['primary'];
//   }
// }

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Основной цвет
    },
    secondary: {
      main: "#dc004e", // Вторичный цвет
    },
    background: {
      default: "#f5f5f5", // Цвет фона по умолчанию
    },
    // viber: {
    //   main: "#665CAC", // Официальный цвет Viber
    // },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif", // Шрифт по умолчанию
    h1: {
      fontSize: "2rem",
    },
    // Добавьте другие настройки типографики по необходимости
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px", // Пример изменения радиуса кнопок
        },
      },
    },
    // Добавьте стили для других компонентов по необходимости
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);
