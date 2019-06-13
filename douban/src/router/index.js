import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/home.vue'
import Broadcast from '@/pages/Broadcast/broadcast.vue'
import Group from '@/pages/Group/group.vue'
import Audio from '@/pages/Audio/audio.vue'
import Mine from '@/pages/Mine/mine.vue'

//配置二级路由
import Film from '../components/film'
import Tv from '../components/tv'
import City from '../components/city'
import Read from '../components/read'
import Music from '../components/music'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {path:'/home',name:'Home2',component:Home},
    {path:'/broadcast',name:'Broadcast',component:Broadcast},
    {path:'/group',name:'Group',component:Group},
    {path:'/audio',name:'Audio',component:Audio,children:[
      //二级路由，不要加/
       {path:'film',component:Film},
       {path:'tv',component:Tv},
       {path:'read',component:Read},
       {path:'city',component:City},
       {path:'music',component:Music}
    ]},
    {path:'/mine',name:'Mine',component:Mine}
  ]
})
