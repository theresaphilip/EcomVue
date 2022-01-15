import axios from 'axios';
import { MAIN_URL } from '@/common/Url';
export function userLogin(data)
{
    return axios.post(`${MAIN_URL}login`,data)
}
export function userRegister(data)
{
    return axios.post(`${MAIN_URL}register`,data)
}
export function userContact(data)
{
    return axios.post(`${MAIN_URL}contact`,data)
}
export function banner()
{
    return axios.get(`${MAIN_URL}banner`)
}
export function category()
{
    return axios.get(`${MAIN_URL}category`)
}
export function categorybyid(id)
{
    return axios.get(`${MAIN_URL}category/${id}`)
}
export function product()
{
    return axios.get(`${MAIN_URL}product`)
}
export function productDetails(id)
{
    return axios.get(`${MAIN_URL}productdetails/${id}`)
}
export function profile()
{
    var token = localStorage.getItem('token');
    return axios.get(`${MAIN_URL}profile`, { headers: { "Authorization": `Bearer ${token}` } })
}
export function Updateprofile(data)
{
    var token = localStorage.getItem('token');
    return axios.post(`${MAIN_URL}editprofile`,data, { headers: { "Authorization": `Bearer ${token}` } })
}
export function changePassword(data)
{
    var token = localStorage.getItem('token');
    return axios.post(`${MAIN_URL}changepass`,data, { headers: { "Authorization": `Bearer ${token}` } })
}
export function coupon()
{
    return axios.get(`${MAIN_URL}coupon`)
}
export function cms()
{
    return axios.get(`${MAIN_URL}cms`)
}
export function cmsById(id)
{
    return axios.get(`${MAIN_URL}cms/${id}`)
}
export default {userLogin,userRegister,userContact,banner,category,categorybyid,product,productDetails,coupon,profile,Updateprofile,changePassword,cms,cmsById};