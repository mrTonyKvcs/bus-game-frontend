<template>
    <div class="w-2/5 flex items-center justify-end">
        <a href=""><img class="avatar avatar--sm" src="~@/assets/images/profil.jpg" alt=""></a>
        <a class="h-20 ml-4 pr-8 flex items-center text-sm font-bold border-r border-solid border-white" href=""><h2>{{ user.user.first_name + ' ' + user.user.last_name }}</h2></a>
        <div class="relative">
            <button @click="isOpen = !isOpen" href="" class="focus:outline-none"><img class="icons--nav" src="~@/assets/images/bell.svg" alt=""></button>
            <img v-if="notifications.length" class="icons--notification absolute top-0 right-0" src="~@/assets/images/notification.svg" alt="">
            <div v-if="isOpen"  class="absolute pt-12 pl-10 pr-6 bg-white notification rounded-mid shadow-lg z-50">
                <div class="flex items-center justify-between">
                    <h1 class="text-black text-2xl font-bold">Értesítések</h1>
                    <p class="text-rv text-xl font-semibold">{{ notifications.length }} új</p>
                </div>
                <Notification v-for="notification in notifications" :key="notification.id" :notification="notification"></Notification>
            </div>
        </div>
        <a class="icons--nav" href="/login"><img class="" src="~@/assets/images/logout.svg" alt=""></a>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import Notification from '@/components/Notification.vue'

export default {
    components: {
        Notification
    },

    data() {
        return{
            isOpen: false
        }
    },

    computed: mapState(['user', 'notifications']),

    created() {
        this.$store.dispatch('fetchNotifications')

    },
}
</script>