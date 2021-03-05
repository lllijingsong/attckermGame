<template>
  <div :class="['backgroundImg']">
    <!-- <div class="login-form">
            <div class="login-form-icon">

            </div>
            <div class="login-form-items">
                <span>userName: </span>
                <el-input v-model="userForm.name" size="mini" placeholder="Please input your user name" type="text" style="width: 77%"/>
            </div>
            <div class="login-form-items">
                <span>userPassword: </span>
                <el-input v-model="userForm.password" size="mini" placeholder="Please input password" type="text" show-password style="width: 77%"/>
            </div>
            <el-button size="mini" @click="handleLoginClick" style="width: 100%;">Login</el-button>
        </div> -->
    <div class="login-form">
        <img src="../../assets/logo.png" class="form-logo">
        <p>网络杀伤链兵棋系统</p>
      <el-form ref="userForm" :model="userForm" :rules="rules">
        <div class="form-input">
            <el-form-item prop="name">
                <el-input
                class="login-text"
                 v-model="userForm.name"
                type="text"
                placeholder="请输入账号"
            ></el-input>
            <div class="form-inpt-icon">
                <i class="el-icon-mobile"></i>
            </div>
            </el-form-item>
        </div>
        <div class="form-input">
          <el-form-item prop="password">
              <el-input
                class="login-text"
                v-model="userForm.password"
                type="text"
                placeholder="请输入账号密码"
                show-password
            ></el-input>
              <div class="form-inpt-icon">
                  <i class="el-icon-lock"></i>
              </div>
          </el-form-item>

        </div>
        <div class="form-input">
          <el-form-item>
            <el-radio-group class="select-radio" size="mini" v-model="selectDiff">
            <!-- <el-radio-button label="简单"></el-radio-button>
            <el-radio-button label="中等"></el-radio-button>
            <el-radio-button label="困难"></el-radio-button> -->
            <el-radio-button label="攻击者"></el-radio-button>
            <el-radio-button label="防御者"></el-radio-button>
            <el-radio-button label="观众"></el-radio-button>
          </el-radio-group>
          </el-form-item>
        </div>
        <div class="form-input">
            <el-form-item>
                <el-button @click="handleLoginClick" style="width: 100%;" type="success"> Login </el-button>
            </el-form-item>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      backgroundImgNum: 1,
      userForm: {
        name: "admin",
        password: "123",
      },
      rules: {
        name: [{ required: true, message: '手机号都没有！', trigger: 'blur' }],
        password: [{ required: true, message: '密码呢！', trigger: 'blur' }]
      },
      selectDiff: '攻击者'
    };
  },
  methods: {
    handleLoginClick() {
      localStorage.setItem('userName', this.userForm.name)
      localStorage.setItem('identity', this.selectDiff)
      let name = localStorage.getItem('userName')
      let ident = localStorage.getItem('identity')

      this.$store.dispatch('setUser', { name: name, identity: ident, img: ident === '攻击者' ? 'heker.jpg' : 'honker.jpg' })

      switch (ident) {
        case '攻击者':
          if (name && this.userForm.password !== '') this.$router.push({ path: "/Attacker" })
          return
        case '防御者':
          if (name && this.userForm.password !== '') this.$router.push({ path: "/Attacker" })
          return
        case '观众':

      }
      this.$message.error('登录失败, 请重试...')
    },
  },
};
</script>
<style scoped lang="less">
.backgroundImg {
  width: 100%;
  height: 100vh;
  background: url("https://cdn.pixabay.com/photo/2019/03/08/21/13/record-4043223_1280.jpg")
    no-repeat;
  background-size: 110% 100%;
  display: flex;
  justify-content: center;
  /* align-items: center; */
}
.login-form {
    width: 350px;
    height: 450px;
    border-radius: 5px;
    border: 1px solid #fff;
    margin: 10em auto;
    position: relative;
    overflow: hidden;
    text-align: center;
    padding: 20px;
    box-sizing: border-box;
    p {
      font-size: 18px;
      font-weight: 700;
    }
}
.form-logo {
    width: 100px;
    margin-bottom: 20px;
}
p {
    margin-bottom: 20px;
    color: #fff;
}
/* .userForm {
    width: 350px;
} */
.form-input {
    position: relative;
}
.login-text {
    /* font-size: 14px;
    line-height: 1.5;
    color: #666666;
    display: block;
    width: 100%;
    border: 1px solid #e3e7ed;
    height: 42px;
    border-radius: 3px;
    padding: 0 30px 0 45px;
    overflow: hidden; */
}
.login-text /deep/ .el-input__inner {
    padding: 0 40px;
}
.select-radio /deep/ .el-radio-button__orig-radio:checked+.el-radio-button__inner {
  background-color: #67c23a;
  border: 1px solid #67c23a;
}
.form-inpt-icon {
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 0 15px;
}
</style>
