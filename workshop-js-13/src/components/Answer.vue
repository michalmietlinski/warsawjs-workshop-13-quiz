<template>
  <div :class="'col-6 ' + correct" @click="highlight">
      {{ answer.content }}
  </div>
</template>
<script>
export default {
  name: 'Answer',
  props: [ 'answer' ],
  data(){
      return{

      }
  },
  computed:{
    highlighted(){
      return this.$store.state.currentQuestion.answerId
    },
    correct(){
        if(typeof this.$store.state.currentQuestion.correct != "undefined"){
          if(this.$store.state.currentQuestion.correct){
            return "correct"
          }else{
            return "wrong"
          }
        }
        return "notanswered"
      
    }
  },
  methods:{
      highlight( e ){
          this.$emit( 'handleAnswer', { id: this.answer.id } )
      }
  }
}
</script>
