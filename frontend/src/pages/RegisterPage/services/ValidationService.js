import axios from 'axios';
import config from '../../../shared/config';

export async function checkEmailExists(email) {
    const res = await axios.get(`${config.API_BASE_BACKEND}/api/User/email?email=${ email }`);
    console.log(res);
    return res.data;
}

export async function checkUsernameExists(username) {
    const res = await axios.get(`${config.API_BASE_BACKEND}/api/User/username?username=${ username }`);
    
    return res.data;
}
