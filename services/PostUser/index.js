import axios from '../Login/httpServices';
import {domainHeroku} from '../../config/serverNew';

export function createPostUser(params) {
    return axios.post(`${domainHeroku}/post`, params);
}