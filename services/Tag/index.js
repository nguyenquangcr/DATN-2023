import axios from '../Login/httpServices';
import {domainHeroku} from '../../config/serverNew';

export function createTag(params) {
    return axios.post(`${domainHeroku}/tag`, params);
}

