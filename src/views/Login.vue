<template>
  <div class="login">
    <div class="card__login">
      <div class="login__welcome">
        <h1 class="mb-32 text-6xl font-bold">Szia Uram</h1>
        <p class="text-base">Próbáljátok ki a sokak számára más ismerős Buszos ivós játékot, hogy sose kelljen egyedül a poharadhoz nyúlni! </p>
      </div>
      <div class="login__items">
        <div class="pt-10 pr-16 flex justify-end text-base">
          <p class="text-base text-black">Nincs még fiókod?</p>
          <a class="pl-2 text-rv" href="/registration"> Regisztrálj!</a>
        </div>
        <div class="login__input">
          <h1 class="pb-10 text-6xl font-bold text-rv">Bejelenkezés</h1>
          <div class="pb-24 flex">
            <a href=""><img class="icon" src="~@/assets/images/facebook.svg" alt=""></a>
            <a href=""><img class="icon" src="~@/assets/images/google-plus.svg" alt=""></a>
            <a href=""><img class="icon" src="~@/assets/images/twitter.svg" alt=""></a>
          </div>
          <form class="form--login" @submit.prevent="login">
            <input name="email" v-model="email" class="block pb-4 mb-16 w-full text-gray text-tiny font-normal  border-b border-solid border-lightgray outline-none"  type="text" placeholder="E-mail cím">
            <input name="password" v-model="password" class="block pb-4 w-full text-gray text-tiny font-normal  border-b border-solid border-lightgray outline-none"  type="text" placeholder="Jelszó">
            <button type="submit" class="btn py-5 px-20 mt-24">Bejelenkezés </button>
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
