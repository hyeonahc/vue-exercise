import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import SignUp from '../views/SignUp.vue'
import SignIn from '../views/SignIn.vue'
import MyPage from '../views/MyPage.vue'

export default createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: '/',
      name: 'mainpage',
      component: MainPage
    },
    {
      path: '/signup',
      component: SignUp
    },
    {
      path: '/signin',
      component: SignIn
    },
    {
      path: '/mypage',
      component: MyPage
    },
  ]
})
