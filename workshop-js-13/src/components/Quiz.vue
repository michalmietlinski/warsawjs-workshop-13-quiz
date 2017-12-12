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
      return{}
  },
  computed: {
    questionsList(){
      return this.$store.state.questionsList
    },
      actualQuestion(){
          return this.questionsList[ this.$store.state.questionIndex ]
      }
  }
}
</script>
