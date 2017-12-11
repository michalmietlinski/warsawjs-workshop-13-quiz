<template>
  <form @submit.prevent="startGame">
    <div class="col-12 d-flex justify-content-center">
      <div class="form-group">
        <label for="user-name">Podaj imie</label>
        <input type="text" :placeholder="placeholderText" v-model="userName"><br/>
        <label><input type="radio" @click="setEasy">Tryb prosty (odpowiedz na wszystkie pytania)</label>
      </div>
    </div>
    <button type="submit" class="btn btn-primary" v-if="userName">{{ buttonText }}</button>
    <button class="btn btn-primary" v-else>Wpisz imie</button>

  </form>
</template>
<script>
export default {
  name: 'StartForm',
  data(){
      return {
        userName: '',
        placeholderText: 'Wpisz imie'
      }
  },
  computed: {
    buttonText(){
      return `Zacznij grę jako ${ this.userName }`
    }
  },
  methods: {
    startGame( e ){
      this.$store.dispatch('updateUserName', { userName: this.userName })
      this.$router.push('/quiz')
    },
    setEasy(){
            this.$store.dispatch('easymode')
    }
  }
}
</script>
