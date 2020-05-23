<template>
  <div id="app">
    <aside class="sidebar"><SideBar></SideBar></aside>
    <div class="wrapper">
      <header class="header lg:hidden md:hidden sm:hidden xl:block"><Header></Header></header>
      <main class=""><router-view/></main>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import SideBar from '@/components/SideBar.vue'

export default {
  name: 'App',
  components: {
    Header,
    SideBar
  }
}
</script>
