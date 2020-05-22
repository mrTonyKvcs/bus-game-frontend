<template>
  <div id="app">
    <aside class="sidebar"><SideBar></SideBar></aside>
    <div class="wrapper">
      <header class="header"></header>
      <main class=""><router-view/></main>
    </div>
  </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue'

export default {
  name: 'App',
  components: {
    SideBar
  }
}
</script>
