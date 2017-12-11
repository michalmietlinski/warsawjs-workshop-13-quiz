import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Quiz from '@/components/Quiz'
import Finish from '@/components/Finish'
import store from '../store'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Home',
        component: Home
    }, {
        path: '/quiz',
        name: 'Quiz',
        component: Quiz,
        beforeEnter: (to, from, next) => {
            if(store.getters.isname){
            next();
          }else{
            next('/')
          }
        }


    }, {
        path: '/finish',
        name: 'Finish',
        component: Finish,
        beforeEnter: (to, from, next) => {
            if(store.getters.finished&&store.getters.isname){
            next();
            }else{
            next('/')
          }
        }
    }]
})