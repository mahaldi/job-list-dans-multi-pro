import React from 'react'
import FacebookLogin from '@greatsumini/react-facebook-login';
import GoogleLogin from '@leecheuk/react-google-login';
import { WrapperLogin } from './style'
import Grid from '@mui/material/Unstable_Grid2';

const LoginPage = () => {

	// Still cant login facebook or google, still missing some configuration on developer dashboard. then i leave it just like this
	const responseGoogle = (response) => {
		console.log(response);
	}
	return (
		<>
			<WrapperLogin>
				<Grid container direction="column" alignItems="center" justifyContent="center" spacing={2}>
					<Grid xs="auto">
						<FacebookLogin
							appId="1378800909539250"
							onSuccess={(response) => {
								console.log('Login Success!', response);
							}}
							onFail={(error) => {
								console.log('Login Failed!', error);
							}}
							onProfileSuccess={(response) => {
								console.log('Get Profile Success!', response);
							}}
						/>
					</Grid>
				</Grid>
				<Grid xs="auto">
					<GoogleLogin
						clientId="612776380707-tud794sg1qmfkt97ucadh44k32fhvtmu.apps.googleusercontent.com"
						buttonText="Login"
						onSuccess={responseGoogle}
						onFailure={responseGoogle}
						cookiePolicy={'single_host_origin'}
					/>
				</Grid>

			</WrapperLogin>
		</>
	)
}

export default LoginPage
