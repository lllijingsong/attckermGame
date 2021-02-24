<template>
  <div class="view-box">
    <div class="view-board-box">
      <ul>
        <li v-for="item in borderList" :key="item.id" :class="[item.className, item.form === 'circle'? 'circle' : 'square' ]">{{ item.id }}</li>
      </ul>
      <!-- <div>
        <img class="border-item" src="../../assets/border1.png" alt="">
        <ul>
          <li ></li>
        </ul>
        <div ref="moveBox" class="move-box"></div>
      </div> -->
    </div>
  </div>
</template>
<script>
import Bus from '@/utils/Bus'
export default {
  data() {
    return {
      x: 213,
      y: 40,
      borderList: []
    };
  },
  mounted() {
    Bus.$on('pockerHandleClick', e => {
      this.x += 138;
      this.$refs.moveBox.style.left = this.x + 'px';
      if (this.x > 1041) {
        this.x = 213;
        this.y += 110
        this.$refs.moveBox.style.left = this.x + 'px';
        this.$refs.moveBox.style.top = this.y + 'px';
      }
    })
    this.borderInit()
    // this.$refs.moveBox.style.left // 351px; 138
  },
  methods: {
    pockerChanged () {

    },
    borderInit() {
      let arr = []
      for(let i = 1; i <= 42; i++) {
        let obj = {}
        if (i % 7 === 0) {
          obj = {
            id: i,
            name: i + '-border',
            className: 'border-item',
            form: 'square'
          }
        } else {
          obj = {
            id: i,
            name: i + '-border',
            className: 'border-item',
            form: 'circle'
          }
        }
        arr.push(obj)
      }
      this.borderList = arr
    }
  },
  // computed: {
  //   borderInit() {
  //     return 
  //   }
  // }
};
</script>
<style lang="less" scoped>
.view-box {
  width: 85%;
  height: 100%;
  border-right: 1px solid @mainBorder;
  border-bottom: 1px solid @mainBorder;
  box-sizing: border-box;
  // padding: 5px;
  background: url("../../assets/worldBackground.jpg") no-repeat;
  background-size: 100% 123%;
  opacity: 1;
  .view-board-box {
    width: 100%;
    height: 100%;
    padding: 5px;
    display: flex;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
    ul {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .border-item {
        width: 50px;
        height: 50px;
        // background-color: pink;
      }
      .circle {
        border: 1px solid #fff;
        border-radius: 50%;
      }
      .square {
        border: 1px solid #fff;
        border-radius: 3px;
      }
    }
    .move-box {
      width: 65px;
      height: 50px;
      background: url('../../assets/User.png') no-repeat;
      background-size: 100% 90%;
      position: absolute;
      // left: 213px;
      left: 213px;
      z-index: 1111;
      top: 40px;
      transition: all 0.5s linear;
    }
  }
}
</style>
