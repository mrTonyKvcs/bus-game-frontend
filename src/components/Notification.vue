<template>
        <div class="flex justify-between mt-16 border-b-2 border-lightgray overflow-scroll">
            <div class="flex ">
                <img class="avatar avatar--sm mr-5" alt="" src="~@/assets/images/profil.jpg">
                <div class="flex flex-col pt-2">
                    <div class="flex">
                        <h1 class="mr-2 text-black text-tiny font-bold">{{ notification.sender_id + ' ' + notification.first_name }}</h1>
                        <p class="text-gray text-tiny">ismerösnek jelölt</p>
                    </div>
                    <p class="text-rv text-xs font-semibold">Olvasatlan</p>
                </div>
            </div>
            <div class="flex flex-col">
                <div>
                    <button @click="confirmation()" class="mb-5 py-2 px-8 bg-blue text-white text-tiny font-semibold rounded-full focus:outline-none">Visszajelölés</button>
                    <button @click="deny()" class="pb-8 text-xs text-lightgray">Elutasítás</button>
                </div>
                <button class="text-black">Ismerösöd</button>
            </div>
        </div>
</template>

<script>

export default {
    props: ['notification'],

    methods: {
        confirmation(){
            this.$store.dispatch('confirmation', this.notification.sender_id)
        },

        deny(){
            this.$store.dispatch('deny', this.notification.sender_id)
        }
    }

}
</script>