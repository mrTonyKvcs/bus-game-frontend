<template>
    <div class="relative w-1/4 mt-32 mr-24 pt-8 px-10 pb-10 bg-white rounded-mid">
        <img class="absolute avatar avatar--xl avatar--absolute" src="~@/assets/images/profil.jpg" alt="">
        <div class="mb-24 pr-6 flex justify-end">
            <img class="h-8 w-5" src="~@/assets/images/bin.svg" alt="">
        </div>
        <div class="flex justify-between items-end mb-12">
            <div>
                <h1 class="text-lg font-extrabold">{{ friend.first_name + ' ' + friend.last_name }}</h1>
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
</template>

<script>
export default {
    props: ['friend']
}
</script>