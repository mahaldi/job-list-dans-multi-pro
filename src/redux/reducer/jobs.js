import {get} from 'lodash'
const jobs = (state = {}, { type, payload }) => {
	switch(type) {
		case 'LOAD_JOBS_LIST':
			return { ...state, loading: true, error: false}
		case 'UPDATE_JOBS_LIST':
			return { ...state, loading: false, error: false, data: get(state, 'data', []).concat(payload)}
		case 'FAILED_JOBS_LIST':
			return { ...state, loading: false, error: true }
		case 'RESET_JOBS_LIST':
			return { ...state, loading: false, error: false, data: []}
		default:
			return state;
	}
}
export default jobs
