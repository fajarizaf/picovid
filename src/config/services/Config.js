import axios from 'axios'
import store from '../redux/Store'

const send = axios.create({
    baseURL: store.getState().configReducer.endpoint,
})

// interceptor ini berfungsi untuk menampilkan animasi loading disetiap ada request by axios
send.interceptors.request.use(function (config) {
    // Do something before request is sent
    store.dispatch({type: 'SET_ISNOTIF', value:'' })
    store.dispatch({type: 'SET_ISLOADING', value:true })
    store.dispatch({type:'SET_ISDISABLED', value:true})
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
send.interceptors.response.use(function (response) {
    // Do something with response data
    store.dispatch({type: 'SET_ISLOADING', value:false })
    store.dispatch({type:'SET_ISDISABLED', value:false})
    return response;
}, function (error) {
    return Promise.reject(error);
});

export default send