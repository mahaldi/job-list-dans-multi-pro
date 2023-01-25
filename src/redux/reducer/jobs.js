const jobs = (state = {}, { type, payload }) => {
	switch(type) {
		case 'LOAD_JOBS_LIST':
			return { ...state, jobs: { loading: true, error: false }}
		case 'UPDATE_JOBS_LIST':
			return { ...state, jobs: { loading: false, error: false, data: payload }}
		case 'FAILED_JOBS_LIST':
			return { ...state, jobs: { loading: false, error: true, data: { ...state.jobs.data } }}
		default:
			return state;
	}
}
export default jobs
