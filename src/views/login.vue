<template>
    <section class="login">
        <div class="top">
            您好，请登录
        </div>
        <div class="list userNameBox">
            <i></i>
            <input type="text" placeholder="账号" v-model="username" autocomplete='off'>
        </div>
        <div class="list passwordBox">
            <i></i>
            <input type="password" placeholder="密码" v-model="password" autocomplete='off'>
        </div>
        <div class="btnBox">
        <button @click="loginBtn" class="loginBtn">登录</button>

        </div>
    </section>
</template>

<script>
// @ is an alias to /src
import { mapMutations } from 'vuex'
import { login } from 'api/index'
import { Toast } from 'mint-ui'
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  components: {},
  created () {},
  mounted () {},
  methods: {
    ...mapMutations(['SET_TOKEN', 'SET_USER']),
    loginBtn () {
      if (this.username === '' || this.password === '') {
        Toast({
          message: '请输入账号或密码',
          position: 'middle',
          duration: 2000
        })
      } else {
        login({
          username: this.username,
          password: this.password
        }).then((res) => {
          console.log(res)
          if (res.code === 0) {
            this.SET_TOKEN(res.data.token)
            this.SET_USER(res.data)
            sessionStorage.token = res.data.token
            sessionStorage.user = JSON.stringify(res.data)
            Toast({
              message: '登录成功',
              position: 'middle',
              duration: 2000
            })
            setTimeout(() => {
              const redirect = this.$route.query.redirect || '/'
              this.$router.replace({
                path: redirect
              })
            }, 1000)
          }
        })
      }
    }
  }
}
</script>
<style scoped lang="scss">
@import 'style/_mixin.scss';
@import 'style/_variables.scss';
.login {
  .top {
    @include line-height(345px, 345px);
    font-size: 60px;
    padding-left: 45px;
    text-align: left;
  }
  .list {
    height: 100px;
    margin: 0 45px 2px 45px;
    border-bottom: 1PX solid #dcdcdc;
    position: relative;
    input {
      width: 100%;
      display: block;
      box-sizing: border-box;
      @include line-height(100px, 100px);
      font-size: 28px;
      border: none;
      padding-left: 60px;
    }
    i {
      position: absolute;
      display: block;
    }
  }
  .userNameBox {
    i {
      width: 24px;
      top: 34px;
      height: 36px;
      background: url('~assets/phone_ico.png') no-repeat left center;
      background-size: contain;
    }
  }
  .passwordBox {
    i {
      width: 24px;
      top: 34px;
      height: 36px;
      background: url('~assets/pwd_ico.png') no-repeat left center;
      background-size: contain;
    }
  }
  .btnBox {
    margin: 68px 45px 0 45px;
    .loginBtn {
      @include line-height(90px, 90px);
      font-size: 32px;
      border-radius: 90px;
      background: linear-gradient(to right, #f9d191, #f9b490);
      border: none;
      display: block;
      width: 100%;
      color: #fff;
    }
  }
}
</style>
