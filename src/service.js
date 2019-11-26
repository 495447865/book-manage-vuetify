import axios from 'axios';

const bookManageService = {

    user_profile: request => axios.post('api/user/profile', request)
}

export default bookManageService
