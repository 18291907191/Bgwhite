<template>
  <div class="login">
    <div class="form">
      <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532412479772&di=054181aa27a78980933091e0fd338d3f&imgtype=0&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201409%2F21%2F20140921125932_2mAvm.thumb.700_0.jpeg" alt="logo">
      <div class="form-group">
        <label for="account">
          <i class="fa fa-user"></i>
        </label>
        <input
          type="text"
          id="account"
          placeholder="Account name"
          autocomplete="off"
          v-model="account"
        >
      </div>
      <div class="form-group">
        <label for="password">
          <i class="fa fa-lock"></i>
        </label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          v-model="password"
          @keyup.enter="login"
        >
      </div>
      <div class="form-group">
        <button class="btn" v-on:keyup.enter="login" @click="login">Sign in</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { setToken, isLogin } from '@/util/assist'

export default {
  layout: 'login',
  data() {
    return {
      account: '',
      password: ''
    }
  },
  created() {
    /*if(isLogin()){
            this.$router.replace('/admin')
        }*/
  },
  methods: {
    checkLogin() {
      if(!this.account || !this.password) {
        return false;
      }
      return true;
    },
    login() {
      let isLogin = this.checkLogin();
      if(!isLogin) {
        return false;
      };
      this.$nuxt.$loading.start();
      axios.postJson('/user/api/v1/login', {
          user: {
            account: this.account,
            password: this.password
          }
        })
        .then(res => {
          this.$nuxt.$loading.finish();
          let data = res.data
          if(!res) {
            return false;
          }
          setToken(res.token);
          this.$router.replace('/admin')
          return
        })
        .catch(error => {
          this.$nuxt.$loading.finish();
        })
    }
  }
}
</script>

<style lang="less" scoped>
img {
  display: block;
  width: 100px;
  height: 100px;
  border-radius: 100%;
  margin: 0 auto 20px auto;
}

.login {
  width: 100%;
  flex: 1;
  overflow-y: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(38, 50, 56);
}

.form {
  width: 360px;
}

.form-group {
  margin-bottom: 25px;
  position: relative;
  font-size: 16px;
}

label {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  width: 30px;
  line-height: 40px;
  text-align: center;
  color: #f7fafc;
}

input,
button {
  display: block;
  width: 100%;
  height: 40px;
  border-radius: 4px;
  color: #fff;
}

input {
  background: transparent;
  border: solid 1px #f7fafc;
  text-indent: 30px;
}

/*input::-webkit-input-placeholder {
    color: #f7fafc;
}*/

button:focus,
input:focus {
  box-shadow: 0 0 8px rgba(250, 250, 250, 0.9);
}

button {
  border: none;
  font-size: 20px;
  background: rgba(42, 136, 197, 0.9);
}

button:hover {
  background: rgba(42, 136, 197, 1);
}

@media screen and (max-width: 960px) {
  .form {
    width: 280px;
  }
  .form-group {
    margin-bottom: 20px;
  }
}
</style>
