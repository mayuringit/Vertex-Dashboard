// src/theme.js
import { createTheme } from '@mui/material/styles';

export const getTheme = (mode = 'light') =>
    createTheme({
        palette: {
            mode,
            ...(mode === 'light'
                ? {
                    primary: {
                        main: '#4B6EF5',
                    },
                    secondary: {
                        main: '#00B8D9',
                    },
                    background: {
                        default: '#eef2fb',
                        paper: '#ffffff',
                    },
                    text: {
                        primary: '#1a1a1a',
                        secondary: '#555555',
                    },
                }
                : {
                    primary: {
                        main: '#738FFF',
                    },
                    secondary: {
                        main: '#00E5FF',
                    },
                    background: {
                        default: '#0f1117',
                        paper: '#1e1e24',
                    },
                    text: {
                        primary: '#f5f5f5',
                        secondary: '#aaaaaa',
                    },
                }),
        },
        typography: {
            fontFamily: 'Manrope, Roboto, Arial, sans-serif',
            h1: { fontWeight: 700 },
            h2: { fontWeight: 600 },
            h3: { fontWeight: 600 },
            body1: { fontWeight: 400 },
            button: { fontWeight: 600 },
        },
        shape: {
            borderRadius: 12,
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        textTransform: 'none',
                        fontWeight: 600,
                        borderRadius: 8,
                    },
                },
            },
        },
    });