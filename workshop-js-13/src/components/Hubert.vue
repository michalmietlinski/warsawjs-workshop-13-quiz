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
        <h4>Jesteś na pytaniu {{qindex}} z {{Object.keys(levels).length}}</h4><br/>
        <ul>
          <li v-for="(level, index) in levels" v-bind:class="[(index+1) < qindex ? 'green': '', (index+1) ==qindex ? 'actual': '']">{{level.value}}</li>
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
     },
     levels(){
      return this.$store.state.levels
    },
    
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
ul li{
  list-style:none;
  -webkit-transition: all 500ms;
    -moz-transition: all 500ms;
    -o-transition: all 500ms;
    transition: all 500ms;

}
.green{
color: green;
 -webkit-transition: all 500ms;
    -moz-transition: all 500ms;
    -o-transition: all 500ms;
    transition: all 500ms;
}
.actual{
  -webkit-transition: all 500ms;
    -moz-transition: all 500ms;
    -o-transition: all 500ms;
    transition: all 500ms;
  font-size:150%;
  color:blue;
}
</style>