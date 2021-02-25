<template>
  <div class="view-box">
    <div class="view-board-box">
      <ul>
        <li v-for="item in borderList" :key="item.id" :class="[item.className, item.form === 'circle'? 'circle' : 'square']">
          <transition name="el-fade-in-linear">
            <div v-show="borderId === item.id" :class="[borderId === item.id ? 'borderActive' : '']"></div>
          </transition>
        </li>
      </ul>
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
      borderList: [],
      borderId: 1,
    };
  },
  mounted() {
    Bus.$on('pockerHandleClick', e => {
      this.borderId += 1
      // this.x += 138;
      // this.$refs.moveBox.style.left = this.x + 'px';
      // if (this.x > 1041) {
      //   this.x = 213;
      //   this.y += 110
      //   this.$refs.moveBox.style.left = this.x + 'px';
      //   this.$refs.moveBox.style.top = this.y + 'px';
      // }
    })
    this.borderInit()
    // this.$refs.moveBox.style.left // 351px; 138
  },
  methods: {
    pockerChanged () {

    },
    borderInit() {
      let arr = []
      let include = [1, 14, 15, 28, 29, 42]
      for(let i = 1; i <= 42; i++) {
        let obj = {}
        if (include.includes(i)) {
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
    display: flex;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    ul {
      width: 650px;
      height: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .border-item {
        width: 60px;
        height: 60px;
        color: #fff;
        margin: 10px;
        display: flex;
        // justify-content: center;
        // align-items: center;
        overflow: hidden;
        // background-color: pink;
      }
      .circle {
        border: 1px dashed #fff;
        border-radius: 50%;
      }
      .square {
        border: 1px dashed #fff;
        border-radius: 3px;
      }
    }
    .move-box {
      width: 65px;
      height: 50px;
      background: url('../../assets/User.png') no-repeat;
      background-size: 100% 90%;
      position: absolute;
      left: 213px;
      z-index: 1111;
      top: 40px;
      transition: all 0.5s linear;
    }
  }
}
</style>
<style>
    .borderActive {
      width: 60px;
      height: 60px;
      /* animation: borderAnimation 2s linear infinite; */
      transform-origin: bottom center;
      border: 1px solid #fff;
      background-color: #fff;
      background: url('../../assets/soldier.png');
      background-repeat: no-repeat;
      background-size: 100%;
      /*
        transform-origin: bottom center;
        border: 1px solid #fff;
        background: url(https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2439927042,2745230643&fm=26&gp=0.jpg);
        background-size: 100% 100%;
        background-repeat: no-repeat;
        display: flex;
        justify-content: center;
        align-items: center;
       */
    }
    @keyframes borderAnimation {
      from {
        transform: scale(1);
        background-color: pink;
      }

      to {
        transform: scale(2);
        background-color: red;
      }
  }
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
</style>
