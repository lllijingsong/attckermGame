<template>
  <div :class="['backgroundImg']">
    <div class="select-box">
      <header class="header-nav">
        <div
          class="outSide-nav"
          v-ChangeItem="{
            ind,
            activeClass: 'active',
            className: 'inSide-nav',
          }"
        >
          <div
            class="inSide-nav"
            v-for="(item, index) in diffList"
            :key="index"
            @click="changeInd(index)"
          >
            {{ item.name }}
          </div>
        </div>
      </header>
    </div>
  </div>
</template>
<script>
import ChangeItem from "@/directive/ChangeItem";
export default {
  directives: {
    ChangeItem,
  },
  name: "Login",
  data() {
    return {
      ind: 1,
      userForm: {
        name: "",
        password: "",
      },
      diffList: [
        { id: 1, name: "简单" },
        { id: 2, name: "中等" },
        { id: 3, name: "困难" },
      ],
    };
  },
  methods: {
    changeInd(index) {
      this.ind = index;
    },
  },
};
</script>
<style lang="less" scoped>
.backgroundImg {
  width: 100%;
  height: 100vh;
  background: url("https://cdn.pixabay.com/photo/2019/03/08/21/13/record-4043223_1280.jpg")
    no-repeat;
  background-size: 110% 100%;
  display: flex;
  justify-content: center;
}
.select-box {
    margin: 10em auto;

  .header-nav {
    width: 50%;
    height: 50px;
    margin: 10px auto;
    border: 2px solid #000;
    .outSide-nav {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .inSide-nav {
        height: 100%;
        font-size: 18px;
        flex: 1;
        color: #000;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }

      .active {
        background: linear-gradient(45deg, #cecece, #000);
        color: #fff;
      }
    }
  }
}
</style>
