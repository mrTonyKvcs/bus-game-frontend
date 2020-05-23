<template>
    <div class="xl:hidden">
        <a @click.prevent="sidebarOpen=true" href=""><img class="w-12" src="~@/assets/images/menu.svg" alt=""></a>

        <div v-show="sidebarOpen" class="absolute bg-white md:h-screen md:w-1/2 p-8 right-0 text-purple-900 text-tiny top-0 tracking-wide w-full z-10">
            <div class="flex justify-end">
                <a @click.prevent="sidebarOpen=false"  href=""><img class="w-12" src="~@/assets/images/close.svg" alt=""></a>
            </div>
            <div class="bg-purple-900 block my-8 text-white">
                <div class="flex items-center justify-around px-10 py-8">
                    <img class=" h-auto rounded-full w-16" src="~@/assets/images/1.jpg" alt="">
                    <h1 class="border-solid border-r border-white pr-8 py-6">Kovács Attila</h1>
                    <img class="w-8" src="~@/assets/images/notification.svg" alt="">
                    <img class="w-8" src="~@/assets/images/logout.svg" alt="">
                </div>
            </div>
            <ul class="mt-8">
                <router-link to="/"><a class="flex py-5 space-x-5">
                    <img class="w-8" src="~@/assets/images/dashboard.svg" alt="">
                    <h1>Áttekintés</h1>
                </a></router-link>
                <router-link to="/game"><a class="flex py-5 space-x-5">
                    <img class="w-8" src="~@/assets/images/bus.svg" alt="">
                    <h1>Játék</h1>
                </a></router-link>
                <router-link to="/friends"><a class="flex py-5 space-x-5">
                    <img class="w-8" src="~@/assets/images/friend.svg" alt="">
                    <h1>Barátok</h1>
                </a></router-link>
                <router-link to="/profile"><a class="flex py-5 space-x-5">
                    <img class="w-8" src="~@/assets/images/profile.svg" alt="">
                    <h1>Profil</h1>
                </a></router-link>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            sidebarOpen: false
        }
    },
}
</script>