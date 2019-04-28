# vue-h5

> A Vue.js project

## 新增功能包括

``` bash
# 1.使用 vw、rem相结合

# 2.使用px2rem插件  用设计稿的px大小写，自动转为rem
PS:可以使用   /*no*/  或者 PX  的方式  禁止把px转rem

# 3. axios高度封装 
config.headers.Authorization = sessionStorage.getItem('token')
请求/响应 拦截
统一存放API接口

# 4. 路由权限认证，没权限自动跳登录页,并携带 redirect参数，登陆后实现自动跳转原页面

# 5. 路由keepAlive的判断、路由懒加载

# 6. vuex存储 token、user等数据

# 7. 移动端屏幕适配样式
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
