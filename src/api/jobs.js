import api from 'api'

class JobsApi {
	constructor() {
		this.api = api
	}

	getJobs(params = { description: "", location: "", full_time: true, page: 1}) {
		return this.api.get(`api/recruitment/positions.json`, {
			params
		})
	}
}

const JobsAPI = new JobsApi()
export default JobsAPI
