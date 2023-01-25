import React from 'react'
import { Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2';
import { WrapperCard } from './style'

export const Card = ({ title, type, company, company_url, location, description, how_to_apply, url, large, onClick }) => {
	return (
		<>
			<WrapperCard container direction="column" spacing={0} onClick={onClick} large={large}>
				<Grid xs={12} container direction="row" spacing={2}>
					<Grid xs={2}>
						<Typography variant="h6">Title :</Typography>
					</Grid>
					<Grid xs="auto">
						<Typography>{title}</Typography>
					</Grid>
				</Grid>
				<Grid xs={12} container direction="row" spacing={2}>
					<Grid xs={2}>
						<Typography variant="h6">Type :</Typography>
					</Grid>
					<Grid xs="auto">
						<Typography>{type}</Typography>
					</Grid>
				</Grid>
				<Grid xs={12} container direction="row" spacing={2}>
					<Grid xs={2}>
						<Typography variant="h6">Company :</Typography>
					</Grid>
					<Grid xs="auto">
						<Typography>{company}</Typography>
					</Grid>
				</Grid>
				<Grid xs={12} container direction="row" spacing={2}>
					<Grid xs={2}>
						<Typography variant="h6">Company url :</Typography>
					</Grid>
					<Grid xs="auto">
						<Typography>{company_url}</Typography>
					</Grid>
				</Grid>
				<Grid xs={12} container direction="row" spacing={2}>
					<Grid xs={2}>
						<Typography variant="h6">Location :</Typography>
					</Grid>
					<Grid xs="auto">
						<Typography>{location}</Typography>
					</Grid>
				</Grid>
				{
					large && (
						<>
							<Grid xs={12} container direction="row" spacing={2}>
								<Grid xs={2}>
									<Typography variant="h6">Description :</Typography>
								</Grid>
								<Grid xs="auto">
									<Typography>
										<div dangerouslySetInnerHTML={{
											__html: description
										}} />
									</Typography>
								</Grid>
							</Grid>
							<Grid xs={12} container direction="row" spacing={2}>
								<Grid xs={2}>
									<Typography variant="h6">How to apply :</Typography>
								</Grid>
								<Grid xs="auto">
									<Typography>
										<div dangerouslySetInnerHTML={{
											__html: how_to_apply
										}} />
									</Typography>
								</Grid>
							</Grid>
						</>
					)
				}
				<Grid xs={12} container direction="row" spacing={2}>
					<Grid xs={2}>
						<Typography variant="h6">Url :</Typography>
					</Grid>
					<Grid xs="auto">
						<a href={url} target="_blank" rel="noreferrer">{url}</a>
					</Grid>
				</Grid>
			</WrapperCard>
		</>
	)
}

Card.defaultProps = {
	title: 'Senior Creative Front End Web Developer',
	type: 'Full Time',
	company: 'asdasd',
	company_url: 'asdasdad',
	location: 'asdasdad',
	large: false,
}
