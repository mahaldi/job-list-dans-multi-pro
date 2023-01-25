import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import { TextField, Switch, Button } from '@mui/material'
import FormControlLabel from '@mui/material/FormControlLabel';
import { WrapperFilter } from './style'

export const Filter = () => {
	return (
		<>
			<WrapperFilter>
				<Grid container direction="row" spacing={2}>
					<Grid xs="auto">
						<TextField label="Description" variant='outlined' />
					</Grid>
					<Grid xs="auto">
						<TextField label="Location" variant='outlined' />
					</Grid>
					<Grid xs="auto">
						<FormControlLabel
							control={<Switch color="primary" />}
							label="Full time"
							labelPlacement="top"
						/>
					</Grid>
					<Grid xs="auto">
						<Button variant='contained'>Search</Button>
					</Grid>
				</Grid>
			</WrapperFilter>
		</>
	)
}
