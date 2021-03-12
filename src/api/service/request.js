import axios from 'axios'

import config from './config'

const { baseUrl } = config


const service = axios.create({
    baseURL: baseUrl,
    timeout: 50000
})

// service.interceptors.request.use(
//     config => {
//         let token = localStorage.getItem("accessToken")
//         if(token){
//             config.headers.Token = token;
//         }
//         return config;
//     },
//     error => {
//         console.log(error);
//         return Promise.reject();
//     }
//   )
  
//   axios.interceptors.response.use(
//     response => {
//       return response;
//     },
//     err => {
//       return Promise.reject()
//     }
//   )

export default service
