<template>
  <div class="main-box">
    <div class="main-box-top">
      <CenterView></CenterView>
      <div class="main-top-right">
        <UserViews :otherUserInfo="otherUserInfo"></UserViews>
        <div class="user-integral">
          <div>耗损： 100</div>
          <div>剩余卡牌： 10</div>
          <div>当前进度： 10</div>
        </div>
      </div>
    </div>
    <div class="footer-box">
      <MainControlBox :userInfo="userInfo"></MainControlBox>
    </div>
  </div>
</template>
<script>
// import deepClone from '@/utils'
import MainControlBox from "@/components/MainControlBox";
import UserViews from "@/components/UserViews";
import CenterView from "@/components/CenterView";
export default {
  name: "Home",
  components: {
    MainControlBox,
    UserViews,
    CenterView,
  },
  data() {
    return {
      userInfo: {},
      otherUserInfo: {},
    };
  },
  methods: {
    handleClick() {
      test().then((res) => {
      });
    },
  },
  created() {
    let identity = localStorage.getItem('identity')
    this.userInfo = identity === '攻击者' ?  { identity:"攻击者", img:"heker.jpg", name:"admin" } : { identity: '防御方', img: 'honker.jpg', name: 'admin' }
    this.otherUserInfo = identity !== '攻击者' ? { identity:"攻击者", img:"heker.jpg", name:"admin" } : { identity: '防御方', img: 'honker.jpg', name: 'admin' }
    // if (identity === '攻击者') {
    //   this.userInfo =  { identity:"攻击者", img:"heker.jpg", name:"admin" }
    //   this.otherUserInfo = { identity: '防御方', img: 'honker.jpg', name: 'admin' }
    // } else {
    //   this.userInfo = { identity: '防御方', img: 'honker.jpg', name: 'admin' }
    //   this.otherUserInfo = { identity:"攻击者", img:"heker.jpg", name:"admin" }
    // }
  }
};
</script>
<style scoped lang="less">
.main-box {
  width: 100%;
  height: 100%;
  .main-box-top {
    width: 100%;
    height: 74%;
    display: flex;
    .main-top-right {
      width: 15%;
      height: 100%;
      box-sizing: border-box;
      padding: 5px;
      border-bottom: 1px solid @mainBorder;
      .user-integral {
        width: 100%;
        box-sizing: border-box;
        padding: 5px;
        color: @mainFontColor;
      }
    }
  }
  .footer-box {
    margin-top: 5px;
    width: 100%;
    height: 25%;
  }
}
</style>
