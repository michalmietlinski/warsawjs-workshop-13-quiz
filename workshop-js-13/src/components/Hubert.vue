<template>
   <div class="col-md-3">
       <h3>Hey {{name}}, jestem Hubert</h3>
       <!-- Status: {{state}}
       <p>Pytanie {{question}}</p> -->
        <div v-if="easy">Grasz w trybie bezpiecznym</div>
       <div v-if="state === 0">
        Czekam na Twoją odpowiedź
       </div>
       <div v-if="state === 1">
           Czy jesteś pewien ?
           <button @click="accept">Tak</button>
       </div>
       <div v-if="state === 2">
           Idziemy dalej?
           <button @click="movenext">Tak</button>
       </div>

       <div class="row">
        <h4>Jesteś na pytaniu {{qindex}}</h4><br/>
        <ul>
          <li></li>
        </ul>
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
     },
     name(){
          return this.$store.state.userName
     },
     easy(){
        return this.$store.state.easymode
     },
     qindex(){
        return this.$store.state.questionIndex+1

     }
 },
 methods: {
     accept(){
          this.$store.dispatch( 'answerquestion',  checker( this.question.questionId, this.question.answerId  )  )
         
     },
     movenext(){

      if(this.$store.state.currentQuestion.correct||this.$store.state.easymode){
          this.$store.dispatch( 'nextquestion')
      }else{
        this.$store.dispatch( 'finish')
              this.$router.push('/finish')
      }
     }
 }
}
</script>
<style scoped>
h4{
  display:inline-block;
  width:100%; 
}
</style>