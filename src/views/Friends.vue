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
                    <CloseFriends v-for="friend in friends" :key="friend.id" :friend="friend"></CloseFriends>
                </div>
                <div class="mt-20 flex">
                    <div class="w-full">
                        <h1 class="title">Kit ismerhetek?</h1>
                        <div class="flex overflow-scroll">
                            <Users  v-for="user in filteredUsers" :key="user.id" :user="user"></Users>
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
import CloseFriends from '@/components/CloseFriends.vue'

export default {
    components: {
        Users,
        SideBar,
        NavBar,
        CloseFriends
    },

    computed:{ 
        ...mapState(['user', 'users', 'friends']),

        filteredUsers() {
            return this.users.filter(user => {
                return user.id != this.user.user.id
            })
        }
    },

    created () {
        this.$store.dispatch('fetchUsers'),
        this.$store.dispatch('fetchFriends')
    }
}
</script>