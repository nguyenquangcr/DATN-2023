import axios from './httpServices';
import {domainHeroku} from '../../config/serverNew';

export function apiLogin(params) {
    return axios.post(`${domainHeroku}/auth/login`, params);
}

export function apiSignUp(data) {
    return axios.post(`${domainHeroku}/user/register`,data);
}

export function getProfileUser() {
    return axios.get(`${domainHeroku}/auth/user`);
}

export function getListPostUser() {
    return axios.get(`${domainHeroku}/post?status=true`);
}