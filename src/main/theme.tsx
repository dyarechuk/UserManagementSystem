import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const customRedTheme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: red[300],
    },
    secondary: {
      main: red[200],
    },
    error: {
      main: red.A400,
    },
  },
});

export default customRedTheme;