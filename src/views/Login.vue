<template>
  <div class="container">
    <h1>Login</h1>
    <form @submit.prevent="login">
      <input class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="email" name="email" v-model="email" placeholder="jane@example.com">

      <input class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="password" name="password" v-model="password" placeholder="jane@example.com">
      <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },

  methods: {
    login () {
      this.$store
        .dispatch('login', {
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push({ name: 'Dashboard' })
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
