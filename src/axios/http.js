import axios from 'axios'
import {
  Indicator,
  Toast
} from 'mint-ui'

// 创建axios实例
const service = axios.create({
  timeout: 60000, // 请求超时时间
  withCredentials: true, // 允许cookie传值
  baseURL: '/app'
})

// 全局变量
// axios.defaults.baseURL = api.defaultsBaseURL;
// axios.defaults.withCredentials = true;

// 请求次数
let requestsNum = 0

// 添加请求拦截器
service.interceptors.request.use(function (config) {
  // 请求次数加1
  requestsNum++
  if (!config.noLoading) {
    Indicator.open('数据加载中')
  }

  // 添加 token
  return addHeaderAttribute(config)
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加 Header 属性
function addHeaderAttribute(config) {
  // 请求类型
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

  // token
  if (sessionStorage.getItem('token')) {
    config.headers.Authorization = sessionStorage.getItem('token')
  }

  // 项目ID
  // if (sessionStorage.getItem("projectId")) {
  //     config.headers.AuthorizationId = sessionStorage.getItem("projectId");
  // }

  // 权限三要素
  // config.headers.moduleName = "moduleName";
  // config.headers.pageName = "pageName";
  // config.headers.buttonName = "buttonName";

  // console.log(config,'config======================')

  return config
}

// 添加响应拦截器
service.interceptors.response.use(function (response) {
  requestsNum--
  if (requestsNum === 0) { Indicator.close() }
  // 对响应数据做点什么
  if (response.data.code === '1002' || response.data.code === '1003') {
    // router.replace({
    //     path: "/",
    //     redirect: '/login'
    // });
    Toast({
      message: 'xxx',
      position: 'middle',
      duration: 2000
    })
  }
  return response
}, function (error) {
  requestsNum--
  if (requestsNum === 0) { Indicator.close() }
  // 对响应错误做点什么
  if (error) {
    switch (error.status) {
      case 404:
        // router.replace({
        //     path: "/",
        //     redirect: '/login'
        // });
    }
    Toast({
      message: error.message,
      position: 'middle',
      duration: 2000
    })
  }
  return Promise.reject(error)
})

export default service
