import React from 'react'
import { Typography } from '@mui/material'
import { connect } from 'react-redux'

const LandingPage = () => {
	return (
		<>
			<Typography variant="h1">Ini landing page</Typography>
		</>
	)
}
function mapDispathToProps(state) {
	return {
		jobs: state.jobs
	}
}
export default connect(mapDispathToProps, null)(LandingPage)
