import React from 'react'
import theme from './theme'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import initialState from 'redux/initialState'
import configureStore from 'redux/configureStore'
import LandingPage from './pages/LandingPage'

const store = configureStore(initialState)

function App() {
  return (
		<Provider store={store}>
			<BrowserRouter basename='/'>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<Routes>
						<Route path="/" exact element={<LandingPage />}/>
					</Routes>
				</ThemeProvider>
			</BrowserRouter>
		</Provider>
  );
}

export default App;
