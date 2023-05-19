import axios from './httpServices';
import {domainHeroku} from '../../config/serverNew';

export function apiLogin(params) {
    return axios.post(`${domainHeroku}/auth/login`, params);
}

export function getProfileUser() {
    return axios.get(`${domainHeroku}/auth/user`);
}
