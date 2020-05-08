<template>
  <div class="login">
    <div class="card__login">
      <div class="login__welcome">
        <h1 class="mb-32 text-6xl font-bold">Szia Uram</h1>
        <p class="text-base">Próbáljátok ki a sokak számára más ismerős Buszos ivós játékot, hogy sose kelljen egyedül a poharadhoz nyúlni! </p>
      </div>
      <div class="login__items">
        <div class="pt-10 pr-16 flex justify-end text-base">
          <p class="text-base text-black">Van már regisztrációd?</p>
          <a class="pl-2 text-rv" href="/login"> Jelenkezz be!</a>
        </div>
        <div class="login__input">
          <h1 class="pb-10 text-6xl font-bold text-rv">Regisztráció</h1>
          <div class="mb-20 flex">
            <a href=""><img class="icon" src="~@/assets/images/facebook.svg" alt=""></a>
            <a href=""><img class="icon" src="~@/assets/images/google-plus.svg" alt=""></a>
            <a href=""><img class="icon" src="~@/assets/images/twitter.svg" alt=""></a>
          </div>
          <p class="mb-16 text-xs text-darkgrey">vagy használd az e-mail címed a regisztrációhoz:</p>
          <form @submit.prevent="registration" class="form--login" action="">
            <div class="w-full mb-16 flex justify-between">
               <input v-model="lastName" class="block pb-4 w-2/5 text-gray text-sm font-normal outline-none border-b border-solid border-lightgray "  type="text" placeholder="Vezetéknév" required>
               <input v-model="firstName" class="block pb-4 w-2/5 text-gray text-sm font-normal outline-none border-b border-solid border-lightgray "  type="text" placeholder="Keresztnév" required> 
            </div>
            <input v-model="email" class="block mb-16 pb-4 w-full text-gray text-sm font-normal outline-none border-b border-solid border-lightgray"  type="email" placeholder="E-mail cím" required>
            <input v-model="password" class="block  pb-4 w-full text-gray text-sm font-normal outline-none border-b border-solid border-lightgray"  type="password" placeholder="Jelszó" required>
            <button type="submit" class="btn btn py-5 px-20 mt-24">Regisztrálok</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
  },

  methods: {
    registration () {
      this.$store
        .dispatch('registration', {
          first_name: this.firstName,
          last_name: this.lastName,
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push({ name: 'Login' })
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
