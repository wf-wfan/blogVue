import Vue from 'vue'
import Router from 'vue-router'
// import detail from '@/views/detail/index'
// import home from '@/views/home/index'
// import friendslink from '@/views/friendslink/index'
// import archive from '@/views/archive/index'
// import aboutme from '@/views/aboutme/index'
// import reward from '@/views/reward/index'
// import user from '@/views/user/index'
// import likeCollect from '@/views/likeCollect'
// import message from '@/views/message'

const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}


Vue.use(Router)
let savedPosition = false
export default new Router({
  mode: 'hash',
  scrollBehavior: (to, from) => {
    // console.log('to, from, savedPosition', to, from, savedPosition)
    if (savedPosition) {
      return {
        y: 670
      }
    } else {
      savedPosition = true
      return {
        y: 0
      }
    }
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/home/index'),
      meta: {
        title: '首页',
        keepAlive: true
      }
    },
    {
      path: '/detail',
      name: 'Detail',
      component: () => import('@/views/detail/index'),
      meta: {
        title: '详情页',
        keepAlive: true
      }
    },
    {
      path: '/articleAdd',
      name: 'ArticleAdd',
      component: () => import('@/views/articleAdd/index'),
      meta: {
        title: '添加文章',
        keepAlive: false
      }
    },

    {
      path: '/archive',
      name: 'Archive',
      component: () => import('@/views/archive/index'),
      meta: {
        title: '归档',
        keepAlive: true
      }
    },
    {
      path: '/friendslink',
      name: 'Friendslink',
      component: () => import('@/views/friendslink/index'),
      meta: {
        title: '友链',
        keepAlive: true
      }
    },
    {
      path: '/reward',
      name: 'Reward',
      component: () => import('@/views/reward/index'),
      meta: {
        title: '赞赏',
        keepAlive: true
      }
    },
    {
      path: '/message',
      name: 'Message',
      component: () => import('@/views/message/index'),
      meta: {
        title: '留言板',
        keepAlive: true
      }
    },
    {
      path: '/aboutme',
      name: 'Aboutme',
      component: () => import('@/views/aboutme/index'),
      meta: {
        title: '关于',
        keepAlive: true
      }
    },
    {
      path: '/user',
      name: 'User',
      component: () => import('@/views/user/index'),
      meta: {
        title: '个人中心',
        keepAlive: true
      }
    },
    {
      path: '/likeCollect',
      name: 'LikeCollect',
      component: () => import('@/views/likeCollect/index'),
      meta: {
        title: '喜欢/收藏',
        keepAlive: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/login/index'),
      meta: {
        title: '登录',
        keepAlive: false
      }
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
