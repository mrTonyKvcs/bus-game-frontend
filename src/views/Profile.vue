<template>
    <div class="page">
        <SideBar></SideBar>
        <div class="row">
            <div class="mt-24 mr-20 mb-10 ml-16 flex justify-between text-white">
                <div class="text-3xl font-extrabold">
                    <h1>Profil</h1>
                    <p class="text-xl font-semibold leading-9">Szerkeszd saját profilod</p>
                </div>
                <NavBar></NavBar>
            </div>
            <div class="card__bg">
                <div class="flex justify-between">
                    <div class="flex ">
                        <img class="avatar avatar--xl mr-6" src="~@/assets/images/profil.jpg" alt="">
                        <div class="flex flex-col justify-around w-4/6">
                            <h1 class="text-lg font-extrabold">{{ user.user.first_name + ' ' + user.user.last_name }}</h1>
                            <div class="flex ">
                                <div class="flex items-center mr-20">
                                    <p class="mr-2 text-xl font-extrabold">24</p>
                                    <p class="text-sm text-gray">Barát</p>
                                </div>
                                <div class="flex items-center mr-20">
                                    <p class="mr-2 text-xl font-extrabold">9</p>
                                    <p class="text-sm text-gray">Indulás</p>
                                </div>
                                <div class="flex items-center mr-20">
                                    <p class="mr-2 text-xl font-extrabold">10</p>
                                    <p class="text-sm text-gray">Busz</p>
                                </div>
                                <div class="flex items-center">
                                    <p class="mr-2 text-xl font-extrabold">40</p>
                                    <p class="text-sm text-gray">Korty</p>
                                </div>
                            </div>
                            <p class="text-xs text-gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna elementum, in in quisque nam convallis. Fringilla dictum luctus porttitor eu est morbi vestibulum et. Lectus laoreet interdum orci sed. Elit, nulla scelerisque posuere sagittis.</p>
                        </div>
                        <div class="w-2/6 flex justify-end">
                            <button class="btn h-16 w-64 focus:outline-none">Profil szerkesztése</button>
                        </div>
                    </div>
                </div>
                <div class="mt-32">
                    <h1 class="title">Statisztika</h1>
                </div>
                <div class="flex mt-10 mb-24">
                    <div class="card card--stat w-1/3 pt-10 pl-16">
                        <h1 class="text-xl text-white font-semibold ">Játszott</h1>
                        <h1 class="text-7xl text-white font-bold">32</h1>
                    </div>
                    <div class="card card--stat w-1/3 mx-20 pt-10 pl-16">
                        <h1 class="text-xl text-white font-semibold ">Buszra szállás</h1>
                        <h1 class="text-7xl text-white font-bold">6</h1>
                    </div>
                    <div class="card card--stat w-1/3 pt-10 pl-16">
                        <h1 class="text-xl text-white font-semibold ">Összes korty</h1>
                        <h1 class="text-7xl text-white font-bold">105</h1>
                    </div>
                </div>
                <div class="">
                    <div class="flex justify-between">
                        <div>
                            <h1 class="title">Közeli barátok</h1>
                            <p class="description">Akikkel a legtöbbet játszol nap mint nap.</p>
                        </div>
                    </div>
                </div>
                <div class="flex overflow-scroll">
                    <CloseFriends v-for="friend in friends" :key="friend.id" :friend="friend" ></CloseFriends>
                </div> 
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import SideBar from '@/components/SideBar.vue'
import NavBar from '@/components/NavBar.vue'
import CloseFriends from '@/components/CloseFriends.vue'

export default {
    components: {
        SideBar,
        NavBar,
        CloseFriends
    },

    computed: mapState(['user', 'friends']),

    created() {
        this.$store.dispatch('fetchFriends')
    }

   
}
</script>