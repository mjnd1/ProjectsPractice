import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 导入图标
import './assets/fonts/iconfont.css'
// 引入全局CSS样式
import './assets/css/global.css'
// 配置axios
import axios from 'axios'
// 配置请求的根路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1'
// 全局挂载到vue上面，并且通过$http访问
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
