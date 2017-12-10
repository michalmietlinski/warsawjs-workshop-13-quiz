<template>
  <div class="row">
    <question :question="actualQuestion"
    ></question>
    <hubert></hubert>
  </div>
</template>
<script>
import Question from './Question'
import Hubert from './Hubert'
export default {
  name: 'Quiz',
  components: {
     Question, Hubert
  },
  data(){
      return{
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
        },
        {
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
        }

        ]
      }
  },
  computed: {
      actualQuestion(){
          return this.questionsList[ this.$store.state.questionIndex ]
      }
  }
}
</script>
