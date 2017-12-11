<template>
    <div class="col-sm-9">
        <h1>{{ question.title }}</h1>
        <div class="row">
        <answer v-for="(answer, index) in question.answers" v-bind:answer="answer" :key="index" @handleAnswer="selectAnswer" >
        </answer>
        </div>
      </div>
</template>
<script>
import Answer from './Answer'

export default {
  name: 'Question',
  props: [ 'question' ],
  data(){
      return{
          
      }
  },
  // computed:{
  
  // },
  components: {Answer},
  methods: {
      selectAnswer( answerData ){
        this.$store.dispatch( 'updateCurrentAnswer', { questionId: this.question.id, answerId: answerData.id } )
      }
  }
}
</script>
