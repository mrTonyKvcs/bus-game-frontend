<template>
    <div class="page">
        <SideBar></SideBar>
        <div class="row">
            <div class="mt-24 mr-20 mb-10 ml-16 flex justify-between text-white">
                <div class="text-3xl font-extrabold">
                    <h1>Áttekintés</h1>
                    <p class="text-xl font-semibold leading-9">Indíts játékot, kezeld ismerőseid, csatlakozz másokhoz! </p>
                </div>
                <NavBar></NavBar>
            </div>
            <div class="card__bg">
                <div class="card__welcome">
                    <div class="w-1/2">
                        <img class="rounded-l-max" src="~@/assets/images/index-card.jpg" alt="">
                    </div>
                    <div class="w-1/2 ml-20 flex flex-col justify-center ">
                        <h1 class="mb-10 text-4xl font-semibold">Hello {{ user.user.first_name }}!</h1>
                        <p class="mb-16 text-xl font-medium">Üdvözlünk a Buszos ivós játékban. Mielőtt elkezdenél játszani, keress és jelöld be barátaidat, hogy tudj kivel játékot kezdeményezni. Amennyiben már rendelkezel barátokkal, indíts új játékot!</p>
                        <div>
                            <router-link to="/game"><button class="btn h-16 w-64 mr-10 focus:outline-none"> játék indítása</button></router-link>
                            <router-link to="/friends"><button  class="btn h-16 w-64 btn--white focus:outline-none">Barátok</button></router-link>
                        </div>
                    </div>
                </div>
                <div class="flex">
                    <div class="w-4/6"> 
                        <div class="">
                            <h1 class="title">Játék</h1>
                            <h2 class="description pb-6">Utolsó játékaid statisztikái</h2>
                            <div class="flex">
                                <div class="card mr-10 py-8 px-10 flex flex-col justify-between text-white text-xs font-semibold">
                                    <div class="flex justify-between">
                                        <p>2020.02.21 // 20:34 - 22:54</p>
                                        <img class="avatar avatar--xs" src="~@/assets/images/profil.jpg" alt="">
                                    </div>
                                    <h1 class="text-lg">Játék neve ide kerül </h1>
                                    <div class="flex justify-between">
                                        <div>
                                            <p>Buszra szállásaid</p>
                                            <p>3x</p>
                                        </div>
                                        <div>
                                            <p>Megivott kortyaid</p>
                                            <p>21</p>
                                        </div>
                                        <div>
                                            <p>Nyertes</p>
                                            <p>Polyák Mátyás</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card py-8 px-10 flex flex-col justify-between text-white text-xs font-semibold">
                                    <div class="flex justify-between">
                                        <p>2020.02.21 // 20:34 - 22:54</p>
                                        <img class="avatar avatar--xs" src="~@/assets/images/profil.jpg" alt="">
                                    </div>
                                    <h1 class="text-lg">Játék neve ide kerül </h1>
                                    <div class="flex justify-between">
                                        <div>
                                            <p>Buszra szállásaid</p>
                                            <p>3x</p>
                                        </div>
                                        <div>
                                            <p>Megivott kortyaid</p>
                                            <p>21</p>
                                        </div>
                                        <div>
                                            <p>Nyertes</p>
                                            <p>Polyák Mátyás</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-24">
                            <h1 class="title">Barátok</h1>
                            <h2 class="description">Akikkel utoljára játszottál és azok statisztikái</h2>
                            <div class="flex">
                                <Friends v-for="friend in friends" :key="friend.id" :friend="friend"></Friends>
                            </div>
                        </div>
                    </div>
                    <div class="w-2/6 flex justify-end">
                        <div class="card__chat">
                            <h1 class="text-2xl font-extrabold">Üzenőfal</h1>
                            <div class="flex mt-8">
                                <img class="avatar avatar--md" src="~@/assets/images/profil.jpg" alt="">
                                <div class="w-full ml-6 px-6 flex items-center justify-between rounded-max border-2 border-solid border-vlightgray">
                                    <input class="w-full outline-none text-sm rounded-max" type="text" placeholder="Mi jár a fejedben?">
                                    <a href=""><img class="icons--send" src="~@/assets/images/send.svg" alt=""></a>
                                </div>
                            </div>
                            <div class="mt-12 flex overflow-scroll">
                                <img class="avatar avatar--md mr-6" src="~@/assets/images/profil.jpg" alt="">
                                <div>
                                    <h2 class="text-tiny .font-medium">Savannah Miles</h2>
                                    <h3 class="text-sm text-lightgray">2020.04.11 - 22:45</h3>
                                    <p class="text-xl text-vdgray ">Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delicata est.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import SideBar from '@/components/SideBar.vue'
import NavBar from '@/components/NavBar.vue'
import Friends from '@/components/Friends.vue'

export default {
    components: {
        SideBar,
        NavBar,
        Friends
    },

    computed: mapState(['user', 'friends']),

    created() {
        this.$store.dispatch('fetchFriends')
    },
}
</script>