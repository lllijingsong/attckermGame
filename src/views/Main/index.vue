<template>
  <div class="main-box">
    <div class="main-box-top">
      <CenterView></CenterView>
      <div class="main-top-right">
        <UserViews :otherUserInfo="otherUserInfo"></UserViews>
        <div class="user-integral">
          <div style="color: red">历史金额： {{ record.before }}</div>
          <div style="color: red">当前金额： {{ record.money }}</div>
          <!-- <div style="color: red">剩余卡牌： {{ record.poker }}</div> -->
        </div>
        <hr/>
        <div class="user-cate-cover">
          <div class="user-cate">
            <div class="cate-title">阶段详情</div>
            <template>
              <div v-for="item in pokerStage" :key="item.id" :class="[ item.id === atStage ? 'cate-active' : '', 'cate-items' ]">{{ item.msg }}</div>
            </template>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-box">
      <MainControlBox :userInfo="userInfo" @message="message"></MainControlBox>
    </div>
  </div>
</template>
<script>

// import deepClone from '@/utils'
import MainControlBox from "@/components/MainControlBox";
import UserViews from "@/components/UserViews";
import CenterView from "@/components/CenterView";
import Bus from '@/utils/Bus'
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
      record: {
        before: 0,
        money: 0,
        poker: 0,
      },
      pokerStage: [
        { id: 1, msg: '阶段一：Recon (侦察)' },
        { id: 2, msg: '阶段二：Weaponization:  (武器化)' },
        { id: 3, msg: '阶段三：Delivery:  (投送)' },
        { id: 4, msg: '阶段四：Exploit:  (利用)' },
        { id: 5, msg: '阶段五：Install:  (安装)' },
        { id: 6, msg: '阶段六：C2:  (指控)' },
        { id: 7, msg: '阶段七：Actions:  (目标)' }
      ],
      atStage: 1,
    };
  },
  methods: {
    handleClick() {
      // test().then((res) => {
      // });
    },
    message(data) {
      // console.log(data, 'xxxx')
      this.record = data.record
    }
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
  },
  mounted() {
    Bus.$on('pockerHandleClick', e => {
      // console.log(e, 'pockerHandleClick')
      this.atStage = Math.ceil(Number(e) / 7)
    })
    // let socket = new WebSocket(`ws://localhost:3000/ws`)
    // socket.onopen = e => {
    //   console.log(e)
    //   socket.send('123')
    // }
    // socket.onmessage = e => {
    //   console.log(e)
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
        padding: 10px;
        color: @mainFontColor;
      }
      .user-cate {
        box-sizing: border-box;
        padding: 10px;
        color: @mainFontColor;
        height: 250px;
        overflow: auto;
        .cate-title {
          font-size: 16px;
          font-weight: 700;
          padding: 5px 0px;
        }
        .cate-items {
          padding: 5px 0px 5px;
        }
        .cate-active {
          color: yellow;
        }
      }
    }
  }
  .footer-box {
    margin-top: 5px;
    width: 100%;
    height: 25%;
  }
}
.user-cate::-webkit-scrollbar {
  // display: none;
}
.user-cate::-webkit-scrollbar {
  /*滚动条整体样式*/
  width : 10px;  /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}
.user-cate::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
  background   : #535353;
}
.user-cate::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background   : #ededed;
}
</style>
