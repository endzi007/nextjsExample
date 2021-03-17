import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4075B7',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#A79DA6',
    },
  },
  overrides:{
      MuiAppBar:{
          colorTransparent: {
              boxShadow: "none"
          }
      }
  },
  customProps: {
    paddingTop: "60px",
    containerWidth: "90vw",
    margin: "0 auto",
  }
});

export default theme;