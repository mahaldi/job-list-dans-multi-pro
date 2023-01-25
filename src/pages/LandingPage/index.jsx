import React, { useEffect, useState } from 'react'
import { Typography } from '@mui/material'
import { connect } from 'react-redux'
import { fetchJobsList, resetJobsList } from 'actions'
import { Header, Filter, Card } from 'components'
import { Container, ScrollSectionContainer, LoaderSection } from './style'
import { get } from 'lodash'
import Dialog from '@mui/material/Dialog';
import Fab from '@mui/material/Fab';
import CloseIcon from '@mui/icons-material/Close';
import LoadingGif from 'assets/loading-gif.gif'


const LandingPage = props => {
	const { fetchJobsListConnect, jobs, resetJobsListConnect } = props
	const jobsData = get(jobs, 'data', []) || []
	const { loading: loadingJobs } = jobs

	const [openDialog, setOpenDialog] = useState(false)
	const [selectedCard, setSelectedCard] = useState({})
	const [page, setPage] = useState(1)
	const [filter, setFilter] = useState({
		description: '',
		location: '',
		full_time: true,
	})

	useEffect(() => {
		fetchJobsListConnect()
	}, [fetchJobsListConnect])

	const handleOnSearch = (description, location, full_time) => {
		setFilter({
			description,
			location,
			full_time,
		})
		setPage(1)
		resetJobsListConnect()
		fetchJobsListConnect({description, location, full_time, page: 1})
	}

	useEffect(() => {
		const handleScroll = () => {
			const reachPosition = (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 300)
			if(reachPosition && !loadingJobs && jobsData.length > 0) {
				const nextPage = page + 1
				setPage(nextPage)
				fetchJobsListConnect({ ...filter, page: nextPage})
			}
		}
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [loadingJobs, fetchJobsListConnect, filter, page, jobsData.length])

	const loadingState = () => {
		if(loadingJobs) return ( <LoaderSection>
			<img src={LoadingGif} alt="loading" />
		</LoaderSection>)
		return null
	}

	return (
		<>
			<Header />
			<Container>
				<Typography variant="h1" align='center'>Welcome to Dans Multi Pro Job Seeking</Typography>
				<Filter onSearch={handleOnSearch}/>
				<ScrollSectionContainer>
					{
						jobsData.map((value) => value && (
							<Card
								key={value.id}
								title={value.title}
								company={value.company}
								company_url={value.company_url}
								description={value.description}
								how_to_apply={value.how_to_apply}
								location={value.location}
								type={value.type}
								url={value.url}
								large={false}
								onClick={() => { setOpenDialog(true); setSelectedCard(value);}}
							/>
						))
					}
					{loadingState()}
					{ !loadingJobs && (jobsData.length === 0 || jobsData.every(job => !job)) && (
						<Typography variant="h6" align='center'>No Data Found</Typography>
					)}
				</ScrollSectionContainer>
			</Container>
			<Dialog open={openDialog} onClose={() => setOpenDialog(false)} fullWidth fullScreen>
				<Card {...selectedCard} large />
				<Fab color="primary" onClick={() => setOpenDialog(false)}>
					<CloseIcon />
				</Fab>
			</Dialog>
		</>
	)
}
function mapDispathToProps(state) {
	return {
		jobs: state.jobs
	}
}
export default connect(mapDispathToProps, { fetchJobsListConnect: fetchJobsList, resetJobsListConnect: resetJobsList })(LandingPage)
