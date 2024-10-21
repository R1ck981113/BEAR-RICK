<script setup>
import { reactive,computed,ref } from "vue";
//导入draggable组件
import 日出 from './assets/img/1.webp'

const todoList = ref([
  {
    name:'金顶日出',
    img:日出
}
])

</script>

<template>
  <div class="itxst">
       <div class="nav">
        <span class="title">
          BEAR & RICK'S HOUSE
        </span>
       </div>

     <div class="container">
        <div class="todo_item" v-for="(item,index) in todoList">
          <img :src=item.img alt="" style="position: absolute;">
            {{ item.name }}
        </div>
     </div>
  </div>
</template>
<style lang="scss" scoped>
.nav
{
  width: 100%;
  background-color: palevioletred;
  height: 50px;
  display: flex;
  align-items: center;
  .title{
    margin-left: 10px;
    font-size:20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: white;
  }
}

.container{
  width: 100%;
  height: 1000px;
  // background-color:#ffb3d9;
  .todo_item{
    width: 300px;
    height: 200px;
    background-color: #ffb3d9;
    img{
      width: 300px;
      height: 200px;
      border-radius: 20px;
    }
  }
}
</style>