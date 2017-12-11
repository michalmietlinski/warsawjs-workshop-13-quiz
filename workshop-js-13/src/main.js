// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(Vuex)
var VueResource = require('vue-resource');
Vue.use(VueResource);

const store = new Vuex.Store({
  state: {
    userName: '',
    maxQuestion:1,
    questionIndex: 0,
    questionPhase: 0, // 0 - waiting, 1 - highlited, 2 - answerd 
    currentQuestion: {},
    answersHistory: [],
    easymode: false,
  },
  mutations: {
    setName (state, payload) {
      state.userName = payload.userName
    },
    updateCurrentQuestion(state, questionData){
      if(state.questionPhase!=2){
      state.questionPhase = 1
      state.currentQuestion = questionData
      }
    },
    finishedQuestion(state , correct){
      state.questionPhase = 2
      state.currentQuestion.correct=correct;
      state.answersHistory.push( state.currentQuestion )
    },
    nextQuestion( state  ){
      
      if(state.questionIndex<state.maxQuestion){

        state.questionPhase = 0;
      state.currentQuestion = {};
      state.questionIndex++;
      }else{
          main.$router.push('/finish')
      }
      
    },
    setDifficultyEasy(state){
      state.easymode=true;
      console.log("easy mode on")
    }
  },
  actions:{
    updateUserName({ commit }, payload){
      commit( 'setName', payload )
    },
    updateCurrentAnswer({ commit }, questionData ){
      commit('updateCurrentQuestion', questionData )
    },
    answerquestion({ commit }, correct ){
      commit('finishedQuestion', correct )
    },
    nextquestion({ commit } ){
      commit('nextQuestion')
    },
    easymode({ commit } ){
      commit('setDifficultyEasy')
    }
  }
})

/* eslint-disable no-new */
var main= new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  data:{
    name: 'sada'
  }
})
