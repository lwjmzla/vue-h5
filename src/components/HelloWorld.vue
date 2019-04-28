<template>
    <div class="hello">
       首页1
       <span>1111</span>
       <i>222</i>
    </div>
</template>

<script>
</script>
<style scoped lang="scss">
/*有no的话  px不会转rem, PX也不会转*/
.hello{
    font-size:32px;/*no*/
    color:red;
    span{
        font-size: 32px;
    }
    i{
        font-size: 24PX;
    }
}
</style>
