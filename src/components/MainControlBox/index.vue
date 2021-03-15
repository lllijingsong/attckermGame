<template>
  <div class="control-main-box">
    <div class="control-main-log">
      <ul>
        <li v-for="(item, i) in gameLog" :key="item.id">
        <!-- <li> -->
          <div><i>{{i}}</i>: {{ item.msg }}</div>
          <!-- <div><i style="color: red">敌方:</i> xxxx卡 退后10步</div>
          <div><i style="color: yellow">我方:</i> xxxx卡 前进10步</div> -->
        </li>
      </ul>
    </div>
    <div class="control-main-poker">
      <ul>
          <li @click="pockerHandleClick(item, i)" v-for="(item, i) in pockerList" :key="i" :class="[ i === pokerInd ? 'li-active' : '' ]">
            <div>
              <h6>{{ item.id }}</h6>
              <span>代价: {{ item.cost }}</span>
              <span>移动步数: {{ item.moves.move }}</span>
              <!-- <span>moveRound: {{ item.moves.moveRound }}</span> -->
              <span>适用阶段: {{ item.categories || [] }}</span>
              <span class="items-description">
                描述信息：{{ item.description }}
              </span>
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
    </div>
  </div>
</template>
<script>
/**
 *  日志组件
 */
// import { test, getAttackPoker, getDefensivePoker } from '@/api'
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
      pockerList: [],
      gameLog: [],
      wsStatus: true, // ws 状态， true 启动， false 关闭;
      pokerInd: -1, 
      // pokerStatus: 'li-add',
      pokerItemNow: {}, // 当前选中的卡牌
      // controlBoxStatus: false,
      mapList: {
        Recon: { min: 1, max: 7 },
        Weaponization: { min: 8, max: 14 },
        Delivery: { min: 15, max: 21 },
        Exploit: { min: 22, max: 28 },
        Install: { min: 29, max: 35 },
        C2: { min: 36, max: 42 },
        Actions: { min: 43, max: 49 },
      },
      pointPosition: 1, // 当前点位
    };
  },

  mounted() {
    let name = localStorage.getItem('identity')
    this.socket = new WebSocket(`ws://172.20.10.4:3000/ws`)
    this.socket.onopen = e => {
      this.socket.send(JSON.stringify({ api: 'setId', id: name === '攻击者' ? 'at' : 'dt' }))
    }
    this.socket.onmessage = e => {
      let msg = JSON.parse(e.data)
      
      if (msg.api === 'initPoker') {
        this.pockerList = msg.handPokers
        return
      } else if (msg.api === 'one') {
        this.pockerList.push(msg.one)
        return
      } else if (msg.api === 'record') {
        this.$emit('message', msg)
        return
      } else if (msg.api === 'gameover') {
        this.wsStatus = false
        this.socket.close()
        if (msg.winner === 'at' && name === '攻击者') {
          this.$message({ showClose: true, message: '你赢了!!!', type: 'success' })
        } else if (msg.winner === 'dt' && name === '防御者') {
          this.$message({ showClose: true, message: '你赢了!!!', type: 'success' })
        } else {
          this.$message({ showClose: true, message: '你输了！！！', type: 'error'})
        }
        return
      } else if (msg.api === 'status') {
        Bus.$emit('controlBoxStatus', msg.status)
        return
      }
      Bus.$emit("pockerHandleClick", msg.pointPosition);
      this.pointPosition = msg.pointPosition
      this.gameLog.push(msg['log'])
    }

    Bus.$on('handleClickControl', e => {
      switch (e) {
        case ('play'): // 出牌
          this.pokerPlay()
        break;
        case ('pass'): // 跳过
          let name = localStorage.getItem('identity') === '攻击者' ? 'at' : 'dt'
          this.socket.send(JSON.stringify({ api: 'pass', id: name, status: false }))
        break;
        case ('replace'): // 替换
          this.pokerReplace()
        break
      }
    })

  },
  methods: {
    pockerHandleClick(data, i) {
      this.pokerInd = i
      let name = localStorage.getItem('identity')
      data['api'] = 'setStep'
      data['name'] = name === '攻击者' ? 'at' : 'dt'
      this.pokerItemNow = data
      // return
      // if (this.wsStatus) {
      //   let name = localStorage.getItem('identity')
      //   data['api'] = 'setStep'
      //   data['name'] = name === '攻击者' ? 'at' : 'dt'

      //   this.pokerInd = i
      //   setTimeout(() => {
      //     this.socket.send(JSON.stringify(data))
      //     this.pockerList.splice(i, 1)
      //     this.pokerInd = -1
      //   }, 500);
      // }
    },
    pokerPlay() {
      if (Object.keys(this.pokerItemNow).length !== 0) {
        let cate = this.pokerItemNow.categories
        let inside = { min: 100, max: 7 }
        if (Array.isArray(cate)) {
          cate.forEach(v => {
            if (inside.min > this.mapList[v].min) {
              inside.min = this.mapList[v].min
            }
            if (inside.max < this.mapList[v].max) {
              inside.max = this.mapList[v].max
            }
          })
        }
        if (this.pointPosition <= inside.max && this.pointPosition >= inside.min) {
          let name = localStorage.getItem('identity') === '攻击者' ? 'at' : 'dt'
          this.socket.send(JSON.stringify({ api: 'pass', id: name, status: false }))
          this.socket.send(JSON.stringify(this.pokerItemNow))
          this.pockerList.splice(this.pokerInd, 1)
          this.pokerInd = -1
          this.pokerItemNow = Object.create(null)
        } else {
          this.$message.error('请选择对应阶段的卡牌！！！')
          return
        }
      } else {
        this.errorMsg()
      }
    },
    pokerReplace() {
      if (Object.keys(this.pokerItemNow).length !== 0) {
        this.pockerList.splice(this.pokerInd, 1)
        this.pokerInd = -1
        let name = localStorage.getItem('identity') === '攻击者' ? 'at' : 'dt'
        this.socket.send(JSON.stringify({ api: 'replace', name: name}))
      } else {
        this.errorMsg()
      }
    },
    errorMsg() {
      this.$message.error('请选择一张卡牌')
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
      // justify-content: space-between;
      align-items: center;
      padding: 5px;
      box-sizing: border-box;
    }
    ul > li {
      height: 100%;
      width: 160px;
      border: 1px solid @mainBorder;
      border-radius: 5px;
      margin: 0 2px;
      cursor: pointer;
      background-color: #0e1711;
      box-shadow: 2px 2px 15px #595d5f;
      transition: all 0.5s;
      overflow: hidden;
      position: relative;
      padding: 5px;
      box-sizing: border-box;
      color: #fff;
      div {
        width: 100%;
        height: 100%;
        h6 {
          text-align: center;
          font-weight: 700;
          font-size: 16px;
        }
        span {
          display: block;
          padding: 2px 0px;
        }
        p {
          display: block;
        }
        .items-description {
          // border: 1px solid #000;
        }
      }
    }
    ul > li:hover {
      transform: translateY(-20px);
      // color: #fff;
      // animation: remvoePoker 0.5s linear;
    }
    .li-remove {
      animation: remvoePoker 0.5s linear;
    }
    .li-add {
      animation: addPoker 0.5s linear;
    }
    .li-active {
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
          i:hover {
            color: red;
          }
        }
      }
    }
  }
}
.control-main-log::-webkit-scrollbar {
  display: none;
}
.control-main-log::-webkit-scrollbar {
  /*滚动条整体样式*/
  width : 10px;  /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}
.control-main-log::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
  background   : #535353;
}
.control-main-log::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background   : #ededed;
}
</style>
<style>
  @keyframes remvoePoker {
    form {
      transform: translateY(-50px);
    }
    to {
      transform: translateY(-250px);
      opacity: 0.1;
    }
  }
  @keyframes addPoker {
    form {
      transform: translateY(-200px);
      opacity: 0.1;
    }
    to {
      transform: translateY(0px);
      opacity: 1;
    }
}
</style>
