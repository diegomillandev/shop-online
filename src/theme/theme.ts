import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        background: {
            default: '#fafafa',
            paper: '#fff',
        },
        primary: {
            main: '#131a20',
            dark: '#0d1216',
            light: '#42474c',
            contrastText: '#fff',
        },
        secondary: {
            main: '#ffb875',
            dark: '#b28051',
            light: '#ffc690',
            contrastText: '#000',
        },
        error: {
            main: '#f44336',
        },
    },
});
