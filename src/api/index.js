/*
包含n个接口请求函数的模块
函数的返回值: promise对象
 */
import ajax from './ajax'

export const getIndex = (params) => ajax('/mock/5cb48c7ed491cd741c54456f/base/index', params)
export const login = (params) => ajax('/mock/5cb48c7ed491cd741c54456f/base/login', params, 'POST')

// export const reqMsgLogin = (Mobile, SmsValidCode) => ajax(BASE_URL + '/api/Customer/SmsLogin', {Mobile, SmsValidCode}, 'POST')
