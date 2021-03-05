<template>
  <div id="app" class="scrollbar">
    <!-- <transition name="el-fade-in-linear"> -->
      <router-view />
    <!-- </transition> -->
  </div>
</template>
<style scoped lang="less">
#app {
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  background-color: @mainColor;
  min-width: 1290px;
  // min-height: 660px;
  overflow: auto;
  // border: none;
}
// .scrollbar {
//   width: 30px;
//   height: 300px;
//   margin: 0 auto;
// }

// .scrollbar::-webkit-scrollbar {
//   /*滚动条整体样式*/
//   width: 10px; /*高宽分别对应横竖滚动条的尺寸*/
//   height: 1px;
// }

// .scrollbar::-webkit-scrollbar-thumb {
//   /*滚动条里面小方块*/
//   border-radius: 10px;
//   -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);

//   background: #535353;
// }

// .scrollbar::-webkit-scrollbar-track {
//   /*滚动条里面轨道*/
//   -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
//   border-radius: 10px;
//   background: #ededed;
// }
</style>
