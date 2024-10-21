<template>
  <div class="itxst">
    <div class="group">
      <draggable class="container"
        :list="state.modules.group1" 
        ghost-class="ghost"
        handle=".move"
        filter=".forbid"
        :force-fallback="true"
        chosen-class="chosenClass"
        animation="300"
        @start="onStart"
        @end="onEnd"
        group="group1"
        :fallback-class="true"
        :fallback-on-body="true"
        :touch-start-threshold="20"
        :fallback-tolerance="20"
        :move="onMove"
      >
      <!-- :list="state.modules.group1" // 数据源
        ghost-class="ghost"          // 宿主样式
        handle=".move"               // 鼠标点击在那个元素上面才能拖拽
        filter=".forbid"             // 禁止拖拽的元素
        :force-fallback="true"       // 忽略HTML5的DnD行为,并强制退出
        chosen-class="chosenClass"   // 选中的样式
        animation="300"              // 动画效果
        @start="onStart"             // 开始拖拽事件
        @end="onEnd"                 // 结束拖拽事件  
        group="group1"               // 分组，相同的组名可以相互拖拽
        :touch-start-threshold="50"  // 交换间隔的大小，可以查看菜单对应的属性说明
        :move="onMove"               // 拖拽中事件，可以用来控制是否允许停靠 -->
        
        <template #item="{ element,index}" >
          <div :class="element.disabledMove ? 'forbid item' : 'item'" @click="onDraggableClick($event,index)">
            <!-- <label class="move">{{ element.name }}</label> -->
            <div class="move press">{{ element.name }}</div>
          </div>
        </template>
      </draggable>
    </div>
    <div class="group">
      <draggable class="container"
        :list="state.modules.group2"
        ghost-class="ghost"
        handle=".move"
        filter=".forbid"
        :force-fallback="true"
        chosen-class="chosenClass"
        animation="300"
        @start="onStart"
        @end="onEnd"
        group="group1"
        :fallback-class="true"
        :fallback-on-body="true"
        :touch-start-threshold="50"
        :fallback-tolerance="50"
        :move="onMove"
        @onChoose ="onDraggableClick($event,index)"
      >
        <template #item="{ element }"  >
          <div :class="element.disabledMove ? 'forbid item' : 'item2'" @click="onDraggableClick()">
            <!-- <label class="move">{{ element.name }}</label> -->
            <div class="move press">{{ element.name }}</div>
            <!-- <p>内容....</p> -->
          </div>
        </template>
      </draggable>
    </div>
  </div>
  <p>左侧数组</p>
  <div v-for="(item,index) in state.modules.group1" @click="leftClick(index)" :key="index" >
     {{item.name}}
  </div>
  <p>右侧数组</p>
  <div v-for="(item,index) in state.modules.group2" :key="index" >
     {{item.name}}
  </div>
</template>
<script setup>
import { reactive } from "vue";
//导入draggable组件
import draggable from "vuedraggable";

function leftClick(index){
  console.warn('index',index);
}
const onDraggableClick = (event,index) => {
  console.log("Draggable element clicked!",event)
  console.warn('index',index);
};
const state = reactive({
  /*工作台的数据结构
    disabledMove:禁止移动
    disabledPark:禁止停靠
  */
  modules: {
    group1: [
      { name: "硬件信息", id: 2, disabledMove: false, disabledPark: false },
      { name: "游戏工具", id: 3, disabledMove: false, disabledPark: false },
      { name: "加速服务", id: 4, disabledMove: false, disabledPark: false },
    ],
    group2: [
      { name: "压力测试", id: 5, disabledMove: false, disabledPark: false },
      { name: "录像", id: 6, disabledMove: false, disabledPark: false },
      { name: "截图", id: 7, disabledMove: false, disabledPark: false },
    ],
    group3: [
      { name: "Benchmark", id: 8, disabledMove: false, disabledPark: false },
      { name: "超能时刻", id: 9, disabledMove: false, disabledPark: false },
    ],
  },
});

//拖拽开始的事件
const onStart = () => {
  console.log("开始拖拽");
};

//拖拽结束的事件
const onEnd = () => {
  console.log("结束拖拽");
};

const onMove = (e) => {
  //不允许停靠
  if (e.relatedContext.element.disabledPark == true) return false;

  return true;
};
</script>
<style >
body {
  padding: 0px;
  margin: 0px;
  background-color: #f1f1f1;
}
.itxst {
  background-color: #f1f1f1;
  display: flex;
  justify-content: space-between;
  align-content: space-around;
  padding: 20px;
}

.group {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  width: 32%;
}
.item {
  border: solid 1px #ddd;
  padding: 0px;
  text-align: left;
  background-color: #fff;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  width: 150px;
  height: 100px;
  /* min-height: 260px; */
  user-select: none;
}

.item2 {
  border: solid 1px #ddd;
  padding: 0px;
  text-align: left;
  background-color: #fff;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  min-height: 10px;
  width: 120px;
  user-select: none;
}

.item > label {
  border-bottom: solid 1px #ddd;
  padding: 6px 10px;
  color: #333;
}
.item > label:hover {
  cursor: move;
}
.item > p {
  padding: 6px 10px;
  color: #666;
}
.ghost {
  border: solid 1px rgb(19, 41, 239) !important;
}
.chosenClass {
  opacity: 1;
  border: solid 1px red;
}
.fallbackClass {
  background-color: aquamarine;
}
.press{
  background-color: #333;
  width: 100%;
  height: 100%;
}
.container{
  display: flex;
  width: 300px;
}
</style>