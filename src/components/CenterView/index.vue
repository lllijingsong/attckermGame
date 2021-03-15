<template>
  <div class="view-box">
    <div class="view-board-box">
      <ul>
        <li
          v-for="item in borderList"
          :key="item.id"
          :class="[
            item.className,
            item.form ? item.form : 'trigon',
            borderId === item.id ? 'border-item-active' : '',
          ]"
        > 
        <!-- <span>{{ item.id }}</span> -->
          <div class="arrows-item" v-if="item.arrows"></div>
          <transition name="el-fade-in-linear">
              <div
                v-show="borderId === item.id"
                :class="[borderId === item.id ? 'borderActive' : '']"
              ></div>
          </transition>
        </li>
      </ul>
    </div>

    <div class="control-btn" v-show="controlStatus">
      <el-button type="success" size="mini" @click="handleClickControl('play')"> 出牌 </el-button>
      <el-button type="success" size="mini" @click="handleClickControl('replace')"> 替换 </el-button>
      <el-button type="success" size="mini" @click="handleClickControl('pass')"> 跳过 </el-button>
    </div>
  </div>
</template>
<script>
/**
 *  棋盘格子组件；
 */
import Bus from "@/utils/Bus";
export default {
  props: {},
  data() {
    return {
      borderList: [],
      borderId: 1,
      controlStatus: false
    };
  },
  mounted() {
    Bus.$on("pockerHandleClick", (e) => {
      this.borderId = e;
    })
    this.borderInit();
    Bus.$on('controlBoxStatus', e => {
      this.controlStatus = e
    })
  },
  methods: {
    pockerChanged() {},
    borderInit() {
      let length = 49
      let arr = [];
      let include = [1, 14, 15, 28, 29, 42, 43];
      let arrows = [7, 8, 21, 22, 35, 36]
      let idList = [0, 1, 2, 3, 4, 5, 6, 7, 14, 13, 12, 11, 10, 9, 8, 15, 16, 17, 18, 19, 20, 21, 28, 27, 26, 25, 24, 23, 22, 29, 30, 31, 32, 33, 34, 35, 42, 41, 40, 39, 38, 37, 36, 43, 44, 45, 46, 47, 48, 49]
      const categories = [
        "Recon",
        "Weaponization",
        "Delivery",
        "Exploit",
        "Install",
        "C2",
        "Actions",
      ];
      let index = 0;
      for (let i = 1; i <= length; i++) {
        let obj = {
          id: idList[i],
          categories: categories[index],
          name: i + "-border",
          className: "border-item"

        }

        if (include.includes(i)) {
          obj['form'] = "square"
        } else if (i === length) {
          obj['form'] = ''
        } else {
          obj['form'] = "circle"
        }
        if (i % 7 === 0) {
          index += 1;
        }
        if (arrows.includes(i)) {
          obj['arrows'] = true
        } else {
          obj['arrows'] = false
        }
        arr.push(obj);
      }
      this.borderList = arr;
    },
    handleClickControl(str) {
      Bus.$emit('handleClickControl', str)
    }
  },
};
</script>
<style lang="less" scoped>
.view-box {
  position: relative;
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
      width: 700px;
      height: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      overflow: auto;
      .border-item {
        width: 70px;
        height: 70px;
        color: #fff;
        margin: 10px;
        display: flex;
        // overflow: hidden;
        justify-content: center;
        align-items: center;
        position: relative;
        .arrows-item {
          position: absolute;
          width: 1px;
          height: 30px;
          background-color: #fff;
          bottom: -40%;
          left: 50%;
        }
        .arrows-item::after {
          content: '';
          width: 1px;
          height: 10px;
          position: absolute;
          background-color: #fff;
          transform: rotate(-135deg);
          bottom: 0px;
          right: -4px;
        }
        .arrows-item::before {
          content: '';
          width: 1px;
          height: 10px;
          position: absolute;
          background-color: #fff;
          transform: rotate(135deg);
          left: -4px;
          bottom: 0px;
        }
      }
      .border-item::after {
        content: '';
        width: 60px;
        height: 60px;
        position: absolute;
        border-radius: 50%;
        // background-color: #fff;
        box-shadow: -1px -1px 1px #fbad80
      }
      .border-item-active {
        box-shadow: 2px 2px 14px #fbad80!important;
      }
      .circle {
        // border: 1px dashed #fff;
        box-shadow: 1px 1px 5px #fff;
        border-radius: 50%;
      }
      .square {
        box-shadow: 1px 1px 5px #fff;
        border-radius: 3px;
      }
      .trigon {
        width: 70px;
        height: 70px;
        position: relative;
        box-shadow: 1px 1px 14px gold;
        border-radius: 50%;
        // animation: aniCircle 1s linear infinite;
        overflow: hidden;
      }

      .trigon::after {
        content: '';
        width: 60px;
        height: 60px;
        position: absolute;
        border-radius: 50%;
        // background-color: #fff;
        box-shadow: -1px -1px 3px #fbad80
      }
      @keyframes aniCircle {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
      // .trigon::before {
      //   content: '';
      //   width: 35px;
      //   height: 35px;
      //   position: absolute;
      //   background-color: #000;
      // }
    }
  }
  .control-btn {
    position: absolute;
    right: 5px;
    bottom: 5px;
    // height: 60px;
    padding: 5px;
    box-shadow: 1px 1px 4px #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
  }

}
.view-board-box ul::-webkit-scrollbar {
  // display: none;
}
.view-board-box ul::-webkit-scrollbar {
  /*滚动条整体样式*/
  width : 10px;  /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}
.view-board-box ul::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
  background   : #535353;
}
.view-board-box ul::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background   : #ededed;
}
</style>
<style>
.borderActive {
  width: 60px;
  height: 60px;
  /* animation: borderAnimation 2s linear infinite; */
  transform-origin: bottom center;
  /* border: 1px solid #fff; */
  background-color: #fff;
  background: url("../../assets/soldier.png");
  background-repeat: no-repeat;
  background-size: 100%;

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

.control-btn  /deep/ .el-button--success {
  background-color: #111;
  border: none;
}
.control-btn  /deep/ .el-button--success:hover {
  background-color: #24292e;
  /* border: none; */
}
</style>
