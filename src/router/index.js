import VueRouter from 'vue-router'
import Vue from 'vue'

const Home = () => import('views/home/Home')
const Categroy = () => import('../views/categroy/Categroy')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')
const Detail = () => import('../views/detail/Detail')

Vue.use(VueRouter)



const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/categroy',
      component: Categroy
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/profile',
      component:  Profile
    },{
      path: '/detail/:iid',
      component: Detail
    }
  ],
  mode: 'history'
})

// 解决重复点击报错问题
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

export default router
