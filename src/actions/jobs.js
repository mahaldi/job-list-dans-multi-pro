import JobsAPI from "api/jobs";

export const fetchJobsList = (params) => dispatch => {
	dispatch({ type: 'LOAD_JOBS_LIST'})
	return JobsAPI.getJobs(params).then(res => {
		dispatch({
			type: 'UPDATE_JOBS_LIST',
			payload: res.data
		})
		return res.data
	}).catch(() => {
		dispatch({ type: 'FAILED_JOBS_LIST'})
	})
}
