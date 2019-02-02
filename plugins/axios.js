import * as axios from 'axios'
import { getCookieInClient } from '../util/assist'
import { Message } from 'element-ui';
import Vue from 'vue';

export default ({ app, store, redirect }) => {
  // The server-side needs a full url to works
  if (process.SERVER_BUILD) {
    axios.defaults.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`
  }
  axios.defaults.timeout = 300000; // 请求超时

var loading;
function startLoading() {
  loading = Vue.prototype.$loading({
    lock: true,
    text: "客观，别慌。",
    background: 'rgba(38,50, 56, .4)',
    target: document.querySelector('.loading-area') //设置加载动画区域
  });
}

function endLoading() {
  loading.close();
}

// 声明一个对象用于存储请求个数
var needLoadingRequestCount = 0;

function showFullScreenLoading() {
  if (needLoadingRequestCount === 0) {
    startLoading();
  }
  needLoadingRequestCount++;
};

function tryHideFullScreenLoading() {
  if (needLoadingRequestCount <= 0) return;
  needLoadingRequestCount--;
  if (needLoadingRequestCount === 0) {
    endLoading();
  }
};
  // interceptors request
  axios.interceptors.request.use(config => {
    if (typeof document === 'object') {
      let token = getCookieInClient('token')
      if (token) {
        config.headers.Authorization = token;
      }
    }
    showFullScreenLoading();
    return config;
  }, err => {
    tryHideFullScreenLoading();
    Message.error({
      message: '请求超时'
    });
    return Promise.reject(err);
  });

  axios.interceptors.response.use(res => {
    tryHideFullScreenLoading();
    switch(res.data.code) {
      case 200:
        return res.data.result;
      case 401:
        Message.error({
          message: res.data.message,
        });
        redirect('/login');
        return Promise.reject(res);
      case 201:
        Message.error({
          message: res.data.message,
        })
        return Promise.reject(res);
      default:
        return Promise.reject(res);  
    }
  }, error => {
    tryHideFullScreenLoading();
    switch(error.response.code) {
      case 500:
        Message.error({
          message: '服务器出差去了~'
        });
        break;
      case 504:
        Message.error({
          message: '服务器被吃了'
        });
        break;
      case 403:
        Message.error({
          message: '权限不足，请呼叫狗尾草'
        });
        break;
      default:
        Message.error({
          message: '深山丛林，信号不好，网络超时。'
        });
    }
    return Promise.reject(error);
  });
  axios.postJson = (url, params) => {
    return axios({
      method: 'post',
      url: url,
      data: params,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  axios.post = (url, params) => {
    return axios({
      method: 'post',
      url: url,
      data: params,
      transformRequest: [function (data) {
        let ret = ''
        for (let it in data) {
          ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        return ret
      }],
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
  }
  axios.get = (url, data = {}) => {
    return axios({
      method: 'get',
      params: data,
      url: url,
    });
  }

}