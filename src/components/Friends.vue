<template>
        <div class="flex flex-col items-center w-64 mt-6 overflow-scroll">
            <div>
                <img class="avatar avatar--xl" src="~@/assets/images/profil.jpg" alt="">
            </div>
            <div class="mt-6 mb-2 flex items-center">
                <h1 class="text-tiny font-bold">{{ friend.last_name + ' ' + friend.first_name }}</h1>
                <img class="icons--status ml-4" src="~@/assets/images/status.svg" alt="">
            </div>
            <p class="text-sm font-medium">Buszra szállás: 6</p>
            <p class="text-sm font-medium">Játék: 12</p>
        </div>
</template>

<script>
export default {
    props: ['friend']
}
</script>