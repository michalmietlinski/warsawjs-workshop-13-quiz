import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        userName: '',
        maxQuestion: 1,
        questionIndex: 0,
        questionPhase: 0, // 0 - waiting, 1 - highlited, 2 - answerd 
        currentQuestion: {},
        answersHistory: [],
        easymode: false,
        finished: false,
        questionsList: [{
            id: "1",
            title: "best car?",
            answers: [{
                id: "1",
                content: "ford",
                correct: false
            }, {
                id: "2",
                content: "fiat",
                correct: false
            }, {
                id: "3",
                content: "tesla",
                correct: false
            }, {
                id: "4",
                content: "GM",
                correct: true
            }]
        }, {
            id: "2",
            title: "Worst car?",
            answers: [{
                id: "1",
                content: "mazda",
                correct: false
            }, {
                id: "2",
                content: "polonez",
                correct: false
            }, {
                id: "3",
                content: "bugatti",
                correct: false
            }, {
                id: "4",
                content: "ferrari",
                correct: true
            }]
        }],
        levels: [{
        value: 100
    }, {
        value: 200
    }, {
        value: 300
    }, {
        value: 400
    }, {
        value: 500
    }, ],
    },
    
    mutations: {
        setName(state, payload) {
            state.userName = payload.userName
        },
        updateCurrentQuestion(state, questionData) {
            if (state.questionPhase != 2) {
                state.questionPhase = 1
                state.currentQuestion = questionData
            }
        },
        finishedQuestion(state, correct) {
            state.questionPhase = 2
            state.currentQuestion.correct = correct;
            state.answersHistory.push(state.currentQuestion)
        },
        nextQuestion(state) {

            if (state.questionIndex < state.maxQuestion) {

                state.questionPhase = 0;
                state.currentQuestion = {};
                state.questionIndex++;
            } else {
                state.finished = true;
                router.push('/finish')
            }

        },
        setDifficultyEasy(state) {
            state.easymode = true;
            console.log("easy mode on")
        },
        setFinish(state) {
            state.finished = true;
        }
    },
    actions: {
        updateUserName({
            commit
        }, payload) {
            commit('setName', payload)
        },
        updateCurrentAnswer({
            commit
        }, questionData) {
            commit('updateCurrentQuestion', questionData)
        },
        answerquestion({
            commit
        }, correct) {
            commit('finishedQuestion', correct)
        },
        nextquestion({
            commit
        }) {
            commit('nextQuestion')
        },
        easymode({
            commit
        }) {
            commit('setDifficultyEasy')
        },
        finish({
            commit
        }) {
            commit('setFinish')
        }
    },
    getters: {
        isname: state => {
            if (state.userName && state.userName.length > 0) {
                return true
            }
            return false
        },
        finished: state => {
            if (state.finished) {
                return true
            }
            return false
        }
    }
})

export default store