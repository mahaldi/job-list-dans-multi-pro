import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		mode: 'light',
		primary: {
      // light: will be calculated from palette.primary.main,
      main: '#1868B7',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
		},
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
		custom: {
      light: '#ffa726',
      main: '#f57c00',
      dark: '#ef6c00',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
	},
	typography: {
		h1: {
			fontSize: '30px',
			fontWeight: 600,
		}
	}
})
export default theme
