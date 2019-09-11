import Vue from 'vue'
import VueRouter from 'vue-router'

// ページコンポーネントをインポートする
import PhotoList from './pages/PhotoList.vue'
import Login from './pages/Login.vue'
import PhotoDetail from './pages/PhotoDetail.vue'

import store from './store'
import SystemError from './pages/errors/System.vue'

// VueRouterプラグインを使用する
// これによって<RouterView />コンポーネントなどを使うことができる
Vue.use(VueRouter)

// パスとコンポーネントのマッピング
const routes = [
  {
    path: '/',
    component: PhotoList
  },
  {
    path: '/login',
    component: Login,
    beforeEnter (to, from, next) {
      if (store.getters['auth/check']) {
        next('/')
      } else {
        next()
      }
    }
  },
  {
    path: '/vuesplash/photos/:id',
    component: PhotoDetail,
    props: true
  },
  {
    path: '/vuesplash/500',
    component: SystemError
  }
]

// VueRouterインスタンスを作成する
const router = new VueRouter({
    base: '/vuesplash/',
    mode: 'history',
    routes
})

// VueRouterインスタンスをエクスポートする
// app.jsでインポートするため
export default router