<template>
  <div class="other-user-views">
      <div class="other-user-icon">
          <img :src="require('../../assets/'+ otherUserInfo.img)" draggable="false" alt="icon">
      </div>
      <div class="other-user-name">{{ otherUserInfo.identity }}</div>
      <div class="user-control-box">
        <div>
          <el-tooltip effect="dark" content="菜单" placement="top">
            <i class="el-icon-menu"></i>
          </el-tooltip>
        </div>
        <div>
          <el-tooltip effect="dark" content="菜单" placement="top">
            <i class="el-icon-s-finance"></i>
          </el-tooltip>
        </div>
        <div>
          <el-tooltip effect="dark" content="菜单" placement="top">
            <i class="el-icon-s-opportunity"></i>
          </el-tooltip>
        </div>
        <div>
          <el-tooltip effect="dark" content="菜单" placement="top">
            <i class="el-icon-s-custom"></i>
          </el-tooltip>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  props: {
    otherUserInfo: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
    }
  },
  methods: {

  },
  created() {
  }
}
</script>
<style scoped lang="less">
  .other-user-views {
    width: 100%;
    height: 30%;
    background-color: @mainColor;
    box-sizing: border-box;
    padding: 5px;
    color: @mainFontColor;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border-bottom: 1px solid @mainBorder;
    .other-user-name {
      padding: 2px;
      color: @mainFontColor;
    }
    .other-user-icon {
      width: 100px;
      padding: 5px;
      // border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    .user-control-box {
      display: flex;
      justify-content: space-between;
      color: @mainFontColor;
      box-sizing: border-box;
      div {
        padding: 6px;
        cursor: pointer;
        font-size: 18px;
        box-sizing: border-box;
        i:hover {
          // border: 1px solid yellow;
          color: red;
        }
      }
    }
  }

</style>