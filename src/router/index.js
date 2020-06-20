import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Users from '../components/user/Users.vue'
import Rights from '../components/power/Rights.vue'
import Roles from '../components/power/Roles.vue'

Vue.use(VueRouter)

const routes = [{
  // 重定向
  path: '/',
  redirect: '/login'
},
{
  path: '/login',
  component: Login
},
{
  path: '/home',
  component: Home,
  children: [{
    path: '/users',
    component: Users
  },
  {
    path: '/rights',
    component: Rights
  },
  {
    path: '/roles',
    component: Roles
  }
  ]
}
]

const router = new VueRouter({
  routes
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // to 将要访问的路径
  // from 从哪个路径访问过来的
  // next 一个函数，表示放行
  // 如果用户访问的是登录页面，直接放行
  if (to.path === '/login') {
    return next();
  }
  // 从sessionStorage中获取token的值
  const tokenStr = window.sessionStorage.getItem('token');
  // 没有token，强制跳转到登录页面
  if (!tokenStr) {
    return next('/login');
  }
  next();
})

export default router
