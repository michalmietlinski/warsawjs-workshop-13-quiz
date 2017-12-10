<template>
   <div class="col-md-2">
       <h1>Hey, jestem Hubert</h1>
       Status: {{state}}
       <p>Pytanie {{question}}</p>
       <div v-if="state === 1">
           Czy jesteś pewien ?
           <button @click="accept">Tak</button>
       </div>
       <div v-if="state === 2">
           Idziemy dalej?
           <button @click="movenext">Tak</button>
       </div>
   </div>
</template>
<script>
import checker from '../assets/validate.js'

export default {
 name: 'Hubert',
 data(){
     return {
         
     }
 },
 computed: {
     question(){
         return this.$store.state.currentQuestion
     },
     state(){
         return this.$store.state.questionPhase
     }
 },
 methods: {
     accept(){
          this.$store.dispatch( 'answerquestion',  checker( this.question.questionId, this.question.answerId  )  )
         
     },
     movenext(){

      if(this.$store.state.currentQuestion.correct){
         console.log(this.$store.state.currentQuestion.correct)
          this.$store.dispatch( 'nextquestion')
      }else{
              this.$router.push('/finish')
      }
     }
 }
}
</script>