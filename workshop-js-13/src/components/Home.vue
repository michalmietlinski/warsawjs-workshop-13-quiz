<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <p>{{ title }}</p>
      </div>
    </div>
    <start-form></start-form>
  </div>
</template>
<script>
import StartForm from './StartForm'

export default {
  name: 'Home',
  components: {
    StartForm
  },
  data(){
      return {
          title: 'Welcome in our app'
      }
  }
}
</script>
