"use client";
import { createTheme } from "@mui/material/styles";
import { Inter } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });
const theme = createTheme({
  typography: {
    fontFamily: inter.style.fontFamily,
  },
  components: {
    MuiCard: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundColor: "#f9fafb",
          padding: 16,
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        size: "small",
      },
    },
    MuiButton: {
      defaultProps: {
        size: "small"
      },
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
  },
});

export default theme;
