<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <web-cam/>
    <div class="max-w-sm overflow-hidden rounded shadow-lg card--red">
        <div class="px-6 py-4">
            <div class="mb-2 text-xl font-bold">The Coldest Sunset</div>
            <p class="text-base text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
        </div>
        <div class="px-6 py-4">
            <span class="inline-block px-3 py-1 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">#photography</span>
            <span class="inline-block px-3 py-1 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">#travel</span>
            <span class="inline-block px-3 py-1 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">#winter</span>
        </div>
    </div>
  </div>
</template>

<script>
import { WebCam } from "vue-web-cam";

export default {
    components: {
        WebCam
    },
    name: 'HelloWorld',
    props: {
        msg: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

