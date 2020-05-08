<template>
    <div class="page">
        <SideBar></SideBar> 
        <div class="row">
            <div class="mt-24 mr-20 mb-10 ml-16 flex justify-between text-white">
                <div class="text-3xl font-extrabold">
                    <h1>Barátok</h1>
                    <p class="text-xl font-semibold leading-9">Keress új barátokat és hívd be Őket játszani!</p>
                </div>
                <NavBar></NavBar>
            </div>
            <div class="card__bg">
                <div class="">
                    <div class="flex justify-between">
                        <div>
                            <h1 class="title">Közeli barátok</h1>
                            <p class="description">Akikkel a legtöbbet játszol nap mint nap.</p>
                        </div>
                        <div class="relative h-16 w-1/5 flex justify-end">
                            <div class="absolute inset-y-0 left-0 flex items-center">
                                <img class="h-6 w-auto fill-current pl-10 pr-6" src="~@/assets/images/searchrv.svg" alt="">
                            </div>
                            <input class=" w-full py-4 pl-20 pr-6 text-xs bg-white placeholder-pink-800 border border-solid border-darkmagenta rounded-max outline-none" type="text" placeholder="search">
                        </div>
                    </div>
                </div>
                <div class="flex">
                    <div class="relative w-1/4 mt-32 pt-8 px-10 pb-10 bg-white rounded-mid">
                        <img class="absolute avatar avatar--xl avatar--absolute" src="~@/assets/images/profil.jpg" alt="">
                        <div class="mb-24 pr-6 flex justify-end">
                            <img class="h-8 w-5" src="~@/assets/images/bin.svg" alt="">
                        </div>
                        <div class="flex justify-between items-end mb-12">
                            <div>
                                <h1 class="text-lg font-extrabold">Kovács Emese</h1>
                                <div class="flex items-center">
                                    <img class="h-auto w-4" src="~@/assets/images/status.svg" alt="">
                                    <p class="ml-3 text-xs text-gray font-semibold">Online</p>
                                </div>
                            </div>
                            <div>
                                <img class="h-20 w-16 mr-16" src="~@/assets/images/bar-chart.svg" alt="">
                            </div>
                        </div>
                        <div class="bg-vlightgray p-6 rounded-mid flex">
                            <div class="bg-white rounded-full p-5 mr-4">
                                <img class="h-10 w-10" src="~@/assets/images/gamer.svg" alt="">
                            </div>
                            <div class="flex flex-col items-start justify-center pr-6 mr-8 border-r-2 border-solid border-lightgray">
                                <h1 class="text-lg font-bold">13</h1>
                                <p class="text-xs text-gray">Közös játék</p>
                            </div>
                            <div class="bg-white rounded-full p-5 mr-4">
                                <img class="h-10 w-10" src="~@/assets/images/gamer.svg" alt="">
                            </div> 
                            <div>
                                <h1 class="text-lg font-bold">13</h1>
                                <p class="text-xs text-gray">Közös játék</p> 
                            </div>
                        </div>
                        <div class="flex justify-center mt-10 mb">
                            <button class="btn text-tiny py-4 px-12">Játékra felkérés</button>
                        </div>
                    </div>
                    <div class="relative w-1/4 mt-32 mx-24 pt-8 px-10 pb-10 bg-white rounded-mid">
                        <img class="absolute avatar avatar--xl avatar--absolute" src="~@/assets/images/profil.jpg" alt="">
                        <div class="mb-24 pr-6 flex justify-end">
                            <img class="h-8 w-5" src="~@/assets/images/bin.svg" alt="">
                        </div>
                        <div class="flex justify-between items-end mb-12">
                            <div>
                                <h1 class="text-lg font-extrabold">Kovács Emese</h1>
                                <div class="flex items-center">
                                    <img class="h-auto w-4" src="~@/assets/images/status.svg" alt="">
                                    <p class="ml-3 text-xs text-gray font-semibold">Online</p>
                                </div>
                            </div>
                            <div>
                                <img class="h-20 w-16 mr-16" src="~@/assets/images/bar-chart.svg" alt="">
                            </div>
                        </div>
                        <div class="bg-vlightgray p-6 rounded-mid flex">
                            <div class="bg-white rounded-full p-5 mr-4">
                                <img class="h-10 w-10" src="~@/assets/images/gamer.svg" alt="">
                            </div>
                            <div class="flex flex-col items-start justify-center pr-6 mr-8 border-r-2 border-solid border-lightgray">
                                <h1 class="text-lg font-bold">13</h1>
                                <p class="text-xs text-gray">Közös játék</p>
                            </div>
                            <div class="bg-white rounded-full p-5 mr-4">
                                <img class="h-10 w-10" src="~@/assets/images/gamer.svg" alt="">
                            </div> 
                            <div>
                                <h1 class="text-lg font-bold">13</h1>
                                <p class="text-xs text-gray">Közös játék</p> 
                            </div>
                        </div>
                        <div class="flex justify-center mt-10 mb">
                            <button class="btn text-tiny py-4 px-12">Játékra felkérés</button>
                        </div>
                    </div>
                    <div class="relative w-1/4 mt-32 pt-8 px-10 pb-10 bg-white rounded-mid">
                        <img class="absolute avatar avatar--xl avatar--absolute" src="~@/assets/images/profil.jpg" alt="">
                        <div class="mb-24 pr-6 flex justify-end">
                            <img class="h-8 w-5" src="~@/assets/images/bin.svg" alt="">
                        </div>
                        <div class="flex justify-between items-end mb-12">
                            <div>
                                <h1 class="text-lg font-extrabold">Kovács Emese</h1>
                                <div class="flex items-center">
                                    <img class="h-auto w-4" src="~@/assets/images/status.svg" alt="">
                                    <p class="ml-3 text-xs text-gray font-semibold">Online</p>
                                </div>
                            </div>
                            <div>
                                <img class="h-20 w-16 mr-16" src="~@/assets/images/bar-chart.svg" alt="">
                            </div>
                        </div>
                        <div class="bg-vlightgray p-6 rounded-mid flex">
                            <div class="bg-white rounded-full p-5 mr-4">
                                <img class="h-10 w-10" src="~@/assets/images/gamer.svg" alt="">
                            </div>
                            <div class="flex flex-col items-start justify-center pr-6 mr-8 border-r-2 border-solid border-lightgray">
                                <h1 class="text-lg font-bold">13</h1>
                                <p class="text-xs text-gray">Közös játék</p>
                            </div>
                            <div class="bg-white rounded-full p-5 mr-4">
                                <img class="h-10 w-10" src="~@/assets/images/gamer.svg" alt="">
                            </div> 
                            <div>
                                <h1 class="text-lg font-bold">13</h1>
                                <p class="text-xs text-gray">Közös játék</p> 
                            </div>
                        </div>
                        <div class="flex justify-center mt-10 mb">
                            <button class="btn text-tiny py-4 px-12">Játékra felkérés</button>
                        </div>
                    </div>
                </div>
                <div class="mt-20 flex">
                    <div class="w-full">
                        <h1 class="title">Kit ismerhetek?</h1>
                        <div class="flex overflow-scroll">
                            <Users  v-for="user in allUser" :key="user.id" :user="user"></Users>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Users from '@/components/Users.vue'
import SideBar from '@/components/SideBar.vue'
import NavBar from '@/components/NavBar.vue'


export default {
    components: {
        Users,
        SideBar,
        NavBar
    },

    computed: mapState(['allUser']),

    created () {
        this.$store.dispatch('fetchUsers')
    }
}
</script>