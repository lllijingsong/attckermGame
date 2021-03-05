<template>
  <div class="control-main-box">
    <div class="control-main-log">
      <ul>
        <!-- <li v-for="item in gameLog" :key="item.id"> -->
        <li>
          <div><i style="color: red">敌方:</i> xxxx卡 退后10步</div>
          <div><i style="color: yellow">我方:</i> xxxx卡 前进10步</div>
        </li>
      </ul>
    </div>
    <div class="control-main-poker">
      <ul>
        <li @click="pockerHandleClick(item)" v-for="(item, i) in pockerList" :key="i">
          <div>
            <h6>{{ item }}</h6>
            <span>cost: {{ item.cost }}</span>
            <span>move: {{ item.move }}</span>
            <p>desciprtion: {{ item.desciprtion }}</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="control-main-user">
      <div class="user-info">
        <!-- <div class="user-info-icon"><img :src="'../../assets/'+ userInfo.img" alt="icon" /></div> -->
        <div class="user-info-icon">
          <img :src="require('../../assets/' + userInfo.img)" draggable="false" />
        </div>
        <div class="user-info-name">{{ userInfo.identity }}</div>
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
/**
 *  日志组件
 */
import Bus from "@/utils/Bus";
export default {
  name: "MainControlBox",
  props: {
    userInfo: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {
      // gameLog: [
      //   { id: 0, }
      // ],
      // userInfo: {
      //   name: "heker",
      //   icon:
      //     "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3105495305,979369141&fm=26&gp=0.jpg",
      // },
      pockerList: [
        {
          name: "1",
          cost: 10,
          move: 4,
          cate: ["Exploit", "Install", "C2"],
          id: "AT001",
          desciprtion:
            "Multiple Footholds: Split into 2 games pieces and play new piece from beginning as a new piece",
        },
        {
          name: "2",
          cost: 10,
          move: 3,
          cate: ["Exploit", "Install", "C2"],
          id: "AT002",
          desciprtion: "balabalabalasadsadsdsadsadsadsadsadsadsa",
        },
        {
          name: "3",
          cost: 10,
          move: 2,
          cate: ["Exploit", "Install", "C2"],
          id: "AT003",
          desciprtion: "balabalabalasadsadsdsadsadsadsadsadsadsa",
        },
        {
          name: "4",
          cost: 10,
          move: 5,
          cate: ["Exploit", "Install", "C2"],
          id: "AT004",
          desciprtion: "balabalabalasadsadsdsadsadsadsadsadsadsa",
        },
        {
          name: "5",
          cost: 10,
          move: 1,
          cate: ["Exploit", "Install", "C2"],
          id: "AT005",
          desciprtion: "balabalabalasadsadsdsadsadsadsadsadsadsa",
        },
        {
          name: "7",
          cost: 10,
          move: 2,
          cate: ["Exploit", "Install", "C2"],
          id: "AT006",
          desciprtion: "balabalabalasadsadsdsadsadsadsadsadsadsa",
        },
        {
          name: "7",
          cost: 10,
          move: 2,
          cate: ["Exploit", "Install", "C2"],
          id: "AT007",
          desciprtion: "balabalabalasadsadsdsadsadsadsadsadsadsa",
        },
      ],
    };
  },
  methods: {
    pockerHandleClick(data) {
      Bus.$emit("pockerHandleClick", data);
    },
  },
  mounted() {
    const card = [
      "AT001",
      "AT002",
      "AT003",
      "AT004",
      "AT005",
      "AT006",
      "AT007",
      "AT008",
      "AT009",
      "AT010",
      "AT011",
      "AT012",
      "AT013",
      "AT014",
      "AT015",
      "AT016",
      "AT017",
      "AT018",
      "AT019",
      "AT020",
      "AT021",
      "AT022",
      "AT023",
      "AT024",
      "AT025",
      "AT026",
      "AT027",
      "AT028",
      "AT029",
      "AT030",
      "AT031",
      "AT032",
      "AT033",
      "AT034",
      "AT035",
      "AT036",
      "AT037",
      "AT038",
      "AT039",
      "AT040",
      "AT041",
      "AT042",
      "AT043",
      "AT044",
      "AT045",
      "AT046",
      "AT047",
      "AT048",
      "AT049",
      "AT050",
      "AT051",
      "AT052",
      "AT053",
    ];

    const aLive = [];
    function ramCard(arr) {
      let lenth = arr.length;
      let cards = [];
      if (Array.isArray(arr)) {
        for (let i = 1; i <= 7; i++) {
          let id = arr[ram(1, lenth)];
          if (!cards.includes(id)) {
            cards.push(id);
          } else {
            i--;
          }
        }
      }
      return cards;
    }

    function ram(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    this.pockerList = ramCard(card)
  },
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
      // justify-content: space-between;
      align-items: center;
      padding: 5px;
      box-sizing: border-box;
    }
    ul > li {
      height: 100%;
      width: 150px;
      border: 1px solid @mainBorder;
      border-radius: 5px;
      margin: 0 2px;
      cursor: pointer;
      background-color: #79b8ff;
      box-shadow: 1px 1px 10px #79b8ff;
      transition: all 0.5s;
      overflow: hidden;
      position: relative;
      div {
        width: 100%;
        height: 100%;
        // padding: 10px;
        h6 {
          text-align: center;
        }
        span {
          display: block;
        }
        p {
          display: block;
        }
      }
    }
    ul > li:hover {
      transform: translateY(-30px);
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
        border-radius: 50%;
        overflow: hidden;
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
