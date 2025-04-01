import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store';
import { Provider } from 'react-redux';
import theme from './theme';

interface Props {
	children: ReactNode;
}

export function AppProvider({ children }: Props) {
	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<BrowserRouter>{children}</BrowserRouter>
			</ThemeProvider>
		</Provider>
	);
}
