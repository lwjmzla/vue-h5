/*
ajax请求函数模块
返回值: promise对象(异步返回的数据是: response.data)
 */
import axios from '@/axios/http.js'
// import axios from 'axios'
import qs from 'qs'
export default function ajax (url, data = {}, type = 'GET', needLoading) {
  return new Promise(function (resolve, reject) {
    // 执行异步ajax请求
    let promise
    if (type === 'GET') {
      // 准备url query参数数据
      // let dataStr = '' // 数据拼接字符串
      // Object.keys(data).forEach(key => {
      //   dataStr += key + '=' + data[key] + '&'
      // })
      // if (dataStr !== '') {
      //   dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
      //   url = url + '?' + dataStr
      // }
      // 发送get请求 // 可以改造一下
      promise = axios.get(url, {
        params: data,
        needLoading
      })
    } else {
      // 发送post请求
      // promise = axios.post(url, data)
      promise = axios({
        method: 'post',
        url,
        needLoading,
        data: qs.stringify(data) // qs.stringify({ a: ['b', 'c', 'd'] }, { indices: false }); 如果里面放了数组之类的 加上  { indices: false } 去qs文档看
        // headers: {
        //   // 'Content-Type': 'application/json'
        //   'Content-Type': 'application/x-www-form-urlencoded' // 有时候要配置这个。
        // }
      })
    }
    promise.then(function (response) {
      // 成功了调用resolve()
      resolve(response.data)
    }).catch(function (error) {
      // 失败了调用reject()
      console.log('reject')
      reject(error)
    })
  })
}
