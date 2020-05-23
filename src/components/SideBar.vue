<template>
    <div class="bg-purple-900 flex h-32 items-center justify-between px-4 relative xl:flex-col xl:items-start xl:justify-start xl:w-sidebar">
        <div class="sidebar__title xl:text-center xl:pt-28 xl:w-full">
            <a>Bus <span class="text-redviolet">Game</span></a>
        </div>
        <MobileSidebar></MobileSidebar>
        <ul class="block font-bold lg:hidden md:hidden pl-16 pt-64 sm:hidden text-white text-xl xl:block">
            <router-link to="/"><a class="duration-700 ease-in-out flex hover:text-orange-medium py-10 space-x-5 transition">
                <img class="w-8" src="~@/assets/images/dashboard-white.svg" alt="">
                <h1>Áttekintés</h1>
            </a></router-link>
            <router-link to="/game"><a class="duration-700 ease-in-out flex hover:text-orange-medium py-10 space-x-5 transition">
                <img class="w-8" src="~@/assets/images/bus-white.svg" alt="">
                <h1>Játék</h1>
            </a></router-link>
            <router-link to="/friends"><a class="duration-700 ease-in-out flex hover:text-orange-medium py-10 space-x-5 transition">
                <img class="w-8" src="~@/assets/images/friend-white.svg" alt="">
                <h1>Barátok</h1>
            </a></router-link>
            <router-link to="/profile"><a class="duration-700 ease-in-out flex hover:text-orange-medium py-10 space-x-5 transition">
                <img class="w-8" src="~@/assets/images/profile-white.svg" alt="">
                <h1>Profil</h1>
            </a></router-link>
        </ul>
    </div>
</template>

<script>
import MobileSidebar from '@/components/MobileSidebar'

export default {
    components: {
        MobileSidebar
    },
}
</script>