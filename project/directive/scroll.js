/**
 * Created by czy on 2018/10/23.
 * 自定义指令滚动条，滚动到地址加载数据
 */
import Vue from 'vue'

Vue.directive('scroll', {
    inserted: function (el, binding, vnode, oldVnode) {
        let w = el.offsetHeight,
            cb_name = binding.expression,
            cb = vnode.context[cb_name]
            el.addEventListener('scroll', debounce( async () =>{
              if(el.offsetHeight + el.scrollTop <= el.scrollHeight) {
                try {
                  cb && await cb();
                }catch(e) {
                  console.error(e);
                }
              }
          }, 200));
    }
})
// 函数节流
function throttle(fn, threshold, scope) {
  let timer;
  let prev = Date.now();
  return function () {
      let context = scope || this, args = arguments;
      let now = Date.now();
      if (now - prev > threshold) {
          prev = now;
          fn.apply(context, args);
          timer = null;
      }
  }
}
// 函数防抖
function debounce(fn, delay, scope) {
  let timer = null;
  let count = 1;
  return function () {
      let context = scope || this,
          args = arguments;
      clearTimeout(timer);
    //   console.log(Date.now(), ", 触发第", count++, "次滚动事件！");
      timer = setTimeout(function () {
          fn.apply(context, args);
        //   console.log(Date.now(), ", 可见只有当高频事件停止，最后一次事件触发的超时调用才能在delay时间后执行!");
      }, delay);
  }
}