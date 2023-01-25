import React, { useState } from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import { TextField, Switch, Button } from '@mui/material'
import FormControlLabel from '@mui/material/FormControlLabel';
import { WrapperFilter } from './style'

export const Filter = props => {
	const { onSearch } = props
	const [desc, setDesc] = useState('')
	const [location, setLocation] = useState('')
	const [fulltime, setFulltime] = useState(true)
	return (
		<>
			<WrapperFilter>
				<Grid container direction="row" spacing={2} justifyContent="center" alignItems="center">
					<Grid xs="auto">
						<TextField label="Description" variant='outlined' value={desc} onChange={(e) => setDesc(e.target.value)}/>
					</Grid>
					<Grid xs="auto">
						<TextField label="Location" variant='outlined' value={location} onChange={(e) => setLocation(e.target.value)}/>
					</Grid>
					<Grid xs="auto">
						<FormControlLabel
							onChange={() => setFulltime(!fulltime)}
							control={<Switch color="primary" checked={fulltime}/>}
							label="Full time"
							labelPlacement="top"
						/>
					</Grid>
					<Grid xs="auto">
						<Button variant='contained' onClick={() => onSearch(desc, location, fulltime)}>Search</Button>
					</Grid>
				</Grid>
			</WrapperFilter>
		</>
	)
}
