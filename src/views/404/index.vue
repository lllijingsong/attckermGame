<template>
  <div class="box">
    <div id="container" ref="container">
      <div class="content">
        <h2>404</h2>
        <h4>Opps! Page not found</h4>
        <!-- <p>
          2013年，404 Not
          Found成为中国大陆的网络热词。在中国，404被大部分网民普遍用作网站被防火长城屏蔽的代名词。而事实上，由于防火长城一般的封锁方法是向连接两端的计算机发送RST（Reset）数据包干扰两者间正常的TCP连接，被防火长城屏蔽的网站无法回复任何HTTP状态码，最常见的错误信息是“连接已被重置”。
        </p> -->
        <p>404</p>
        <a style="cursor: pointer;" @click="reset"> Back To Home </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    // 根据id获取元素
    const container = this.$refs.container
    // 窗口的鼠标移动事件,传入event对象
    window.onmousemove = function (e) {
      let x = e.clientX / 5,
        y = e.clientY / 5;
      // 将容器的背景图片定位进行修改
      container.style.backgroundPositionX = x + "px";
      container.style.backgroundPositionY = y + "px";
    };
  },
  methods: {
      reset() {
          this.$router.push({ path: '/' })
      }
  }
};
</script>
<style scoped lang="less">
.box {
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #8500ff, #5acaff);
  position: relative;
}
#container {
  position: absolute;
  /*绝对定位*/
  top: 10%;
  /*距上部*/
  left: 10%;
  right: 10%;
  bottom: 10%;
  border-radius: 10px;
  /*圆角边框*/
  display: flex;
  /*弹性盒模型*/
  justify-content: center;
  /*主轴对齐方式*/
  align-items: center;
  /*交叉轴对齐方式*/
  background: url("../../assets/bg.jpg"), #151729;
  /*背景图片，颜色*/
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
  /*背景阴影*/
}

#container .content {
  max-width: 600px;
  /*最大宽度*/
  text-align: center;
  /*字体行居中*/
}

#container .content h2 {
  font-size: 18vw;
  /*字体大小*/
  color: #000;
  line-height: 1em;
  /*行高*/
}

#container .content h4 {
  position: relative;
  font-size: 1.5em;
  margin-bottom: 20px;
  color: #000;
  /* background: #fff; */
  opacity: 0.1;
  font-weight: 300;
  padding: 10px 20px;
  display: inline-block;
  /*行内盒模型*/
}

#container .content p {
  color: #000;
  font-size: 1.2em;
}

#container .content a {
  position: relative;
  display: inline-block;
  padding: 10px 25px;
  background: #ff0562;
  color: #000;
  text-decoration: none;
  margin-top: 25px;
  border-radius: 25px;
  border-bottom: 4px solid #d00d56;
  /*下边框*/
  user-select: none;
}
</style>
