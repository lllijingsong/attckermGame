<template>
  <div class="control-main-box">
    <div class="control-main-log">
      <ul>
        <li>
          <div><i style="color: red">敌方:</i> xxxx卡 退后10步</div>
          <div><i style="color: yellow">我方:</i> xxxx卡 前进10步</div>
        </li>
        <li>
          <div><i style="color: red">敌方:</i> xxxx卡 退后10步</div>
          <div><i style="color: yellow">我方:</i> xxxx卡 前进10步</div>
        </li>
        <li>
          <div><i style="color: red">敌方:</i> xxxx卡 退后10步</div>
          <div><i style="color: yellow">我方:</i> xxxx卡 前进10步</div>
        </li>
        <li>
          <div><i style="color: red">敌方:</i> xxxx卡 退后10步</div>
          <div><i style="color: yellow">我方:</i> xxxx卡 前进10步</div>
        </li>
        <li>
          <div><i style="color: red">敌方:</i> xxxx卡 退后10步</div>
          <div><i style="color: yellow">我方:</i> xxxx卡 前进10步</div>
        </li>
        <li>
          <div><i style="color: red">敌方:</i> xxxx卡 退后10步</div>
          <div><i style="color: yellow">我方:</i> xxxx卡 前进10步</div>
        </li>
        <li>
          <div><i style="color: red">敌方:</i> xxxx卡 退后10步</div>
          <div><i style="color: yellow">我方:</i> xxxx卡 前进10步</div>
        </li>
      </ul>
    </div>
    <div class="control-main-poker">
      <ul>
        <li @click="pockerHandleClick(item)" v-for="(item, i) in pockerList" :key="i">{{ item.name }}</li>
      </ul>
    </div>
    <div class="control-main-user">
      <div class="user-info">
          <div class="user-info-icon"><img :src="userInfo.icon" alt="icon" /></div>
          <div class="user-info-name">{{ userInfo.name }}</div>
          <div class="user-control-box">
            <div><i class="el-icon-menu"></i></div>
            <div><i class="el-icon-s-finance"></i></div>
            <div><i class="el-icon-s-opportunity"></i></div>
            <div><i class="el-icon-s-custom"></i></div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import Bus from '@/utils/Bus'
export default {
  name: "MainControlBox",
  data() {
    return {
      userInfo: {
        name: "heker",
        icon:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3105495305,979369141&fm=26&gp=0.jpg",
      },
      pockerList: [
        { name: "1", id: '1', desciprtion: 'balabalabala' },
        { name: "2", id: '1', desciprtion: 'balabalabala' },
        { name: "3", id: '1', desciprtion: 'balabalabala' },
        { name: "4", id: '1', desciprtion: 'balabalabala' },
        { name: "5", id: '1', desciprtion: 'balabalabala' },
        { name: "7", id: '1', desciprtion: 'balabalabala' },
      ],
    };
  },
  methods: {
    pockerHandleClick(data) {
      Bus.$emit('pockerHandleClick', data)
    }
  }
};
</script>
<style scoped lang="less">
.control-main-box {
  width: 100%;
  height: 100%;
  border: 1px solid @mainBorder;
  box-sizing: border-box;
  background-color: @mainColor;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  .control-main-log {
    height: 100%;
    border-right: 1px solid @mainBorder;
    width: 15%;
    padding: 5px;
    box-sizing: border-box;
    color: @mainFontColor;
    overflow-y: auto;
  }
  .control-main-poker {
    height: 100%;
    border-right: 1px solid @mainBorder;
    width: 73%;
    ul {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px;
      box-sizing: border-box;
    }
    ul > li {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid @mainBorder;
      border-radius: 5px;
      margin: 0 2px;
      cursor: pointer;
      background-color: #79b8ff;
      box-shadow: 1px 1px 10px #79b8ff;
      transition: all 1s;
    }
    ul > li:hover {
      transform: translateY(-20px);
      color: #fff;
    }
  }
  .control-main-user {
    height: 100%;
    width: 12%;
    .user-info {
      width: 100%;
      height: 100%;
      padding: 5px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      .user-info-name {
        padding: 2px;
        color: @mainFontColor;
      }
      .user-info-icon {
        width: 70%;
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
  }
}
.control-main-log::-webkit-scrollbar {
  display: none;
}
</style>
