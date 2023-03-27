import React, { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { red, blue } from "@mui/material/colors";
import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const ThemeSwitcher = ({ children }) => {
  const [theme, setTheme] = useState(createTheme({
    palette: {
      mode: "dark",
      primary: red,
      secondary: blue,
    },
  }));

  useEffect(() => {
    const isDark = localStorage.getItem("theme") === "dark";
    setTheme(createTheme({
      palette: {
        mode: isDark ? "dark" : "light",
        primary: red,
        secondary: blue,
      },
    }));
  }, []);

  const handleThemeChange = () => {
    const newPaletteType = theme.palette.mode === "light" ? "dark" : "light";
    const newTheme = createTheme({
      palette: {
        mode: newPaletteType,
        primary: red,
        secondary: blue,
      },
    });
    setTheme(newTheme);
    localStorage.setItem("theme", newPaletteType);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ position: "fixed", top: 30, right: 10 }}>
        <IconButton onClick={handleThemeChange} sx={{ color: "text.primary" }}>
          {theme.palette.mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>
      </div>
      {children}
    </ThemeProvider>
  );
};

export default ThemeSwitcher;
