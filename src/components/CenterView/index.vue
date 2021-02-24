<template>
  <div class="view-box">
    <div class="view-board-box">
      <div ref="moveBox" class="move-box"></div>
    </div>
  </div>
</template>
<script>
import Bus from '@/utils/Bus'
export default {
  data() {
    return {
      x: 213,
      y: 40
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
    // this.$refs.moveBox.style.left // 351px; 138
  },
  methods: {
    pockerChanged () {

    }
  },
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
    background: url("../../assets/border1.png") no-repeat 50% 50%;
    background-size: 70% 90%;
    position: relative;
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
