<template>
    <div class="home">
        <div id="nav">
            <router-link to="/">Home</router-link>|
            <router-link to="/about">About</router-link>
        </div>

        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { getIndex } from 'api/index'
export default {
  name: 'home',
  components: {
    HelloWorld
  },
  activated() {
    console.log(1)
  },
  created () {
    getIndex({ pageSiza: 100, num: 10 }).then((res) => {
      console.log(res)
    })
    // console.log(this.$wechat)
  },
  mounted () {},

  methods: {}
}
</script>
