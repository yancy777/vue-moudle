/**
 * 作用：所有API组件
 * 作者：
 * 时间：2018-04-18
 */

import axios from 'axios'
let base = '/n_serviceUnit';
/**
 * 登录账号/解锁
 */
export const reqLogin = params => { return axios.post('auth/logout', params).then(res => res.data) };

/**
 * 获取用户信息
 */
export const reqUserInfo = params => { return axios.get('authenticate/credentials', { params: params })};
/**
 * 获取园所列表、 增  、改、  删
 */
export const reqKdgInfo = params => { return axios.get(`${base}/kg/home`, { params: params }) };//管理员、机构、代理：首页