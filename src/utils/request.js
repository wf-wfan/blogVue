import axios from 'axios'
import { MessageBox } from 'element-ui';
import router from '../router/index.js';


let isReFreshPadding = true;


let http = axios.create({
  // baseURL: 'http://10.140.0.27:9079/',
  baseURL: '/',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
  },
  transformRequest: [function (data) {
    let newData = '';
    for (let k in data) {
      if (data.hasOwnProperty(k) === true) {
        newData += encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) + '&';
      }
    }
    return newData;
  }]
});

http.interceptors.request.use(config => {
  debugger
  var token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = token
  }
  return config;
}, function (error) {
  return Promise.reject(error)
}
)

http.interceptors.response.use(res =>{
  debugger
  var code = res.data.code;
  if(isReFreshPadding){
    if(code === 100401 && res.data.success == false){
      isReFreshPadding = false;
      MessageBox.confirm('登录状态过期，请重新登录','系统提示',{confirmButtonText: '重新登录',closeOnClickModal:false,showCancelButton :false,showClose:false,
      type: 'warning'}).then(() => {
        isReFreshPadding = true;
        localStorage.removeItem("token");
        localStorage.removeItem("ms_username");
        localStorage.removeItem("userId");

       router.push('/login');
      }).catch(() => {
     
      });
  }
  }
  debugger
  return res;
})

function apiAxios(method, url, params, response) {
  http({
    method: method,
    url: url,
    data: method === 'POST' || method === 'PUT' ? params : null,
    params: method === 'GET' || method === 'DELETE' ? params : null,
  }).then(function (res) {
    response(res);
  }).catch(function (err) {
    response(err);
  })
}

export default {
  get: function (url, params, response) {
    return apiAxios('GET', url, params, response)
  },
  post: function (url, params, response) {
    return apiAxios('POST', url, params, response)
  },
  put: function (url, params, response) {
    return apiAxios('PUT', url, params, response)
  },
  delete: function (url, params, response) {
    return apiAxios('DELETE', url, params, response)
  }
}
