<template>
    <div class="">
        <div class="flex flex-col items-center w-64 mt-6 mr-2 mb-4">
            <div>
                <img class="avatar avatar--xl" src="~@/assets/images/profil.jpg" alt="">
            </div>
            <div class="mt-6 mb-2 flex items-center">
                <h1 class="text-tiny font-bold">{{ user.first_name + ' ' + user.last_name }}</h1>
            </div>
            <p class="text-sm font-medium">Buszra szállás: 6</p>
            <p class="pb-6 text-sm font-medium">Játék: 12</p>
            <button v-if="user.status" @click="addFriend()" class="py-2 px-8 bg-blue text-white text-tiny font-semibold rounded-full">Jelölés</button>
            <button v-if="!user.status" class="py-2 px-8 bg-yellow text-white text-tiny font-semibold rounded-full">Visszavonás</button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['user'],

    methods: {
        addFriend() {
            this.$store.dispatch('addFriend', this.user.id)
        }
    }
}
</script>