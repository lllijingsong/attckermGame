<template>
  <div class="other-user-views">
      <div class="other-user-icon">
          <img :src="otherUserData.icon" alt="icon">
      </div>
      <div class="other-user-name">{{ otherUserData.name }}</div>
      <div class="user-control-box">
        <div><i class="el-icon-menu"></i></div>
        <div><i class="el-icon-s-finance"></i></div>
        <div><i class="el-icon-s-opportunity"></i></div>
        <div><i class="el-icon-s-custom"></i></div>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        otherUserData: {
          name: '防御方',
          icon: 'https://ss1.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/baike/pic/item/a6efce1b9d16fdfa7b6c42dabe8f8c5494ee7b86.jpg',
          message: '我是猪刚烈我是猪刚烈我是猪刚烈我是猪刚烈我是猪刚烈我是猪刚烈我是猪刚烈我是猪刚烈我是猪刚烈我是猪刚烈我是猪刚烈'
        }
    }
  },
  methods: {

  }
}
</script>
<style scoped lang="less">
  .other-user-views {
    width: 100%;
    height: 40%;
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
      img {
        width: 100%;
      }
    }
    .user-control-box {
      display: flex;
      justify-content: space-between;
      color: @mainFontColor;
      div {
        padding: 6px;
        cursor: pointer;
        font-size: 18px;
      }
    }
  }

</style>